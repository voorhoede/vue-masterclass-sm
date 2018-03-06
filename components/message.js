Vue.component('message', {
    props : {
<<<<<<< HEAD
        user : {
            type : Object,
            required : true,
            validator : function (value) {
                return "name" in value && "avatar" in value;
            }
=======
        avatar : {
            type : String,
            required : true
        },
        user : {
            type : Object,
            required : true
>>>>>>> feat: exercise 3
        },
        date : {
            type : Date,
            required : true
        },
        text : {
            type : String,
            required : true
        }
    },

    template : `
        <li class="message">
            <div class="message__header">
<<<<<<< HEAD
                <img v-bind:src="user.avatar" class="message__avatar"> 
                <strong>{{ user.name }}</strong> 
                <span class="message__date">{{ date.toLocaleTimeString() }}</span>
            </div>
            <div class="message__content">
                {{ text }}
=======
                <img src="images/avatar.png" class="message__avatar"> 
                <strong>Anoniempje</strong> 
                <span class="message__date">11:23:09</span>
            </div>
            <div class="message__content">
                hello world
>>>>>>> feat: exercise 3
            </div>
        </li>
    `
});