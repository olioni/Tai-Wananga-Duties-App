<template>
  <div class="home">
    <indexButtons :dutiesObj="dutiesObj"/>
    <div class="drkModeSwitch">
      <darkMode/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import indexButtons from '@/components/buttons.vue'
import darkMode from '@/components/drkmdeSwitch.vue'
import { db } from '../components/firebase'

export default {
  name: 'Home',
  components: {
    indexButtons,
    darkMode
  },
  data() {
    return {
      dutiesObj: {}
    }
  },
  mounted() {
    console.log(dutiesObj)
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
    /* background-color: black; */
  }

  body {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .drkModeSwitch {
    margin-right: 630px;
  }
</style>