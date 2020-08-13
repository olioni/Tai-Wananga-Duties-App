<template>
  <div class="home">
    <indexButtons/>
  </div>
</template>

<script>
// @ is an alias to /src
import indexButtons from '@/components/buttons.vue'


export default {
  name: 'Home',
  components: {
    indexButtons
  }
}
</script>

<style scoped>
  * {
    margin: 0;
  }

  .home {
    height: 100%;
    width: 100%;
  }

  body {
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>