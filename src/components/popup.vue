<template>
    <div class="main">
        <div class="inside">
            <popupPhotos v-for="name in house" :key="name.id" :dutyType="dutyType" :dutyArea="dutyArea" :name="name"/>
        </div>
        <h1 class="x" @click="closePopup()">X</h1>
    </div>
</template>

<script>
import popupPhotos from '@/components/popupPhotos.vue'

export default {
  name: 'popup',
  props: ['house', 'dutyType', 'dutyArea'],
  components: {
      popupPhotos
  },
  data() {
      return {
          houseOnKitchen: 'nui',
          name: ''
      }
  },
  methods: {
    closePopup() {
        console.log('closing now...')
        this.$emit('xClicked')
    },
    getPhotos() {
        let photosObj = {}
        //get house list of students
        console.log(this.house)

        //loop array to create images of taiohi w/ names
    
        
        }
  }
}
</script>

<style scoped>
* {
    margin: 0;
}

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
    height:700px;
    top: 50%;
    margin-top: -800px;
}

.inside {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 70%;
}

.x {
    color: white;
    width: 2vw;
    height: 4vh;
    margin-top: 20px;
}

.x:hover {
    color: red;
    cursor: pointer;
    transition: 0.3s;
}

h3 {
    color: white;
    font-size: 50px; 
}
</style>