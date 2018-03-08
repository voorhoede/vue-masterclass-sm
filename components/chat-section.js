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
            <message-field class="chat-section__field"></message-field>
        </section>
    `
});