<template>
    <div class="main">
        <h1 class="title">KITCHEN DUTIES</h1>
        <div class="rows">
            <div class="topRow">
                <div class="circle">
                    <div class="box">
                        <h1 class="plus" @click="showPopup()">+</h1>
                    </div>
                    <h3>BINS</h3>
                </div>
                <div class="circle">
                    <div class="box">
                        <h1 class="plus" @click="showPopup()">+</h1>
                    </div>
                    <h3>SERVERY</h3>
                </div>
                <div class="circle">
                    <div class="box">
                        <h1 class="plus" @click="showPopup()">+</h1>
                    </div>
                    <h3>DRYING</h3>
                </div>
                <div class="circle">
                    <div class="box">
                        <h1 class="plus" @click="showPopup()">+</h1>
                    </div>
                    <h3>POTS</h3>
                </div>
            </div>
            <div class="bottomRow">
                <div class="circle">
                    <div class="box">
                        <h1 class="plus" @click="showPopup()">+</h1>
                    </div>
                    <h3>TABLES</h3>
                </div>
                <div class="circle">
                    <div class="box">
                        <h1 class="plus" @click="showPopup()">+</h1>
                    </div>
                     <h3>RINSING</h3>
                </div>
                <div class="circle">
                    <div class="box">
                        <h1 class="plus" @click="showPopup()">+</h1>
                    </div>
                    <h3>FLOORS</h3>
                </div>
                <div class="circle">
                    <div class="box">
                        <h1 class="plus" @click="showPopup()">+</h1>
                    </div>
                    <h3>CHAIRS</h3>
                </div>
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
  props: {
    msg: String
  },
  data() {
     return {
         popup: false
     }
  },
  methods: {
      showPopup() {
          console.log('emitting now...')
          this.$emit('plusClicked')
          console.log('geting photos...')
      }
  }
}
</script>

<style scoped>
.bottomRow, .topRow {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
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

.title {
    border: solid 7px black;
    border-radius: 20px;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50vw;
    height: 12vh;
    font-size: 60px;
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
</style>