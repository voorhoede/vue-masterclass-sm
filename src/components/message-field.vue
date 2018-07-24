
<template>
  <form class="message-field" @submit.prevent="onSubmit">
    <input class="reset-text message-field__input" type="text" v-model="text" autofocus>
    <input class="message-field__submit" v-bind:disabled="text.trim() === ''" type="submit">
  </form>
</template>

<script>

export default {
  components: {},

  data() {
    return {
      text: ''
    }
  },

  methods: {
    onSubmit() {
      /*
        - emit a custom event to the chat-section (with the entered text)
        - in the chat-section bind to the custom event and use the createMessage method to add the message to the messages array
      */
    }
  }
}
</script>
