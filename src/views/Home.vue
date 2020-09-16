<template>
  <div class="home">
    <indexButtons :dutiesObj="dutiesObj"/>
  </div>
</template>

<script>
// @ is an alias to /src
import indexButtons from '@/components/buttons.vue'

import { db } from '../components/firebase' 

export default {
  name: 'Home',
  components: {
    indexButtons
  },
  async created() {
    // get duties data from firestore database
    await db.collection("duties").onSnapshot(snapshot => {
      const dutiesInDatabase = {};
      snapshot.forEach(childSnapshot => {
        dutiesInDatabase[childSnapshot.id] = childSnapshot.data()
      })
      this.dutiesObj = dutiesInDatabase
    })
  },
  data() {
    return {
      dutiesObj: {},
    }
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