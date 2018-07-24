
<template>
  <aside class="app-sidebar">
    <h1 class="app-sidebar__title">
      De Voorhoede
    </h1>
    <user-profile></user-profile>
    <channel-list></channel-list>
  </aside>
</template>

<script>
import ChannelList from "./channel-list"
import UserProfile from "./user-profile"

export default {
  components: {
    ChannelList,
    UserProfile
  }
}
</script>
