
<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import TestCom from './components/TestCom.vue'
import { UserInfo } from './Interface/UserInfoInterface'
import { ref } from 'vue'
const list = ref<Array<UserInfo>>([
  {
    Id: 1,
    Name: "Star",
    Age: 20,
    IsVip: true
  }
]);
const AddUserToList:(e1:UserInfo)=>void = (e: UserInfo) => {
  console.log(e);
  list.value.push(e);
}
</script>

<template>
  <div>
    qqq
  </div>
  <HelloWorld msg="Vite + Vue" />
  <TestCom msg="Vite + TestCom" :userList="list" @AddUser="AddUserToList" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
