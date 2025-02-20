<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Panel from '@/layouts/Panel.vue'
import Header from '@/layouts/Header.vue'
</script>

<template>
  <div class="grid-layout">
    <Header class="header" />

    <Panel class="panel" />

    <main class="main">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.grid-layout {
  display: grid;
  grid-template-columns: 232px 1fr;
  grid-template-rows: 60px 1fr;
  height: 100vh;
}

.header {
  height: 64px;
  grid-column: 2 / 3;
}

.panel {
  grid-row: 1 / 3;
  background: #e4e4e7;
}
</style>
