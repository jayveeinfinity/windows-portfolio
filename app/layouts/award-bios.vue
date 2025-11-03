<script lang="ts" setup>
  import userSideBlueIcon from '@/assets/images/misc/user-side-blue-icon.jpg';
  import energyStarLogo from '@/assets/images/misc/energy-star-logo.jpg';
  import { onMounted, onBeforeUnmount } from 'vue'

  usePageTitle('Booting up...');
  
  const app = useApp();

  const handleKeydown = (event: KeyboardEvent) => {
    if (event.key === 'F1') {
      event.preventDefault()
      app.setActiveScreen('desktop')
      app.setActiveOS('windows98')
    }

    if (event.key === 'F12') {
      // event.preventDefault()
      // app.setActiveScreen('bootmenu')
    }
  }

  onMounted(() => {
    window.addEventListener('keydown', handleKeydown)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('keydown', handleKeydown)
  })
</script>

<template>
  <div class="bg-black w-screen h-screen">
    <div class="absolute top-1/2 left-1/2 -translate-1/2">
      <div class="w-[1024px] h-[768px]">
        <div class="aspect-[4/3] text-[#969696] text-xl font-msdos leading-[normal] select-none">
          <div class="flex flex-row justify-between">
            <div>
              <div class="flex flex-row items-center mb-3">
                <img :src="userSideBlueIcon" class="h-[48px]">
                <div class="ml-2">
                  <p>Award Module BIOS v4.50PG, An Energy Star Ally</p>
                  <p>Copyright (C) 1984-95, Award Software, Inc.</p>
                </div>
              </div>
              <br>
              <p>w6160 V1.3 111700</p>
              <br>
              <p>Intel Core-i5 7700K 4.20Ghz ~(4 Cores)</p>
              <p>Memory Test : 16777216 KB</p>
              <br>
              <p>Award Plug and Play BIOS Extension v1.0A</p>
              <p>Copyright (C) 1998, Award Software, Inc.</p>
              <table class="ml-5 mt-2 mb-10">
                <tbody>
                  <tr>
                    <td>Detecting IDE Primary Master</td>
                    <td class="px-4">...</td>
                    <td>B6B_CD00</td>
                  </tr>
                  <tr>
                    <td>Detecting IDE Primary Slave</td>
                    <td class="px-4">...</td>
                    <td>None</td>
                  </tr>
                  <tr>
                    <td>Detecting IDE Secondary Master</td>
                    <td class="px-4">...</td>
                    <td>None</td>
                  </tr>
                  <tr>
                    <td>Detecting IDE Secondary Slave</td>
                    <td class="px-4">...</td>
                    <td>None</td>
                  </tr>
                </tbody>
              </table>
              <p>Floppy disk(s) fail (40)</p>
              <p>CMOS checksum error - Defaults loaded</p>
            </div>
            <div>
              <img :src="energyStarLogo" class="w-60">
            </div>
          </div>
          <div class="absolute bottom-10 left-5">
            <p>Press <span class="text-white">F1</span> to load default OS, <span class="text-white">F12</span> to select from boot menu</p>
            <p>11/17/2000-i4402X-W977-2A690M4MC-00</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>

</style>