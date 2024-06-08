<template>
  <div>
    <el-button type="primary" icon="Plus" size="default" @click="onShow">新增
    </el-button>
  </div>
  <SysDialog :title="dialog.title" :visible="dialog.visible" :height="dialog.height" :width="dialog.width"
    @onClose="onClose" @onConfirm="onConfirm">
    <template v-slot:content>
      弹框测试
    </template>
  </SysDialog>
</template>
<script setup lang="ts">
import SysDialog from "@/components/SysDialog.vue";
//引入弹框组件
import useDialog from "@/hooks/useDialog";
//获取弹框属性
const { dialog, onClose, onConfirm, onShow } = useDialog();

</script>
<style lang="scss" scoped></style>