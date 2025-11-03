<script lang="ts" setup>

  import Windows7 from '@/components/Windows7/BootManager.vue';

  const app = useApp();

  usePageTitle('Windows Boot Manager');
</script>

<template>
  <div>
    <Windows7 v-if="app.isBootManagerWindows7" />
  </div>
</template>


<style>

</style>