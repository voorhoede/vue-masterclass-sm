
<template>
  <aside class="search-sidebar">
    <button class="reset-button search-sidebar__close" aria-label="Close" title="Close"></button>
    <h2 class="search-sidebar__header">{{ filteredMessages.length }} Messages</h2>
    <message-list :messages="filteredMessages"></message-list>
  </aside>
</template>

<script>
import MessageList from "./message-list"
import { mapState } from 'vuex';

export default {
  components: {
    MessageList
  },

  computed: {
    // implement your search functionality here as a computed property
    // use this.searchText as the search query. Search in this.messages
    ...mapState({
      messages: state => state.messages.items,
      searchText: state => state.messages.searchText
    }),

    filteredMessages() {
      return this.searchText !== ''
        ? this.messages.filter(message => message.text.indexOf(this.searchText) > -1)
        : [];
    }
  }
}
</script>
