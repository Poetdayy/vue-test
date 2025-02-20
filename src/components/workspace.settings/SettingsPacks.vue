<template>
  <div class="settings-pack-page">
    <h1 class="header">All settings packs</h1>
    <div class="description">
      Combine task types, fields, status, labels, automation together to quickly update multiple
      project.
    </div>

    <PacketList />
  </div>
</template>

<script setup lang="ts">
import PacketList from './pack/PacketList.vue'
</script>

<style scoped lang="scss">
$description_color: #71717a;

.settings-pack-page {
  display: flex;
  flex-direction: column;
  padding: 24px;
  height: 100%;

  .header {
    font-size: 20px;
    line-height: 28px;
    font-weight: 600;
    margin-bottom: 8px;
  }

  .description {
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: $description_color;
  }

  .settings-content {
    padding: 24px;
  }
}
</style>
