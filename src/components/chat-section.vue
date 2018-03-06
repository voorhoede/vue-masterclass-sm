
<template>
  <section class="chat-section">
    <div class="chat-section__messages">
      <message-list></message-list>
    </div>
    <message-field class="chat-section__field"></message-field>
  </section>
</template>

<script>
import MessageField from "./message-field"
import MessageList from "./message-list"

export default {
  components: {
    MessageField,
    MessageList
  }
}
</script>
