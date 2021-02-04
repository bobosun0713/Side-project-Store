<template>
  <div class="admin">
    <admin-header></admin-header>
    <side-menu></side-menu>
    <div class="admin-container">
      <router-view></router-view>
    </div>
    <!-- <bread-crumbs></bread-crumbs> -->
  </div>
</template>

<script>
import AdminHeader from '@/components/layout/Header.vue'
import SideMenu from '@/components/layout/aside/SideMenu.vue'
// import BreadCrumbs from '@/components/layout/BreadCrumbs.vue'
export default {
  name: 'Home',
  components: {
    AdminHeader,
    SideMenu,
    // BreadCrumbs,
  },
}
</script>

<style lang="scss" scoped>
.admin {
  &-container {
    padding: 25px;
    margin-left: 200px;
  }
}
</style>
