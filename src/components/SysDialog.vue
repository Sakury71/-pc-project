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
