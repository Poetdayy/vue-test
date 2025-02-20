<template>
  <div class="packet-list">
    <NewPackItem />
    <PacketItem v-for="pack in packs" :key="pack.id" :pack="pack" />
  </div>
</template>

<script setup lang="ts">
import PacketItem from './PackItem.vue'
import NewPackItem from './NewPackItem.vue'
const packs = [
  {
    id: 1,
    name: 'Product Development',
    description: 'Tasks related to product development',
    stats: [4, 8, 13, 3],
    board: 'Leanbase',
  },
  {
    id: 2,
    name: 'Approval & Feedback',
    description: 'Tasks related to approval and feedback',
    stats: [2, 5, 7, 1],
    board: 'None',
  },
  {
    id: 3,
    name: 'Demo',
    description: 'Tasks related to demo',
    stats: [1, 3, 4, 0],
    board: 'Bamboo, PrinBase, Front-Build, Dpro, Graphic design',
  },
]
</script>

<style scoped>
.packet-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-top: 24px;
}
</style>
