<template>
    <div class="app app--searching">
        <app-header></app-header>
        <app-sidebar></app-sidebar>
        <chat-section></chat-section>
        <search-sidebar></search-sidebar>
    </div>
</template>

<script>
import AppHeader from './components/app-header.vue';
import AppSidebar from './components/app-sidebar.vue';
import ChannelList from './components/channel-list.vue';
import ChatSection from './components/chat-section.vue';
import MessageList from './components/message-list.vue';
import MessageField from './components/message-field.vue';
import Message from './components/message.vue';
import SearchForm from './components/search-form.vue';
import SearchSidebar from './components/search-sidebar.vue';
import UserProfile from './components/user-profile.vue';

export default {
    components: {
        AppHeader,
        AppSidebar,
        ChannelList,
        ChatSection,
        MessageList,
        MessageField,
        Message,
        SearchForm,
        SearchSidebar,
        UserProfile
    }
}
</script>