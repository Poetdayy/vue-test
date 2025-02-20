<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import searchIcon from '@/assets/icons/search.svg'
import homeIcon from '@/assets/icons/home.svg'
import tasksIcon from '@/assets/icons/tasks.svg'
import boardsIcon from '@/assets/icons/boards.svg'
import settingsIcon from '@/assets/icons/settings.svg'
import logo from '@/assets/logo/leanbase.svg'
import notificationIcon from '@/assets/menu/bell.svg'
import questionIcon from '@/assets/menu/question.svg'
import avatarIcon from '@/assets/Avatar.svg'
const route = useRoute()
const router = useRouter()

const items = ref([
  { name: 'Search', icon: searchIcon, path: '/search' },
  { name: 'Home', icon: homeIcon, path: '/' },
  { name: 'Tasks', icon: tasksIcon, path: '/tasks' },
  { name: 'Boards', icon: boardsIcon, path: '/boards' },
  { name: 'Workspace Settings', icon: settingsIcon, path: '/settings' },
])

const navigateTo = (path: string) => {
  router.push(path)
}
</script>

<template>
  <div class="dashboard-panel">
    <div class="dashboard-logo">
      <img :src="logo" alt="Logo" class="logo-img" />
      <span class="logo-text">LeanBase</span>
    </div>

    <div
      v-for="item in items"
      :key="item.name"
      class="panel-item"
      :class="{ active: route.path === item.path }"
      @click="navigateTo(item.path)"
    >
      <svg class="icon" :class="{ active: route.path === item.path }">
        <use :xlink:href="item.icon"></use>
      </svg>
      <span>{{ item.name }}</span>
    </div>

    <div class="dashboard-questions">
      <div class="questions">
        <img :src="questionIcon" alt="Questions" class="icon" />
        <span>Help & Support</span>
      </div>

      <div class="notifications">
        <img :src="notificationIcon" alt="Notifications" class="icon" />
        <span>Notifications</span>
      </div>
    </div>

    <div class="dashboard-accounts">
      <img :src="avatarIcon" alt="avatar" class="avatar" />
      <span>Nam Pham</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
$padding-logo: 14px 48px;
$panel-bg: #e4e4e7;
$hover-bg: #f0f0f0;
$active-color: #02c16a;
$active-bg: #fff;

.dashboard-panel {
  .dashboard-logo {
    display: flex;
    gap: 6px;
    padding: 16px 10px;
  }

  width: 232px;
  padding: 0px 12px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  background-color: $panel-bg;
  height: 100vh;

  .panel-item {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 8px;
    cursor: pointer;
    border-radius: 5px;

    &:hover {
      background-color: $hover-bg;
    }

    &.active {
      background-color: $active-bg;
      color: $active-color;
      font-weight: bold;
    }
  }

  .icon {
    width: 20px;
    height: 20px;
    fill: #4b5563;
    &.active {
      fill: #22c55e;
    }
  }
}

.dashboard-questions {
  margin-top: auto;
  .notifications,
  .questions {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 8px;
    cursor: pointer;
    border-radius: 5px;

    &:hover {
      background-color: $hover-bg;
    }

    .icon {
      width: 20px;
      height: 20px;
    }
  }
}

.dashboard-accounts {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 8px;
  border-top: solid 1px #e4e4e7;
}
</style>
