<template>
  <main>
    <Header />
    <i :class="$store.state.Icon.stroke.v" />
    <transition name="scale-transition" mode="out-in">
      <router-view />
    </transition>
  </main>
</template>

<script>
export default {
  components: {
    Header: () => import('@pages/Common/Header'),
  },
}
</script>

<style lang="scss" scoped>
@import '@index.scss';
main {
  flex-flow: column;
  @include flex-center;
  @include absolute-center;

  @keyframes colorChange {
    0% {color: $darkGray}
    10% {color: $red}
    20% {color: $blue}
    30% {color: $green}
    40% {color: $black}
    50% {color: $orange}
    60% {color: $yellow}
    70% {color: $purple}
    80% {color: $pink}
    90% {color: $navy}
    100%{color: $darkGray;}
  }
  i {
    font-size: 40px;
    margin-bottom: 10px;
    transition: .2s;
    animation: colorChange infinite 10s;
  }
}
</style>
