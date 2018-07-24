
<template>
  <form class="message-field">
    <!-- bind a input event to the text input -->
    <input class="reset-text message-field__input" type="text" value="Message" autofocus>
    <input class="message-field__submit" v-bind:disabled="text.trim() === ''" type="submit">
  </form>
</template>

<script>
export default {
  components: {},

  data() {
    return {
      text: '' //<-- bind this data property to the value of the text input
    }
  },

  methods: {
    //create a event handler for the input event and write the event.target.value into the local state
  }
}
</script>
