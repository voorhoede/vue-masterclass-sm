
<template>
  <form class="search-form">
    <input type="search" placeholder="Search" v-model="searchText" class="reset-text search-field">
  </form>
</template>

<script>
export default {
  components: {},

  data() {
    return window.chat;
  },
}
</script>
