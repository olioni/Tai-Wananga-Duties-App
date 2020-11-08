<template>
    <div class="main">
        <div class="inside">
            <popupPhotos v-for="name in house" :key="name.id" :dutyType="dutyType" :dutyArea="dutyArea" :name="name" @selected="studentSelected()" :dutyPersonObj="dutyPersonObj"/>
        </div>
        <div id="circle">
            <h1 class="x" @click="closePopup()">X</h1>
        </div>
    </div>
</template>

<script>
import popupPhotos from '@/components/popupPhotos.vue'

export default {
  name: 'popup',
  props: ['house', 'dutyType', 'dutyArea', 'dutyPersonObj'],
  components: {
      popupPhotos
  },
  data() {
      return {
          name: ''
      }
  },
  methods: {
    closePopup() {
        // console.log('closing now...')
        this.$emit('xClicked')
    },
    getPhotos() {
        let photosObj = {}
        //get house list of students
        // console.log(this.house)

        //loop array to create images of taiohi w/ names
    },
    studentSelected() {
        // console.log('student chosen, will now close popup')
        this.$emit('close')
    },
  }
}
</script>

<style scoped>
* {
    margin: 0;
}

/* #circle {
    display: flex;
    justify-content: center;
    align-items: center; 

    margin-bottom: 10px;

    height: 45px;
    width: 40px;
    border: 2px solid black;
} */

.main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgb(61, 61, 61);
    width: 70%;
    height: 70%;
    border-radius: 15px;

    position: relative;
    height: 700px;
    top: -8%;
    margin-top: -800px;
}

.inside {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 90%;
}

.x {
    display: flex;
    justify-content: center;
    align-items: center;

    color: white;
    width: 3.5vw;
    height: 5vh;
    margin-top: 20px;

    border: 5px solid white;
    border-radius: 50%;

    transition: 0.3s;
}

.x:hover {
    color: red;
    cursor: pointer;
    border: 5px solid red;

    font-size: 45px;

    transition: 0.3s;
}

h3 {
    color: white;
    font-size: 50px; 
}
</style>