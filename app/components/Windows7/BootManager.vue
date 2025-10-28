<script lang="ts" setup>
  import { ref, onMounted, onUnmounted } from 'vue'

  const app = useApp();

  const operatingSystems = ref([
    'Windows 98',
    'Windows XP',
    'Windows 7'
  ])
  const selectedIndex = ref(0)

  const handleKeydown = (e: KeyboardEvent) => {
    console.log(e.key)
    if (e.key === 'ArrowUp') {
      if(selectedIndex.value === 0) return;

      selectedIndex.value = (selectedIndex.value - 1 + operatingSystems.value.length) % operatingSystems.value.length
    } else if (e.key === 'ArrowDown') {
      if(selectedIndex.value === operatingSystems.value.length - 1) return;

      selectedIndex.value = (selectedIndex.value + 1) % operatingSystems.value.length
    } else if (e.key === 'Enter') {
      loadOperatingSystem();
    } else if (e.key === 'Escape') {
      app.setActiveScreen('boot');
    }
  }

  const loadOperatingSystem = () => {
    app.setActiveOS(operatingSystems.value[selectedIndex.value].toLowerCase().replace(' ', '') as any);
    app.setActiveScreen('desktop');
  }

  onMounted(() => {
    window.addEventListener('keydown', handleKeydown)
  })

  onUnmounted(() => {
    window.removeEventListener('keydown', handleKeydown)
  })
</script>

<!-- 
#b0f0df -->
<template>
  <div class="bg-black w-screen h-screen flex items-center justify-center">
    <div class="aspect-square w-[98vmin] max-w-[98vmin] flex flex-col justify-between text-white text-xl font-msdos select-none">
      <div class="text-center text-black bg-gray-w7">Windows Boot Manager</div>
      <div class="flex-1 flex flex-col px-3 py-8">
          <p>Choose an operating system to start, or press TAB to select a tool:<br>(Use the arrow keys to highlight your choice, then press ENTER.)</p>
          <div class="px-10 py-5">
            <ul class="list-none w-full text-left">
              <li
                v-for="(os, index) in operatingSystems"
                :key="os"
                class="transition-colors"
                :class="{
                  'bg-gray-w7 text-black': selectedIndex === index,
                  'bg-transparent': selectedIndex !== index
                }"
              >
                {{ os }}
              </li>
            </ul>
          </div>
          <p class="mt-10">To specify an advanced option for this choice, press F8.</p>
          <p class="mb-10">
            Seconds until the highlighted choice will be started automatically:
            <span>10</span></p>
          <p class="mt-10">Tools:</p>
          <p class="mt-5 px-10">Windows Memory Diagnostic</p>
      </div>
      <div class="flex justify-between bg-gray-w7 text-black">
        <span>ENTER=Choose</span>
        <span>TAB=Menu</span>
        <span>ESC=Cancel</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .bg-gray-w7 {
    background-color: #b0f0df;
  }
</style>