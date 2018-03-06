Vue.component('chat-section', {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> feat: exercise 3 solution
    data : function () {
        return window.chat;
    },

<<<<<<< HEAD
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
=======
    template : `
        <section class="chat-section">
            <div class="chat-section__messages">
                <message-list v-bind:messages="messages"></message-list>
>>>>>>> feat: exercise 3 solution
            </div> 
            <message-field v-on:submit="onSubmit" class="chat-section__field"></message-field>
        </section>
    `,

    methods : {
        onSubmit(text) {
            this.messages.push({
                id : this.messages.length,
                date : new Date(),
                user : this.user,
                text,
            });
        }
    }
});