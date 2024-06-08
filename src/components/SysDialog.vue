<template>
  <!-- 弹框 -->
  <el-dialog :model-value="visible" :title="title" :width="width + 'px'" :before-close="onClose" append-to-body
    :close-on-click-modal="false">
    <div class="container" :style="{ height: height + 'px' }">
      <slot name="content"></slot>
    </div>
    <template #footer>
      <div class="dialog-footer">
        <el-button type="danger" @click="onClose">取消</el-button>
        <el-button type="primary" @click="onConfirm">
          确定
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>
<script setup lang="ts">
//对话框的属性类型
interface DialogProps {
  title: string,
  visible: boolean,
  width: number,
  height: number
}
//接收父组件传值 设置默认值
const props = withDefaults(defineProps<DialogProps>(), {
  title: "标题",
  visible: false,
  width: 600,
  height: 300
})
//定义emit
const emit = defineEmits(["onClose", "onConfirm"])
//定义关闭的方法
const onClose = () => {
  emit("onClose")
}
//定义确定的方法
const onConfirm = () => {
  emit("onConfirm")
}
</script>
<style lang="scss">
.container {
  overflow-x: initial;
  overflow-y: auto;
}

.el-dialog {
  border-top-left-radius: 10px !important;
  border-top-right-radius: 10px !important;
  --el-dialog-padding-primary: 0px !important;

  .el-dialog__header {
    background-color: #009688 !important;
    margin-right: 0px;
    border-top-left-radius: 10px !important;
    border-top-right-radius: 10px !important;

    // height: 46px;
    .el-dialog__title {
      color: #fff;
      font-size: 18px;
      font-weight: 600;
      display: flex;
      height: 46px;
      line-height: 46px;
      padding-left: 23px;
    }

    .el-dialog__close {
      color: #fff;
    }

    .el-dialog__body {
      padding: 20px;
    }
  }

  .el-dialog__footer {
    border-top: 1px solid #cfdad9 !important;
    padding: 10px
  }
}

.el-form {
  padding: 20px;
}
</style>