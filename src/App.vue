<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router'
import Panel from '@/layouts/Panel.vue'
import Header from '@/layouts/Header.vue'

const isCollapsed = ref(false);

const togglePanel = () => {
  isCollapsed.value = !isCollapsed.value;
};
</script>

<template>
  <div :class="['grid-layout', { collapsed: isCollapsed }]">
    <Header class="header" />

    <Panel class="panel" :isCollapsed="isCollapsed" @toggle="togglePanel" />

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
  transition: grid-template-columns 0.3s ease;
}

.grid-layout.collapsed {
  grid-template-columns: 80px 1fr;
}

.header {
  height: 64px;
  grid-column: 2 / 3;
  position: fixed;
  top: 0;
  left: 232px;
  right: 0;
  background: white;
  z-index: 1000;
  transition: left 0.3s ease;
}

.grid-layout.collapsed .header {
  left: 80px;
}

.panel {
  grid-row: 1 / 3;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    width: 232px;
    transition: width 0.3s ease;
}

.main {
  grid-column: 2 / 3;
  margin-top: 64px; /* Để tránh bị header che */
  overflow-y: auto; /* Chỉ main cuộn */
  height: calc(100vh - 64px);
}
</style>
