<template>
    <div clas="main">
        <div class="title">
            <h1>TAIOHI DUTIES</h1>
        </div>
        <div class="index-buttons">
            <router-link :to="{name: 'DutyDashboard', params: {id: 'Kitchen'}}">
                <button>KITCHEN</button>
            </router-link>
            <router-link :to="{name: 'DutyDashboard', params: {id: 'Hokowhitu'}}">
                <button>HOKOWHITU</button>
            </router-link>
            <router-link :to="{name: 'DutyDashboard', params: {id: 'Ilab'}}">
                <button>ILAB</button>
            </router-link>
            <router-link :to="{name: 'DutyDashboard', params: {id: 'Ako'}}">
                <button>AKO</button>
            </router-link>
        </div>
        <div class="toggleSwitch">
            <!-- Rounded switch -->
            <label class="switch">
            <input type="checkbox" @click="lightDark()">
            <span class="slider round"></span>
            </label>
            <h3 id="modeTxt"> {{switchText}} </h3>
        </div>
    </div>
</template>

<script>
export default {
  name: 'indexButtons',
  props: [],
  data() {
      return {
          mode: 'lightMode',
          switchText: 'LIGHT MODE'
      }
  }, 
  methods: {
      lightDark() {
        if (this.mode == 'lightMode') {
            console.log('going DARK')
            this.mode = 'darkMode'
            this.switchText ='DARK MODE'
        } else {
            console.log('going LIGHT')
            this.mode = 'lightMode'
            this.switchText = 'LIGHT MODE'
        }
      }
  }
}
</script>

<style scoped>
* {
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
}

.index-buttons {
    height: 70vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.title {
    font-size: 40px;
    bottom: 0;
    /* width: 100%; */
    display: flex;
    justify-content: center;
    align-items: center;
}

h1 {
    border: solid 10px black;
    border-radius: 20px;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50vw;
    height: 12vh;
}

button {
    background-color: rgb(230, 230, 230);
    color: rgb(0, 0, 0);       
    border-radius: 15px;
    border: none;
    height: 15vh;
    width: 50vw;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 40px;
    margin: 5px;
    font-weight: bold;
}

button:hover {
    background-color: #4e4e4e;
    color: #ffffff;
    cursor: pointer;
    transition: 0.3s;
}

.main {
    margin: 0;
}

a {
    text-decoration: none;
}

/* styling for the toggle switch */

.toggleSwitch {
    width: 50%;
}

.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: rgb(70, 70, 70);
}

input:focus + .slider {
  box-shadow: 0 0 1px rgb(70, 70, 70);
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
