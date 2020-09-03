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
  },
  mounted() {
    // TO DO: get duties obj from firebase
    /*
    db.collection("subjects").onSnapshot(snapshot => {
            const subjectsInDatabase = [];
            snapshot.forEach(snap => {
               subjectsInDatabase.push(snap.data())
            })
            this.subjects = subjectsInDatabase
            console.log(this.subjects)
         })
    */
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