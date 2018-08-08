<template>
  <div id="app">
    <header>
      <span>Vue.js PWA template is here!!!</span>
    </header>
    <main>
      <img src="./assets/postrender_logo.png" width="300" height="100" alt="Test logo here"></img>
      <nav><Navigation></Navigation></nav>      
      <router-view></router-view>
    </main>
  </div> 
</template>

<script>
import Navigation from './components/Nav'

export default {
    name: 'app',
    components: { 
      'Navigation': Navigation 
    } 
}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  text-align: center;
  margin-top: 0px;
  padding: 0 20px;
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495E;
  color: #ffffff;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}

nav {
  background-color: #00C4FF;
}
</style>
