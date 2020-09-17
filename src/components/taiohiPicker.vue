<template>
    <div class="main">
        <div class="rows">
            <!-- loop over the duties and names to assign to a circle -->
                <div v-for="(value, name) in getDutyArea" :key="name.id" class="circle" :id="name">
                    <div v-if="value" class="box" :style="{ backgroundImage: `url(  ${require(  `../assets/taiohi-photos/${value}.png`  )}  )` }" @click="showPopup(name)">
                    </div>
                    <div v-else class="box">
                        <h1 class="plus" @click="showPopup(name)">+</h1>
                    </div>
                    <h3> {{name}} </h3>
                </div>
        </div>
        <div class="return">
            <router-link to="/">
                <button>BACK</button>
            </router-link>
        </div>
    </div>

</template>

<script>

import { db } from '../components/firebase' 

export default {
  name: 'taiohiPicker',
  props: [
      'dutyArea',
  ],
  data() {
     return {
         popup: false,
         dutiesObj: null,
     }
  },
  firestore: {
    dutiesObj: db.collection('duties'), 
  },
  mounted() {
      console.log("from taiohi picker: dutyArea: ",this.dutyArea)
      console.log("from taiohi picker: dutiesObj: ",this.dutiesObj)
  },
  computed: {
      getDutyArea() {
          var dutyAreaObj = this.dutiesObj.filter(obj => obj.id === this.dutyArea);
          console.log("from taiohi picker: dutyAreaObj: ", dutyAreaObj) //this is an array with the object at index 0
          return dutyAreaObj[0]
      }
  },
  methods: {
      showPopup(dutyType) {
            console.log("showing popup for: ", dutyType)
            // emiting duty type
            this.$emit('plusClicked', dutyType)
      }
  }
}
</script>

<style scoped>
.rows {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 70%;
}

.box {
    width: 200px;
    height: 200px;
    background-color: grey;
    border-radius: 50%;
    margin: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-size: cover;
}

.main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

button {
    background-color: rgb(230, 230, 230);
    color: rgb(0, 0, 0);       
    border-radius: 15px;
    border: none;
    height: 8vh;
    width: 20vw;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 40px;
    font-weight: bold;
    margin-top: 40px;
}

button:hover {
    color: white;
    background-color: #4e4e4e;
    cursor: pointer;
    transition: 0.3s;
}

a {
    text-decoration: none;
}

.plus {
   font-size: 200px;
   color: rgb(51, 51, 51);
}

.plus:hover{
    color: rgb(236, 236, 236);
    cursor: pointer;
    transition: 0.3s;
}

h3 {
    font-size: 25px;
    font-weight: bolder;
}

.box {
    background-position: center;
    background-size: 200px;
}

.box:hover {
    cursor: pointer;
    background-color: rgb(163, 163, 163);
    transition: 0.3s;
}
</style>