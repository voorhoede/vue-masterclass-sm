
<template>
  <section class="chat-section">
    <div class="chat-section__messages">
      <message-list v-bind:messages="messages"></message-list>
    </div>
    <message-field @submit="saveMessage" class="chat-section__field"></message-field>
  </section>
</template>

<script>
import MessageField from "./message-field"
import MessageList from "./message-list"
import { mapActions, mapState } from 'vuex';

export default {
  components: {
    MessageField,
    MessageList
  },
  computed: {
    //return messages from the store (use ...saveMessage or $store.state)
    ...mapState({
      messages: state => state.messages.items
    })
  },
  methods: {
    // append a message by using the store action "saveMessage". Use mapActions or $store.dispatch
    ...mapActions([
      'saveMessage'
    ])
  }
}
</script>
