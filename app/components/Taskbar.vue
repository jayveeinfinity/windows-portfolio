<template>
  <div class="taskbar">
    <button class="start-button toggle" title="Click here to begin.">
      <img :src="startIcon">
      <b>Start</b>
    </button>
    <div class="taskbar-divider"></div>
    <div class="tasks"></div>
    <div class="taskbar-divider"></div>
    <div class="tray inset-shallow">
      <div class="tray-icons">
        <img class="tray-icon" :src="taskSchedulerIcon" title="Task Scheduler is not ready." onclick="showMessageBox({iconID: 'info', message: 'Good day to you!'})">
        <img class="tray-icon" :src="audioIcon" title="Volume" onclick="showMessageBox({iconID: 'info', message: 'Have a wonderful day!'})">
      </div>
      <div class="taskbar-time" ondblclick="showMessageBox({iconID: 'info', message: 'Time to get an old clock!'})" title="Tuesday, October 28 at 02:10 PM">02:10 PM</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import startIcon from '@/assets/images/icons/start.png'
  import taskSchedulerIcon from '@/assets/images/icons/task-scheduler-16x16.png'
  import audioIcon from '@/assets/images/icons/audio-okay-16x16.png'
</script>

<style>

</style>