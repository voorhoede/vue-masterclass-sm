
Vue.component('channel-list', {
    data() {
        return window.chat;
    },

    template : `
        <div class="channel-list">
            <button @click="addChannel">Add</button>
            <h2 class="channel-list__header">Channels</h2>
            <ul>
                <li v-for="channel of channels" :key="channel._id" class="channel-list__item" :class="{'channel-list__item--current' : channel._id === currentChannel}" @click="switchChannel(channel._id)">
                    <span class="channel-list__bullet">#</span> {{ channel.name }}
                </li>
            </ul>
        </div>
    `,

    methods : {
        switchChannel(id) {
            this.currentChannel = id;
        },

        addChannel() {
            const channelName = window.prompt('Channel name');
            window.api.addChannel(channelName);
        }
    }
});