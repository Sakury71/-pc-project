<template>
  <el-main>
    <!-- 搜索栏 -->
    <el-form :model="searchParm" :inline="true" size="default">
      <el-form-item>
        <el-input v-model="searchParm.nickName" placeholder="请输入姓名">
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button icon="Search" @click="searchBtn">搜索</el-button>
        <el-button icon="Close" type="danger" plain @click="resetBtn">重置</el-button>
        <el-button type="primary" icon="Plus" @click="addBtn">新增</el-button>
      </el-form-item>
    </el-form>
    <!-- 新增、编辑弹框 -->
    <SysDialog :title="dialog.title" :width="dialog.width" :height="dialog.height" :visible="dialog.visible"
      @on-close="onClose" @on-confirm="commit">
      <template v-slot:content>
        <el-form :model="addModel" ref="addFormRef" :rules="rules" :inline="false" label-width="80px" size="normal">
          <el-form-item prop="nickName" label="姓名">
            <el-input v-model="addModel.nickName"></el-input>
          </el-form-item>
          <el-form-item prop="sex" label="性别">
            <el-radio-group v-model="addModel.sex">
              <el-radio :label="'0'">男</el-radio>
              <el-radio :label="'1'">女</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item prop="phone" label="电话">
            <el-input v-model="addModel.phone"></el-input>
          </el-form-item>
          <el-form-item prop="username" label="登录账户">
            <el-input v-model="addModel.username"></el-input>
          </el-form-item>
          <el-form-item prop="password" label="密码">
            <el-input v-model="addModel.password"></el-input>
          </el-form-item>
          <el-form-item prop="status" label="状态">
            <el-radio-group v-model="addModel.status">
              <el-radio :label="'0'">启用</el-radio>
              <el-radio :label="'1'">停用</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-form>
      </template>
    </SysDialog>
  </el-main>
</template>
<script setup lang="ts">
import { reactive } from "vue";
import SysDialog from "@/components/SysDialog.vue";
import useDialog from "@/hooks/useDialog";
import { User } from "@/api/user/UserModel";
//获取弹框属性
const { dialog, onClose, onShow } = useDialog();
//搜索绑定的对象
const searchParm = reactive({
  nickName: "",
});
//新增按钮
const addBtn = () => {
  dialog.title = '新增'
  dialog.height = 350
  dialog.width = 500
  dialog.visible = true
};
//搜索按钮
const searchBtn = () => { };
//重置按钮
const resetBtn = () => { };
//表单绑定的数据对象
const addModel = reactive<User>({
  userId: "",
  username: "",
  password: "",
  nickName: "",
  phone: "",
  sex: "",
  status: "",
});
//表单验证规则
//1.el-form-item加prop属性
//2.编写表单验证规则 rules
//3.表单要绑定 :rules="rules"
const rules = reactive({
  username: [{ required: true, message: "请输入登录账号", trigger: "blur" }],
  password: [{ required: true, message: "请输入登录密码", trigger: "blur" }],
  nickName: [{ required: true, message: "请输入姓名", trigger: "blur" }],
  phone: [{ required: true, message: "请输入电话", trigger: "blur" }],
  sex: [{ required: true, message: "请输入性别", trigger: "blur" }],
});
//提交按钮
const commit = () => { };
</script>
<style scoped></style>