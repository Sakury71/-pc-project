<template>
  <div>{{ count }}</div>
  <button @click="addBut">+1</button>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { testStore } from '@/store';
const store = testStore();
const count = computed(() => {
  return store.getCount
})
const addBut = () => {
  store.setCount(++store.count)
}
</script>
<style scoped></style>