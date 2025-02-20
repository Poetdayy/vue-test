<template>
  <div class="dashboard-toolbar">
	<div class="toolbar-tabs">
	  <div 
		v-for="tab in tabs" 
		:key="tab.name"
		:class="['tab', { active: activeTab === tab.name }]"
		@click="selectTab(tab.name)"
	  >
		<img :src="tab.icon" alt="" class="tab-icon" />
		<span>{{ tab.label }}</span>
	  </div>
	</div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits } from 'vue';
import generalSettingsIcon from '@/assets/icons/general_settings.svg';
import packSettingsIcon from '@/assets/icons/pack_settings.svg';

const props = defineProps({
  modelValue: String, // Nhận giá trị tab đang active từ component cha
});

const emit = defineEmits(['update:modelValue']);

const tabs = ref([
  { name: 'general', label: 'General', icon: generalSettingsIcon },
  { name: 'settings-pack', label: 'Settings Pack', icon: packSettingsIcon }
]);

const activeTab = ref(props.modelValue || 'general');

const selectTab = (tabName: string) => {
  activeTab.value = tabName;
  emit('update:modelValue', tabName);
};
</script>

<style scoped lang="scss">
$default_color:#71717A;
$active_color: #18181B; 

.dashboard-toolbar {
	background-color: #fff;
	border-bottom: 1px solid #e0e0e0;
	justify-content: center;
	height: 48px;
	padding-inline: 6px;

	.toolbar-tabs {
		display: flex;
		height: 100%;
		gap: 24px;
	}

	.tab {
		display: flex;
		align-items: center;
		height: 100%;
		gap: 8px;
		padding: 6px 12px;
		cursor: pointer;
		font-weight: 500;
		color: $default_color;
		transition: color 0.3s, border-bottom 0.3s;

		&.active {
			color: $active_color;
			border-bottom: 2px solid #22c55e;
		}

		.tab-icon {
			width: 20px;
			height: 20px;
		}

		&:hover {
			color: #16a34a;
		}
	}
}
</style>
