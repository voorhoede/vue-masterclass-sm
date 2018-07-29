
function createMessage(text) {
    let message = {
        user: {
        name: 'Remco',
        avatar: ''
        },
        date: new Date()
    }

    if(text.indexOf('/cat') === 0) {
        message.type = 'cat';
    }
    else {
        message.type = 'text';
        message.text = text;
    }

    return message;
}

export default {
    state: {
        items: [],
        searchText: ''
    },

    actions: {
        saveMessage({ commit }, text) {
            const message = createMessage(text);
            commit('appendMessage', message);
        }
    },

    mutations: {
        appendMessage(state, message) {
            state.items.push(message);
        },

        setSearchText(state, text) {
            state.searchText = text;
        }
    }
}