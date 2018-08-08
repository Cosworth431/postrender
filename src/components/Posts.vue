<template>
    <div class='Posts'>
        <h1>{{main_title}}</h1>
        <h3>{{instructions}}</h3>
        <input v-model="user_enter" placeholder="enter here"></input>
        <button v-on:click="add_title(user_enter)">{{button_name}}</button>
        <h3>Post titles:</h3>
        <ul>
            <li v-for="item in post_title">{{item}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'posts',

    data () {
        return {
            main_title: 'Welcome to the Posts List',
            instructions: 'Please enter the post title below',
            user_enter: '',
            button_name: 'Enter',
            post_title: ['title one','title two']
        }
    },

    methods: {
        add_title: function (user_enter) {
            this.post_title = user_enter
            return this.post_title
        }
    }
}
</script>

<style>
h1, h3: {
    font-weight: normal;
    padding: 0 10px;
}
</style>
