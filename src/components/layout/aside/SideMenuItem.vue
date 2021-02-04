<template>
  <li class="menu-list__item" :class="{ active: isOpenSubMenu }">
    <router-link
      v-if="!item.children"
      class="menu-list__item-link"
      :to="item.path"
    >
      <font-awesome :icon="item.icon" class="menu-icon"></font-awesome>
      {{ item.name }}
    </router-link>

    <template v-else>
      <div to="#" class="menu-list__item-link" @click="toggleSubMenu">
        <font-awesome :icon="item.icon" class="menu-icon"></font-awesome>
        {{ item.name }}
        <font-awesome icon="angle-right" class="menu-icon-arrow"></font-awesome>
      </div>
      <ul class="menu-list--sub" :style="{ height: subMenuHeight }">
        <side-menu-item
          v-for="(child, idx) in item.children"
          :key="idx"
          :item="child"
          >{{ child.name }}</side-menu-item
        >
      </ul>
    </template>
  </li>
</template>

<script>
export default {
  name: 'SideMenuItem',
  props: {
    item: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  data() {
    return {
      isOpenSubMenu: false,
    }
  },
  computed: {
    subMenuHeight() {
      return !this.isOpenSubMenu ? '0px' : `${60 * this.item.children.length}px`
    },
  },
  mounted() {
    if (!this.item.children) return
    console.log(this.item.children.length)
  },
  methods: {
    toggleSubMenu() {
      this.isOpenSubMenu = !this.isOpenSubMenu
    },
  },
}
</script>

<style lang="scss" scoped>
.menu-list__item {
  transition: all 0.5s;

  cursor: pointer;
  overflow: hidden;

  &:hover {
    background-color: mediumaquamarine;
  }

  &-link {
    display: block;
    padding: 20px;
    vertical-align: middle;
    color: map-get($theme-colors, dark-blue);
    font-size: map-get($fontSize, normal);
    font-weight: bold;
  }

  // 點擊後
  &.active {
    .menu-icon-arrow {
      transform: rotate(90deg);
    }
  }
}

// 子選單
.menu-list--sub {
  transition: all 0.5s;
  background-color: mediumblue;
}
</style>
