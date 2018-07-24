
<template>
  <div class="message-list">
    <div class="message-list__empty" v-if="messages.length === 0">
      No messages
    </div>
    
    <ol class="message-list__list" v-else>
      <message v-for="message of messages"
        v-bind:key="message.id"
        v-bind:text="message.text" 
        v-bind:user="message.user" 
        v-bind:date="message.date"
      ></message>
    </ol>
  </div>
</template>

<script>
import Message from "./message"

export default {
  components: {
    Message
  },

  props: {
    messages: {
      type: Array,
      default: () => {
        return []
      },
      required: true
    }
  }
}
</script>
