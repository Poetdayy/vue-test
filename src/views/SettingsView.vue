<template>
  <div class="settings-page">
    <DashBoardToolbar v-model="activeTab" />

    <div class="settings-content">
      <div v-if="activeTab === 'general'">
        <h2>General Settings</h2>
      </div>

      <div v-if="activeTab === 'settings-pack'">
        <settings-packs></settings-packs>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import DashBoardToolbar from '@/components/workspace.settings/dashboard.toolbar/DashBoardToolbar.vue'
import SettingsPacks from '@/components/workspace.settings/SettingsPacks.vue'

const activeTab = ref('general')
</script>

<style scoped>
.settings-page {
  height: 100%;

  .settings-content {
    height: 100%;
  }
}
</style>
