<script setup lang="ts">
import { ref } from 'vue'
import { defineProps, defineEmits } from "vue";
import { useRoute, useRouter } from 'vue-router'
import searchIcon from '@/components/icons/searchIcon.vue'
import homeIcon from '@/components/icons/homeIcon.vue'
import tasksIcon from '@/components/icons/tasksIcon.vue'
import boardsIcon from '@/components/icons/boardIcon.vue'
import settingsIcon from '@/components/icons/settingsIcon.vue'
import logo from '@/assets/logo/leanbase.svg'
import notificationIcon from '@/assets/menu/bell.svg'
import questionIcon from '@/assets/menu/question.svg'
import avatarIcon from '@/assets/Avatar.svg'
import collapsedIcon from '@/components/icons/collapsedIcon.vue'
import threeDotsIcon from '@/components/icons/threeDots.vue'

const route = useRoute()
const router = useRouter()

const props = defineProps<{ isCollapsed: boolean }>();
const emit = defineEmits(["toggle"]);

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

const isCollapsed = ref(false)

const toggleCollapse = () => {
  isCollapsed.value = !isCollapsed.value;
  emit('toggle');
}
</script>

<template>
  <div :class="['dashboard-panel', { collapsed: isCollapsed }]">
    <div class="dashboard-logo">
      <img :src="logo" alt="Logo" class="logo-img" />
      <span v-if="!isCollapsed" class="logo-text">LeanBase</span>
    </div>

    <button @click="toggleCollapse" class="collapse-button">
      <collapsedIcon />
    </button>

    <div
      v-for="item in items"
      :key="item.name"
      class="panel-item"
      :class="{ active: route.path === item.path }"
      @click="navigateTo(item.path)"
    >
      <component :is="item.icon" class="icon" :class="{ active: route.path === item.path }" />
      <span v-if="!isCollapsed">{{ item.name }}</span>
    </div>

    <div class="dashboard-questions" v-if="!isCollapsed">
      <div class="questions">
        <img :src="questionIcon" alt="Questions" class="icon" />
        <span>Help & Support</span>
      </div>

      <div class="notifications">
        <img :src="notificationIcon" alt="Notifications" class="icon" />
        <span>Notifications</span>
      </div>
    </div>

    <div class="dashboard-account" v-if="!isCollapsed">
      <div class='dashboard-avatar'>
        <img :src="avatarIcon" alt="avatar" class="avatar" />
        <span>Nam Pham</span>
      </div>

      <button class='more-btn'>
          <threeDotsIcon />
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
$padding-logo: 14px 48px;
$panel-bg: #F4F4F5;
$hover-bg: #f0f0f0;
$active-color: #02c16a;
$active-bg: #fff;
$panel-color: #3F3F46;

.dashboard-panel {
  position: relative;

  .dashboard-logo {
    display: flex;
    gap: 6px;
    padding: 16px 10px;
  }

  width: 232px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  background-color: $panel-bg;
  height: 100vh;
  transition: width 0.3s;

  &.collapsed {
    width: 80px;
  }

  .collapse-button {
    position: absolute;
    right: 0;
    margin-top: 10px;
    cursor: pointer;
    border-radius: 5px;
    border: none;
    background: $panel-bg;
    &:hover {
      background-color: darken($hover-bg, 10%);
    }
  }

  .panel-item {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 8px;
    cursor: pointer;
    border-radius: 5px;
    color: $panel-color;
    &:hover {
      background-color: $hover-bg;
    }

    &.active {
      background-color: $active-bg;
      font-weight: bold;
    }
  }

  .icon {
    width: 20px;
    height: 20px;
    color: #000;
    &.active {
      color: #22c55e;
    }
  }
}

.dashboard-questions {
  border-bottom: solid 1px #e4e4e7;

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

.dashboard-account {
  display: flex;
  justify-content: space-between;
  gap: 8px;
  padding: 6px 8px;

  .dashboard-avatar{
    display: flex;
    gap: 8px;
    align-items: center;
  }

  .more-btn{
    border: none;
  }
}

</style>
