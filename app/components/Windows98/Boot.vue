<template>
  <div>
    <transition name="fade">
      <div
        v-if="isLoading"
        class="fixed inset-0 flex items-center justify-center z-[9999]"
      >
        <img :src="loading" alt="Loading..." class="w-full h-full" />
      </div>
    </transition>
  </div>
</template>

<script lang="ts" setup>
  import { ref, onMounted } from 'vue'
  import loading from '@/assets/images/gif/win98.gif';
  import loadingSound from '@/assets/sounds/win98.mp3';

  const isLoading = ref(true);
  const isFading = ref(false);

  onMounted(() => {
    const audio = new Audio(loadingSound);

    audio.play();

    audio.addEventListener('ended', () => {
        isFading.value = true;
        setTimeout(() => (isLoading.value = false), 800);
    })
  })
</script>

<style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.8s ease;
  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>