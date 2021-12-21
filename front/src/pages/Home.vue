<template>
  <section>
    <h1><span>Vue App</span>이 준비되었습니다.</h1>
    <article>
      <p>State: {{ number }}</p>
      <button @click="upDownFn(+1)">UP</button>
      <button @click="upDownFn(-1)">DOWN</button>
      <br /><br />
      <input ref="input" v-model="text"><br />
      {{ text }}<br />
      <button ref="button" @click="click">Click</button>
    </article>
  </section>
</template>

<script>
// import io from '@/../../back/node_modules/socket.io/client-dist/socket.io';
export default {
  data: () => ({
    text: '',
  }),
  created() {
    this.$store.state.socket.on('msg', (msg) => {
      console.log(msg);
    });
  },
  methods: {
    upDownFn (n) {
      this.$store.dispatch('setNumber', this.number + n);
    },
    click() {
      if (this.text != '') {
        console.log('text 전송');
        this.$store.state.socket.emit('msg', this.text);
      }
    },
  },
  computed: {
    number() {
      return this.$store.state.number;
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@index.scss';
section {
  text-align: center;

  span {
    color: $green;
  }
  p {
    padding: 50px 0 20px;
    font-weight: 500;
    font-size: 16px;
  }
}
</style>