<script lang="ts" setup>
  
</script>

<template>
  <div class="bg-black w-screen h-screen flex items-center justify-center">
    <div
      class="aspect-square w-[90vmin] max-w-[640px] bg-[#111] border-[4px] border-[#2f2f2f]
            rounded-[8px] shadow-[0_0_30px_rgba(0,255,0,0.15)] flex items-center justify-center
            text-[#96ff96] font-msdos text-xl leading-normal select-none relative overflow-hidden scanlines"
    >
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-[#00ff0030] to-transparent opacity-30 pointer-events-none"></div>

      <p class="z-10 text-center">
        MS-DOS 6.22 <br />
        Starting up...
      </p>
    </div>
  </div>
</template>

<style>
  @keyframes scanlines {
    0%, 100% { opacity: 0.25; }
    50% { opacity: 0.35; }
  }

  .scanlines::after {
    content: "";
    position: absolute;
    inset: 0;
    background: repeating-linear-gradient(
      to bottom,
      rgba(0, 255, 0, 0.04),
      rgba(0, 255, 0, 0.04) 1px,
      transparent 2px,
      transparent 4px
    );
    animation: scanlines 1s infinite;
    pointer-events: none;
  }
</style>