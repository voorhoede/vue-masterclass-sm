<template>
    <message v-bind:user="user" v-bind:date="date">
        
    </message>
</template>

<script>
import Message from './message';

export default {
    components: {
        Message
    },
    props : {
        user : {
            type : Object,
            required : true,
            validator : function (value) {
                return "name" in value && "avatar" in value;
            }
        },
        date : {
            type : Date,
            required : true
        },
        text : {
            type : String,
            required : true
        }
    }
};
</script>