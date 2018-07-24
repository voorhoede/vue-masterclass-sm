
<template>
  <div class="message-list">
    <div class="message-list__empty">
      No messages
    </div>
    
    <ol class="message-list__list">
      <message></message>
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
