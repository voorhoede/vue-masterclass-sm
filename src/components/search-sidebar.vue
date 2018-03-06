
<template>
  <aside class="search-sidebar">
    <button class="reset-button search-sidebar__close" aria-label="Close" title="Close"></button>
    <h2 class="search-sidebar__header">0 Messages</h2>
    <message-list></message-list>
  </aside>
</template>

<script>
import MessageList from "./message-list"

export default {
  components: {
    MessageList
  }
}
</script>
