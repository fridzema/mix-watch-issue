<template>
  <section>
    <h1>Hello world</h1>
    <foo-bar></foo-bar>
  </section>
</template>

<style lang="scss">
section {
  background: red;

  h1 {
    color: blue;
  }
}
</style>

<script>
export default {
  name: "index",
  components: {
    "foo-bar": () => import("../components/Foo/Bar"),
  },
  mounted() {
    console.info(this.$options.name);
  },
};
</script>
