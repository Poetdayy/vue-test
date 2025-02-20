<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
</script>

<template>
  <header class="header">Workspace Settings</header>
</template>

<style scoped lang="scss">
$border-color: #e4e4e7;
.header {
  height: 64px;
  padding: 16px;
  border-bottom: solid 1px $border-color;
}
</style>
