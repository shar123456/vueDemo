<!-- 
    script setup 语法糖 
    1.自动推荐组件
    2.defineProps
    3.defineEmits
    4.defineExpose
    5.useSlots和useAttrs



-->



<script setup lang="ts">
// import { ref } from 'vue'
import { UserInfo } from '../Interface/UserInfoInterface'

// //  withDefaults(defineProps<{ msg?: string }>(),{msg:"tets"})

const MyProps = defineProps({
    msg: {
        type: String,
        required: false,
        default: "test"
    },
    userList: {
        type: Array<UserInfo>,
        required: false
    }
}
)



const MyEmits = defineEmits(['AddUser']);

//ts类型式声明
// const MyEmits = defineEmits<{
//     (e:'AddUser',data:UserInfo):void
// }>();



const AddUserBtn = () => {
    const user: UserInfo = {
        Id: 1,
        Name: "King",
        Age: 20,
        IsVip: true
    };
    MyEmits('AddUser', user);
}




// const count = ref(0)
</script>

<template>
    {{ MyProps.msg }}
    <button @click="AddUserBtn">添加</button>>
    <ul>
        <li v-for="item in userList">{{ item.Name }}</li>
    </ul>
</template>

<style scoped>
.read-the-docs {
    color: #888;
}
</style>