<template>
    <div class="main">
        
        <div class="rows">
            <div v-for="(value, name) in dutiesObj" :key="name.id" class="circle" :id="name">

                <!-- picture -->
                <div v-if="value" class="box" :style="{ 
                    backgroundImage: `url( ${require( `../assets/taiohi-photos/${value}.png` )} )` 
                }" @click="showPopup(name)">
                </div>

                <!-- plus -->
                <div v-else class="box">
                    <h1 class="plus" @click="showPopup(name)">+</h1>
                </div>

                <!-- duty type -->
                <h3> {{name.toUpperCase()}} </h3>
                

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
export default {
  name: 'taiohiPicker',
  props: [
      'dutyArea',
      'dutiesObj'
  ],
  data() {
     return {
         popup: false,
         dutyType: ''
     }
  },
  mounted() {
    //   console.log(this.dutyNames)
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