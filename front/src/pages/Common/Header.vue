<template>
  <header>
    <router-link active-class="active" exact to="/">Home</router-link>
    <span>|</span>
    <router-link active-class="active" to="/About">About</router-link>
  </header>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '@index.scss';
header {
  margin-bottom: 50px;

  a {
    color: $whiteGray;
    font-weight: 500;
    &:hover {
      color: $whiteGrayHover;
    }
    &:active {
      color: $whiteGrayActive;
    }
    &.active {
      color: $green;
    }
  }

  span {
    display: inline-block;
    margin: 0 10px;
    color: #aaa;
  }
}
</style>