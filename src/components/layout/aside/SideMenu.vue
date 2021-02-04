<template>
  <aside class="side-menu">
    <ul class="menu-list">
      <!-- <li>
        <font-awesome
          icon="sort-amount-down-alt"
          class="menu-icon"
        ></font-awesome>
        訂單管理
      </li>
      <li>
        <font-awesome icon="box-open" class="menu-icon"></font-awesome>
        商品管理
        <font-awesome icon="angle-right"></font-awesome>
      </li>
      <li>
        <font-awesome icon="user" class="menu-icon"></font-awesome>
        會員相關
        <font-awesome icon="angle-right"></font-awesome>
      </li>
      <li>
        <font-awesome icon="user-shield" class="menu-icon"></font-awesome>
        管理員相關
        <font-awesome icon="angle-right"></font-awesome>
      </li> -->
      <side-menu-item
        v-for="(item, idx) in slidMenuList"
        :key="idx"
        :item="item"
      ></side-menu-item>
    </ul>
  </aside>
</template>

<script>
import SideMenuItem from '@/components/layout/aside/SideMenuItem.vue'
export default {
  name: 'SideMenu',
  components: {
    SideMenuItem,
  },
  data() {
    return {
      slidMenuList: [
        {
          name: '訂單管理',
          icon: 'sort-amount-down-alt',
          path: '/order/list',
        },
        {
          name: '商品管理',
          icon: 'box-open',
          children: [
            { name: '商品列表', icon: 'list-alt', path: '' },
            { name: '新增商品', icon: 'pencil-alt', path: '' },
          ],
        },
        {
          name: '會員相關',
          icon: 'user',
          children: [
            { name: '商品列表', icon: 'list-alt', path: '' },
            { name: '新增商品', icon: 'pencil-alt', path: '' },
          ],
        },
        {
          name: '管理員相關',
          icon: 'user-shield',
          children: [
            { name: '管理員列表', icon: 'list-alt', path: '' },
            { name: '新增管理員', icon: 'pencil-alt', path: '' },
          ],
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.side-menu {
  position: fixed;
  width: 200px;
  height: calc(100vh - 85px);
  background-color: map-get($theme-colors, light-green);
  box-shadow: 2px 2px 5px rgb(223, 219, 219);
}

.menu-list {
  // > li {
  //   border: 1px solid blue;
  //   padding: 15px 20px;
  // }
}
</style>
