<template>
  <n-space vertical size="large">
    <n-layout>
      <!-- <n-layout-header>颐和园路</n-layout-header>
      <n-layout-content content-style="padding: 24px;"> 平山道 </n-layout-content>
      <n-layout-footer>成府路</n-layout-footer> -->
    </n-layout>
  </n-space>
  <router-view></router-view>
</template>

<style scoped>
.n-layout-header,
.n-layout-footer {
  background: rgba(128, 128, 128, 0.2);
  padding: 24px;
}

.n-layout-sider {
  background: rgba(128, 128, 128, 0.3);
}

.n-layout-content {
  background: rgba(128, 128, 128, 0.4);
}
</style>
