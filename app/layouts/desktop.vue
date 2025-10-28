<script lang="ts" setup>
  import Windows98 from './os/windows-98.vue';
  import WindowsXP from './os/windows-xp.vue';

  const app = useApp();
</script>

<template>
  <div>
    <Windows98 v-if="app.currentOS === 'windows98'" />
    <WindowsXP v-if="app.currentOS === 'windowsxp'" />
  </div>
</template>

<style>

</style>