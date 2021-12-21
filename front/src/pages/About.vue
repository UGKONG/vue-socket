<template>
  <section>
    <table>
      <thead>
        <tr><th>사용 모듈</th></tr>
      </thead>
      <tbody>
        <tr v-for="(item, idx) in list" :key="idx">
          <td :title="title" @click="click(item.url)">
            {{ item.name }}<small v-text="title" />
          </td>
        </tr>
      </tbody>
    </table>
  </section>  
</template>

<script>
export default {
  data: () => ({
    list: [
      {name: 'vue', url: 'https://kr.vuejs.org/v2/guide/index.html'},
      {name: 'vuex', url: 'https://vuex.vuejs.org/kr/'},
      {name: 'vue-router', url: 'https://router.vuejs.org/kr/installation.html'},
      {name: 'babel', url: 'https://babeljs.io/docs/en/'},
      {name: 'loader (babel, css, sass, file, html, style, vue)', url: 'https://joshua1988.github.io/webpack-guide/concepts/loader.html'},
      {name: 'sass', url: 'https://sass-lang.com/documentation'},
      {name: 'webpack', url: 'https://webpack.kr/'},
      {name: 'webpack-dev-server', url: 'https://joshua1988.github.io/webpack-guide/tutorials/webpack-dev-server.html'},
      {name: 'axios', url: 'https://yamoo9.github.io/axios/guide/'},
    ],
    title: '공식문서 바로가기'
  }),
  methods: {
    click(url) {
      window.open(url);
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@index.scss';
td {
  cursor: pointer;

  & > small {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    display: none;
    color: $gray;
  }

  &:hover > small {
    display: block;
  }
}
</style>