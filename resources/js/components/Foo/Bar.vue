<template>
  <section>
    <h1>Foo</h1>
    <h2>Bar</h2>
  </section>
</template>

<script>
export default {
  name: "foo-bar",
  mounted() {
    console.info(this.$options.name);
  },
};
</script>
