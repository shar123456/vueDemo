<template>
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      status-icon
      :rules="rules"
      label-width="120px"
      class="demo-ruleForm"
    >
    <el-form-item label="UserName" prop="uname">
        <el-input v-model="ruleForm.uname"  autocomplete="off" />
      </el-form-item>
     
      <el-form-item label="Password" prop="pass">
        <el-input v-model="ruleForm.pass" type="password" autocomplete="off" />
      </el-form-item>
     
      
      <el-form-item>
        <el-button type="primary" @click="submitForm(ruleFormRef)"
          >登录</el-button
        >
        <el-button @click="resetForm(ruleFormRef)">重置</el-button>
      </el-form-item>
    </el-form>
  </template>
  
  <script lang="ts" setup>
  import { reactive, ref } from 'vue'
  import { FormInstance, FormRules } from 'element-plus'

  
  const ruleFormRef = ref<FormInstance>()
  const ruleForm = reactive({
    pass: '',
    uname: '',
  })
  const rules = reactive<FormRules>({
    uname: [{ required: true, message:"请输入用户名",trigger: 'blur' }],
    pass: [{ required: true, message:"请输入密码",trigger: 'blur', }],
  
  })
  
  const submitForm = async (formEl: FormInstance | undefined) => {
    if (!formEl) return
    await formEl.validate(async (valid,fields) => {
      if (valid) {
        ElMessage.success('submit!');
        console.log('submit!')
      } else {
        console.log('error submit!')
        return false
      }
    })
  }
  
  const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.resetFields()
  }
  </script>