<template>
  <NavBar />
  <div>
    <slider />
  </div>
  <Doacao />
</template>

<script>
import NavBar from './components/NavBar.vue'
import slider from './components/slider.vue';
import Doacao from './components/Doacao.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    slider,
    Doacao
  }
}
</script>

<style>
html{
  scroll-behavior: smooth;
}
</style>
