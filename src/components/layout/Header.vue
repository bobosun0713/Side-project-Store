<template>
  <header class="header">
    <div class="header__control">
      <div class="header__control-line"></div>
    </div>
    <h1 class="header__logo">backend</h1>
    <button class="header__user">
      Sign Out
    </button>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: map-get($theme-colors, dark-green);
  padding: 20px 40px;

  // 漢堡選單
  &__control {
    cursor: pointer;
    width: 30px;
    height: 40px;
    display: flex;
    align-items: center;

    &-line {
      height: 4px;
      width: 100%;
      border-radius: 2.5px;
      background-color: map-get($theme-colors, light);
      position: relative;

      &:before,
      &:after {
        content: '';
        position: absolute;
        background-color: map-get($theme-colors, light);
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 2.5px;
      }
      &:before {
        transform: translateY(9px);
      }
      &:after {
        transform: translateY(-9px);
      }
    }
  }

  // logo
  &__logo {
    // border: 1px solid;
    padding-left: 20px;
    flex: 1;
    text-transform: uppercase;
    color: map-get($theme-colors, light);
  }

  // User
  &__user {
    cursor: pointer;
    background-color: map-get($theme-colors, light-green);
    font-size: map-get($fontSize, medium);
    font-weight: bold;
    color: map-get($theme-colors, dark-green);
    border: 0;
    padding: 10px 15px;
    border-radius: 20px;

    box-shadow: 2px 2px 5px rgb(51, 50, 50);
  }
}
</style>
