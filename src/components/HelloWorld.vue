<script setup lang="ts">
import { ref } from "vue"

defineProps<{ msg: string }>()
const count = ref(0)
let ac = "test"
</script>

<template>
  <Test></Test>
  <component :is="ac"></component>
  <h1>{{ msg }}</h1>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
.com {
  width: 100px;
  height: 100px;
}
</style>
