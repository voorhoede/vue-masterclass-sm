
const host = 'https://47d5b5d4-2c20-4148-b8a1-17c31fecf5ef-bluemix.cloudant.com';

const defaultUser = {
    name : "Anoniempje",
    avatar : "./images/avatar.png"
}

function fixMessage(message) {
    return Object.assign(message, {
        date : new Date(message.date)
    });
}

function random() {
    return window.crypto.getRandomValues(new Uint8Array(32));
}

const url = '_~0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

function id(size) {
    size = size || 21
    var id = ''
    var bytes = random(size)
    while (0 < size--) {
        id += url[bytes[size] & 63]
    }
    return id
}

export default class {
    
    async init() {
        const userId = this.getUserId();

        const users = await this.getUsers();

        if(!users.some(user => user._id === userId)) {
            await this.createUser(userId);
        }

        return {userId, users};
    }

    createUser(id) {
        let user = Object.assign({
            _id : id,
            type : 'user'
        }, defaultUser);

        return fetch(`${host}/messages`, {
            method : 'POST',
            body : JSON.stringify(user),
            headers : {
                'Content-Type' : 'application/json'
            }
        })
        .then(res => res.json())
        .then(({rev}) => {
            user._rev = rev;
            return user;
        });
    }

    updateUser(user) {
        return fetch(`${host}/messages/${user._id}?_rev=${user._rev}`, {
            method : 'PUT',
            body : JSON.stringify(user),
            headers : {
                'Content-Type' : 'application/json'
            }
        })
        .then(res => res.json())
        .then(({rev}) => {
            user._rev = rev;
            return user;
        });
    }

    getUserId() {
        let userId;

        if(!userId) {
            userId = window.localStorage.getItem('userId');
        }

        if(!userId) {
            userId = id(32);
            window.localStorage.setItem('userId', userId);
        }

        return userId;
    }

    getUsers() {
        return fetch(`${host}/messages/_design/users/_view/users?include_docs=true`)
            .then(res => res.json())
            .then(data => {
                return data.rows.map(({doc}) => {
                    return doc;
                });
            });
    }

    getChannels() {
        return fetch(`${host}/messages/_design/channels/_view/channels?include_docs=true`)
            .then(res => res.json())
            .then(data => {
                return data.rows.map(({doc}) => {
                    return doc;
                });
            });
    }

    getChannelMessages(channelId) {
        const startKey = JSON.stringify([channelId]);
        const endKey = JSON.stringify([`${channelId}\uffff`]);
        return fetch(`${host}/messages/_design/messages_sorted/_view/messages_sorted?include_docs=true&startkey=${startKey}&endkey=${endKey}`)
            .then(res => res.json())
            .then(data => {
                return data.rows.map(({doc}) => {
                    return fixMessage(doc);
                });
            });
    }

    startStream({channelId}, callback) {
        const stream = new EventSource(`${host}/messages/_changes?feed=eventsource&include_docs=true&since=now`);
        stream.addEventListener('message', (e) => {
            const data = JSON.parse(e.data);
            if(data.doc.type === 'message') {
                if(data.doc.channel !== channelId) {
                    return;
                }
                callback( fixMessage(data.doc) );
            }
            else {
                callback( data.doc );
            }
        });
        return stream;
    }

    addMessage(message) {
        message = Object.assign({type : 'message'}, message);

        return fetch(`${host}/messages`, {
                method : 'POST',
                body : JSON.stringify(message),
                headers : {
                    'Content-Type' : 'application/json'
                }
            })
            .then(res => res.json());
    }

    addChannel(name) {
        const channel = {type : 'channel', name};

        return fetch(`${host}/messages`, {
                method : 'POST',
                body : JSON.stringify(channel),
                headers : {
                    'Content-Type' : 'application/json'
                }
            })
            .then(res => res.json());
    }
}