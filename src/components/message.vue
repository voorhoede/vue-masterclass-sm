
<template>
  <li class="message">
    <div class="message__header">
      <img src="images/avatar.png" class="message__avatar">
      <strong>{{ user.name }}</strong>
      <span class="message__date">{{ date }}</span>
    </div>
    <div class="message__content">
      <!-- add a slot with the name "content" -->
    </div>
  </li>
</template>

<script>
export default {
  components: {},

  props: {
    user: {
      type: Object,
      required: true,
      validator: function(value) {
        return "name" in value && "avatar" in value
      }
    },
    date: {
      type: Date,
      required: true
    }
  }
}
</script>
