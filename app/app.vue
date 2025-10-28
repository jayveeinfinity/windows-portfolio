<script lang="ts" setup>

  import AwardBios from './layouts/award-bios.vue';
  import WindowsBootManager from './layouts/windows-boot-manager.vue';
  import Desktop from './layouts/Desktop.vue';
  
  const app = useApp();
</script>

<template>
  <div>
    <AwardBios v-if="app.isBooting" />
    <WindowsBootManager v-if="app.isBootMenu" />
    <Desktop v-if="app.isDesktop"/>
  </div>
</template>