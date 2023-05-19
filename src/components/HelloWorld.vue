<script setup lang="ts">
import { ref } from 'vue'

// defineProps<{ msg: string }>()
defineProps({ msg:{
  type:String,
  required:true
}})
const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    
  </div>
  <el-row class="mb-4">
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
    <el-icon><Connection /></el-icon>
  </el-row>
  
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
