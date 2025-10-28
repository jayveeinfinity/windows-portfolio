<script lang="ts" setup>
  import bgClouds from '@/assets/images/bg/clouds.jpg';
  import Boot from '@/components/Windows98/Boot.vue';
</script>

<template>
  <Boot />
  <div class="bg-cover bg-center min-h-screen" :style="{ backgroundImage: `url(${bgClouds})` }">
    <slot />
    <Taskbar />
  </div>
</template>

<style>

</style>