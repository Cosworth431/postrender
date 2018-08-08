<template>
    <div class="Intro">
        <h1>{{title}}</h1>
        <p>This is the introduction page, may the tests be with you</p>
        <h4>Please proceed to enter your information</h4>
    </div>
</template>

<script>
    import router from '../router'

    export default {
        name: 'intro',
        data () {
            return {
                title: 'Welcome to the introduction page'
            }
        },
        methods: {
            navigate() {
                router.push({ name: "Hello" });
            }
        }
    }
</script>

<style>
h1, h2 {
  font-weight: normal;
}

h4 {
  border-left: 10px;
}
ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495E;
}
</style>

