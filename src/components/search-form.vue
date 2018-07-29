

<template>
  <form class="search-form">
    <input type="search" placeholder="Search" :value="searchText" @input="onChangeSearchText" class="reset-text search-field">
  </form>
</template>

<script>
import { mapMutations, mapState } from 'vuex';

export default {
  components: {},

  computed: {
    ...mapState({
      searchText: state => state.messages.searchText
    })
  },

  methods: {
    ...mapMutations([
      'setSearchText'
    ]),

    onChangeSearchText(e) {
      this.setSearchText(e.target.value);
    }
  }
}
</script>
