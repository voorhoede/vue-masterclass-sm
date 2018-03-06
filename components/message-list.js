Vue.component('message-list', {
    props : {
        messages : {
            type : Array,
            default : () => {
                return [];
            },
            required : true
        }
    },

    template : `
        <div class="message-list">
<<<<<<< HEAD
            <div v-if="messages.length === 0" class="message-list__empty">
=======
            <div class="message-list__empty">
>>>>>>> feat: exercise 3
                No messages
            </div>

            <ol class="message-list__list">
<<<<<<< HEAD
                <message 
                    v-for="message of messages" 
                    :key="message.id" 
                    :text="message.text"
                    :avatar="message.user.avatar"
                    :date="message.date"
                    :user="message.user"
                    >
                </message>
=======
                <message></message>
>>>>>>> feat: exercise 3
            </ol>
        </div>
    `
});