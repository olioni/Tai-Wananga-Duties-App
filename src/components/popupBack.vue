<template>
  <div id="grey"></div>
</template>

<script>
export default {
  name: "popupBack",
  props: {},
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
#grey {
  /* background-color: rgb(65, 65, 65);
    opacity: 50%;
    height: 10000px;
    width: 100%;
    display: flex;
    position: relative;
    height: 960px;
    top: -50%; */

  background-color: rgb(65, 65, 65);

  position: absolute;

  width: 100vw;
  height: 100vh;

  opacity: 50%;
}
</style>
