
<template>
  <ol class="message-list__list">
    <message></message>
  </ol>
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
