<template>
    <message v-bind:user="user" v-bind:date="date">
        <!-- use slots to display the content as text -->
    </message>
</template>

<script>
export default {
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
}
</script>