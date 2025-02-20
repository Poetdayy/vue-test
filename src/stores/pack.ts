import { defineStore } from 'pinia'
import { ref } from 'vue'
import api from '@/api'

export const usePackStore = defineStore('pack', () => {
	const packs = ref<{ id: number; [key: string]: any }[]>([])

	async function fetchPacks() {
		const res = await api.get('/packs')
		packs.value = res.data
	}

	async function createPack(payload: { [key: string]: any }) {
		const res = await api.post('/packs', payload)
		packs.value.push(res.data)
	}

	async function updatePack(packId: number, payload: { [key: string]: any }) {
		const res = await api.put(`/packs/${packId}`, payload)
		// cập nhật pack trong packs.value
		const idx = packs.value.findIndex(p => p.id === packId)
		if (idx !== -1) packs.value[idx] = res.data
	}

	async function deletePack(packId: number) {
		await api.delete(`/packs/${packId}`)
		packs.value = packs.value.filter(p => p.id !== packId)
	}

	async function assignPack(packId: number, boardIds: number[]) {
		const res = await api.post(`/packs/${packId}/assign`, { boardIds })
		const idx = packs.value.findIndex(p => p.id === packId)
		if (idx !== -1) packs.value[idx] = res.data
	}

	return {
		packs,
		fetchPacks,
		createPack,
		updatePack,
		deletePack,
		assignPack
	}
})
