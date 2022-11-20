<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Menu from './components/Menu.vue';

</script>


<template>

  <header>
    <div class="wrapper">
      <Header msg="การสร้างวงจร LED"> </Header>

      <Menu></Menu>

    </div>
  </header>

  <RouterView />

</template>



