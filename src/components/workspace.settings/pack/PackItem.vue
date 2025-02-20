<template>
  <div class="packet-item">
    <div class="packet-info">
      <h3 class="title">{{ pack?.name }}</h3>

      <p class="description">{{ pack?.description }}</p>

      <div class="stats">
        <StatsBadge type="tasks" :value="pack?.stats?.[0] ?? 0" />
        <StatsBadge type="reviews" :value="pack?.stats?.[1] ?? 0" />
        <StatsBadge type="tags" :value="pack?.stats?.[2] ?? 0" />
        <StatsBadge type="energy" :value="pack?.stats?.[3] ?? 0" />
      </div>
    </div>

    <div class="packet-action">
      <div class="board">
        <span>{{ displayedBoards }}</span>
        <span
          v-if="hiddenBoardCount > 0"
          class="more"
          @mouseenter="showTooltip = true"
          @mouseleave="showTooltip = false"
        >
          (+{{ hiddenBoardCount }})
        </span>

        <div v-if="showTooltip" class="tooltip">
          <div class="tooltip-arrow"></div>
          <div class="tooltip-content">{{ boardNames }}</div>
        </div>
      </div>

      <div v-if="showMenu" class="dropdown">
        <div @click="editPack">
          <img :src="editPencilIcon" alt="edit" />
          Edit
        </div>
        <div @click="assignPack" class="assign-pack">
          <img :src="assignIcon" alt="edit" />
          Assign
        </div>

        <div @click="deletePack">
          <img :src="trashIcon" alt="edit" />
          Delete
        </div>
      </div>

      <button class="more-btn" :class="{ active: showMenu }" @click="toggleMenu">
        <img :src="moreIcon" alt="More" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import StatsBadge from './StatsBadge.vue'
import moreIcon from '@/assets/more.svg'
import editPencilIcon from '@/assets/menu/edit_pencil.svg'
import assignIcon from '@/assets/menu/assign.svg'
import trashIcon from '@/assets/menu/trash.svg'

interface Pack {
  name: string
  description: string
  stats: number[]
  board: string[]
}

const props = defineProps<{
  pack: Pack
}>()
const showMenu = ref(false)
const showTooltip = ref(false)

const displayedBoards = computed(() => {
  if (!Array.isArray(props.pack?.board) || props.pack.board.length === 0) return ''
  return props.pack.board.slice(0, 2).join(', ') // Lấy 2 phần tử đầu
})

const hiddenBoardCount = computed(() => {
  return Array.isArray(props.pack?.board) && props.pack.board.length > 2
    ? props.pack.board.length - 2
    : 0
})

const boardNames = computed(() => {
  return Array.isArray(props.pack?.board) ? props.pack.board.join(', ') : ''
})

const toggleMenu = () => {
  showMenu.value = !showMenu.value
}

const editPack = () => console.log('Editing pack:', props.pack?.name)
const assignPack = () => console.log('Assigning pack:', props.pack?.name)
const deletePack = () => console.log('Deleting pack:', props.pack?.name)
</script>

<style scoped lang="scss">
$title_color: #3f3f46;
$description_color: #71717a;
$border_color: #e4e4e7;

.packet-item {
  padding: 16px;
  background: #fff;
  border-radius: 8px;
  border: 1px solid $border_color;
  position: relative;

  .packet-info {
    border-bottom: 1px solid $border_color;

    .title {
      font-weight: 600;
      font-size: 14px;
      line-height: 20px;
      color: $title_color;
    }

    .description {
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;
      color: $description_color;
      margin-bottom: 12px;
    }

    .stats {
      display: flex;
      gap: 6px;
      margin: 6px 0;
      margin-bottom: 20px;
    }
  }

  .packet-action {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 16px;
    color: $description_color;
    font-weight: 500;

    .more-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      background: none;
      border: none;
      font-size: 18px;
      cursor: pointer;
      transition: background 0.2s ease-in-out;
      border-radius: 5px;

      &:hover {
        background: #f4f4f5;
      }

      &.active {
        background: #e5e5e5;
      }

      img {
        width: 16px;
        height: 16px;
      }
    }
  }
}

.dropdown {
  position: absolute;
  right: 15px;
  top: calc(100% - 20px);
  background: white;
  border: 1px solid $border_color;
  border-radius: 4px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  min-width: 120px;
  z-index: 10;

  .assign-pack {
    border-bottom: solid 1px $border_color;
  }

  div {
    color: $title_color;
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 5px;
    cursor: pointer;
  }
}

.board {
  position: relative;

  .more {
    cursor: pointer;
    font-weight: bold;
  }

  .tooltip {
    position: absolute;
    width: 208px;
    top: 130%;
    left: 50%;
    transform: translateX(-50%);
    background: white;
    border-radius: 8px;
    border: solid 1px $border_color;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    padding: 8px 12px;
    white-space: nowrap;
    z-index: 10;

    .tooltip-content {
      word-wrap: break-word;
      white-space: normal;
      max-width: 200px;
    }
  }

  .tooltip::before {
    content: '';
    position: absolute;
    top: -9px; /* Adjust the position of the arrow */
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 8px solid $border_color; /* Background color of the tooltip */
  }
}
</style>
