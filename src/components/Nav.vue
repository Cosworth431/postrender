<template>
    <div>  
        <nav> 
            <li><a style="cursor: pointer; text-decoration: underline" v-on:click="navigate('/')">Hello Page</a></li>
            <li><a style="cursor: pointer; text-decoration: underline" v-on:click="navigate('/intro')">Intro Page</a></li>
            <li><a style="cursor: pointer; text-decoration: underline" v-on:click="navigate('/posts')">Posts Page</a></li>
            <li><a style="cursor: pointer; text-decoration: underline" v-on:click="navigate('/list')">List Page</a></li>
        </nav> 
    </div>
</template>

<script>
import router from '../router'

export default {
    name: 'navigation',
    methods: {
        navigate(path) {
            router.push({ path });
        }
    }
}    
</script>

<style>
h2 {
    font-weight: normal;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>