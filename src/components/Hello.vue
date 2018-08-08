<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>Essential Links:</h3>
    <ol>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="http://chat.vuejs.org/" target="_blank" rel="noopener">Vue Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank" rel="noopener">Docs for This Template</a></li>
    </ol>
    <h2>Ecosystem</h2>
    <input v-model="firstname" placeholder="First name">
    <p>Message is: {{ firstname }}</p>
  </div>
</template>

<script>
import router from '../router'

export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Hello Page',
    }
  },
  methods: {
      navigate() {
           router.push({ name: "Intro" });
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h3 {
  font-weight: normal;
  padding: 0 10px;
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
