<template>
  <div class="main" :style="{backgroundColor: backColor, transition: transTime}">
    <div class="title">
      <h1 :style="{color: textColor, backgroundColor: backColor, transition: transTime, border: border}">TAIOHI DUTIES</h1>
    </div>
    <div class="index-buttons">
      <router-link :to="{name: 'DutyDashboard', params: {id: 'Kitchen'}}">
        <div class="buttonSpace">
          <button :style="{backgroundColor: buttonColor, transition: transTime}">
            <h4 :style="{color: textColor, transition: transTime}">KITCHEN</h4>
          </button>
        </div>
      </router-link>
      <router-link :to="{name: 'DutyDashboard', params: {id: 'Hokowhitu'}}">
        <div class="buttonSpace">
          <button :style="{backgroundColor: buttonColor, transition: transTime}">
            <h4 :style="{color: textColor, transition: transTime}">HOKOWHITU</h4>
          </button>
        </div>
      </router-link>
      <router-link :to="{name: 'DutyDashboard', params: {id: 'Ilab'}}">
        <div class="buttonSpace">
          <button :style="{backgroundColor: buttonColor, transition: transTime}">
            <h4 :style="{color: textColor, transition: transTime}">ILAB</h4>
          </button>
        </div>
      </router-link>
      <router-link :to="{name: 'DutyDashboard', params: {id: 'Ako'}}">
        <div class="buttonSpace">
          <button :style="{backgroundColor: buttonColor, transition: transTime}">
            <h4 :style="{color: textColor, transition: transTime}">AKO</h4>
          </button>
        </div>
      </router-link>
    </div>

    <!-- switch for dark mode -->
    <div class="toggleSwitch">
      <label class="switch">
        <input ref="switch" type="checkbox" @click="lightDark()">
        <span class="slider round"></span>
      </label>
      <h3 id="modeTxt" :style="{color: textColor, transition: 0.3 + 's'}">{{switchText}}</h3>
    </div>
  </div>
</template>

<script>
import { db } from "../components/firebase";
import { black } from "color-name";

export default {
  name: "indexButtons",
  props: [],
  data() {
    return {
      mode: "lightMode",
      switchText: "LIGHT MODE",

      example: "example",

      border: "",
      textColor: "",
      textColor: "",
      title: "",
      bodyStyle: "",
      backColor: "",
      buttonColor: "",
      addButton: "",
      addTransition: "",
      plus: "",
      hover: "",
      transTime: "0.3s",
      switch: ""
    };
  },
  methods: {
    lightDark() {
      // check if the mode is set to lightmode; change to darkmode
      if (this.mode == "lightMode") {
        this.mode = "darkMode";

        this.mode = "darkMode";
        this.switchText = "DARK MODE";
        this.backColor = "#1a1a1a";
        this.textColor = "white";
        this.title = "#d9d9d9";
        this.buttonColor = "#525252";
        this.border = "10px solid white";
        this.addButton = "#454545";
        this.addTransition = "rgb(51, 51, 51)";
        this.plus = "#cccccc";
        this.hover = "#575757";

        this.$refs.switch.checked = true;

        // put all style changes into an object
        let style = {
          mode: this.mode,
          switchText: this.switchText,
          backColor: this.backColor,
          textColor: this.textColor,
          title: this.title,
          buttonColor: this.buttonColor,
          border: this.border,
          addButton: this.addButton,
          addTransition: this.addTransition,
          transTime: this.transTime,
          hover: this.hover,
          switch: this.$refs.switch.checked
        };

        // upload the style obj to firebase to be pulled down onto DutyDashboard
        db.collection("mode").doc("current").set(style);

      // check if the mode is set to darkmode; change to lightmode
      } else if (this.mode == "darkMode") {

        this.mode = "lightMode";
        this.switchText = "LIGHT MODE";
        this.backColor = "white";
        this.textColor = "black";
        this.title = "black";
        this.buttonColor = "rgb(230, 230, 230)";
        this.border = "10px solid black";
        this.addTransition = "#808080";
        this.plus = "#666666";
        this.hover = "#d6d6d6";

        this.$refs.switch.checked = false;

        // put all style changes into an object
        let style = {
          mode: this.mode,
          switchText: this.switchText,
          backColor: this.backColor,
          textColor: this.textColor,
          title: this.title,
          buttonColor: this.buttonColor,
          border: this.border,
          addTransition: this.addTransition,
          hover: this.hover,
          switch: this.$refs.switch.checked
        };

        // upload the style obj to firebase to be pulled down onto DutyDashboard
        db.collection("mode").doc("current").set(style);
      }
    }
  },
  mounted() {
    this.$bind("modeObj", db.collection("mode")).then(() => {
      this.mode = this.modeObj[0].mode;
      this.backColor = this.modeObj[0].backColor;
      this.textColor = this.modeObj[0].textColor;
      this.border = this.modeObj[0].border;
      this.buttonColor = this.modeObj[0].buttonColor;
      this.plus = this.modeObj[0].plus;
      this.addTransition = this.modeObj[0].addTransition;
    });

    if (this.switch.checked == true) {
      this.$refs.switch.checked = true;
    } else {
      this.$refs.switch.checked = false;
    }
  },
  computed() {

  }
}
</script>

<style scoped lang="scss">
* {
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.main {
  width: 100vw;
  height: 100vh;
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
  font-weight: bold;
}

button:hover {
    background-color: #4e4e4e;
    color: #ffffff;
    cursor: pointer;
    transition: 0.3s;
  }

  button:active {
    box-shadow: 0 5px rgb(0, 0, 0);
    transform: translateY(4px);
    transition: 0.3s;
  }

  .buttonSpace {
    height: 16vh;
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
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
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

  background-color: #838383;
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
