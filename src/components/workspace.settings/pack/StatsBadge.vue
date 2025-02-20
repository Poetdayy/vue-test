<template>
  <div class="stats-badge" :class="colorClass">
    <img :src="icon" alt="icon" class="icon" />
    <span class="value">{{ value }}</span>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import tasksStat from '@/assets/stats/task.svg'
import reviewStat from '@/assets/stats/review.svg'
import tagStat from '@/assets/stats/tag.svg'
import boltStat from '@/assets/stats/bolt.svg'

interface Props {
  type: 'tasks' | 'reviews' | 'tags' | 'energy'
  value: number
}

const props = defineProps<Props>()

const iconMap = {
  tasks: tasksStat, // Checkmark
  reviews: reviewStat, // Circle
  tags: tagStat, // Tag
  energy: boltStat, // Lightning
}

const colorMap = {
  tasks: 'bg-blue',
  reviews: 'bg-yellow',
  tags: 'bg-green',
  energy: 'bg-orange',
}

const icon = computed(() => iconMap[props.type])
const colorClass = computed(() => colorMap[props.type])
</script>

<style scoped>
.stats-badge {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 2px 6px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: bold;
}

/* color for each type */
.bg-blue {
  background: #eff6ff;
  color: #007bff;
}
.bg-yellow {
  background: #fefce8;
  color: #ffb300;
}
.bg-green {
  background: #effdf5;
  color: #28a745;
}
.bg-orange {
  background: #fff7ed;
  color: #ff7b00;
}

.icon {
  font-size: 16px;
}
</style>
