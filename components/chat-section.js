Vue.component('chat-section', {
<<<<<<< HEAD
    data : function () {
        return window.chat;
    },

    template : `
        <section class="chat-section">
            <div class="chat-section__messages">
                <message-list v-bind:messages="messages"></message-list>
=======
    template : `
        <section class="chat-section">
            <div class="chat-section__messages">
                <message-list></message-list>
>>>>>>> feat: exercise 3
            </div> 
            <message-field class="chat-section__field"></message-field>
        </section>
    `
});