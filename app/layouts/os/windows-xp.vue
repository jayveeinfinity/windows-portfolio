<script lang="ts" setup>
  import bgBliss from '@/assets/images/bg/bliss.jpg';
  import Boot from '@/components/WindowsXP/Boot.vue';
</script>

<template>
  <Boot />
  <div class="bg-cover bg-center min-h-screen" :style="{ backgroundImage: `url(${bgBliss})` }">
    <slot />
    <Taskbar />
  </div>
</template>

<style>

</style>