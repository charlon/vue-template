<template>
  <div class="border-solid border-4 border-light-blue p-12 text-center">
    <header>
      <img alt="Vue logo" src="./assets/logo.png" class="inline" />
      <HelloWorld msg="Hello Vue 3.0 + Vite" />
    </header>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view />
    <footer>this is the footer</footer>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>
