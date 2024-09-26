<template>
  <div class="app-wrapper">
    <div class="sidebar-container">侧边导航</div>
    <div class="main-container">
      <div class="header">
        <div class="navbar">导航条-1</div>
        <div class="tags-view">导航条-2</div>
      </div>
      <div class="app-main">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.app-wrapper {
  @apply flex w-full h-full;
  .sidebar-container {
    @apply bg-red w-[var(--sidebar-width)];
  }
  .main-container {
    @apply flex flex-col flex-1;
  }
  .header {
    @apply h-84px;
    .navbar {
      @apply h-[var(--navbar-height)]  bg-yellow;
    }
    .tags-view {
      @apply h-[var(--tagsview-height)]  bg-blue;
    }
  }
  .app-main {
    @apply bg-cyan;
    min-height: calc(100vh - var(--tagsview-height) - var(--navbar-height));
  }
}
</style>
