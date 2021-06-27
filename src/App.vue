<template>
  <Header />
  <Landing />
</template>

<script>
import Header from './components/header/Header.vue'
import Landing from './components/landing/Landing.vue'

export default {
  name: 'App',
  components: {
    Header,
    Landing
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: Helvetica, Arial, sans-serif;
}

#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
