
<template>
  <section class="chat-section">
    <div class="chat-section__messages">
      <message-list v-bind:messages="messages"></message-list>
    </div>
    <message-field @submit="onSubmitMessage" class="chat-section__field"></message-field>
  </section>
</template>

<script>
import MessageField from "./message-field"
import MessageList from "./message-list"

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
