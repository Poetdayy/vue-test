<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
</script>

<template>
  <header class="header"><div class='title'>Workspace Settings</div></header>
</template>

<style scoped lang="scss">
$border-color: #e4e4e7;
$text-color: #18181B;
.header {
  height: 64px;
  padding: 16px;
  border-bottom: solid 1px $border-color;
  display: flex;
  align-items: center;

  .title{
      color: $text-color;
      font-size: 16px;
      font-weight: 500;
  }
}
</style>
