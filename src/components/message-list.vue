
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
      >
      
      <template v-for="message of messages">
          <text-message 
              v-if="message.type === 'text'"
              :key="message.id" 
              :date="message.date"
              :user="message.user"
              :text="message.text">
          </text-message>

          <cat-message 
              v-else-if="message.type === 'cat'"
              :key="message.id" 
              :date="message.date"
              :user="message.user">
          </cat-message>
      </template>
      
      </message>
    </ol>
  </div>
</template>

<script>
import Message from "./message"
import CatMessage from "./cat-message"
import TextMessage from "./text-message"

export default {
  components: {
    Message,
    CatMessage,
    TextMessage
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
