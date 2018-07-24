
<template>
  <section class="chat-section">
    <div class="chat-section__messages">
      <message-list v-bind:messages="messages"></message-list>
    </div>
    <!-- bind to the custom event of the message-field -->
    <message-field @submit="onSubmitMessage" class="chat-section__field"></message-field>
  </section>
</template>

<script>
import MessageField from "./message-field"
import MessageList from "./message-list"

function createMessage(text) {
  return {
    text,
    user: {
      name: 'Remco',
      avatar: ''
    },
    date: new Date()
  }
}

export default {
  components: {
    MessageField,
    MessageList
  },
  data() {
    return window.chat;
  },
  methods: {
    //create a handler for the custom event
    onSubmitMessage(text) {
      const message = createMessage(text);
      this.messages.push(message);
    }
  }
}
</script>
