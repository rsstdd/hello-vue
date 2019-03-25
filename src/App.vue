<template>
  <div id="app">
    <h2>Tip Calculator</h2>
    <p>
      <strong>Total: {{ customerTotal }}</strong>
    </p>
    <p>15%: {{ customerTotal | tip15 }}</p>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return { customerTotal: 35.43 };
  },
  filters: {
    tip15(val) {
      return (val * 0.15).toFixeed(2);
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
