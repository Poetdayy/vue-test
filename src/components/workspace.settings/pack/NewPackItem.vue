<script setup lang="ts">
const emit = defineEmits(['create-pack'])
</script>

<template>
  <button class="create-pack-card" @click="emit('create-pack')">
    <span>+ Create pack</span>
  </button>
</template>

<style scoped lang="scss">
$title_color: '#3F3F46';
$background_color: '#D4D4D8';

.create-pack-card {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  background-color: $background_color;
  font-size: 16px;
  font-weight: 500;
  color: $title_color;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #f3f4f6;
  }
}
</style>
