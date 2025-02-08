<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';
import SecondaryNavbar from './components/SecondaryNavbar.vue';

</script>

<template>
  <Navbar />
  <SecondaryNavbar />
  <RouterView />
</template>