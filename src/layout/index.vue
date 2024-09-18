<template>
  <router-view>
    <template #default="{ Component, route }">
      <component :is="Component"></component>
    </template>
    <!-- <template #default="{ Component, route }">
      <component v-if="route.meta.noKeepAlive" :is="Component"></component>
      <keep-alive v-else>
        <component :is="Component"></component>
      </keep-alive>
    </template> -->
  </router-view>
</template>