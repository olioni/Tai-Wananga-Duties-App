<template>
  <div class="main">
    <div class="rows">
      <!-- loop over the duties and names to assign to a circle -->
      <div v-for="(value, name) in getDutyArea" :key="name.id" class="circle" :id="name">
        <!-- TAIOHI PHOTO -->
        <div
          v-if="value"
          class="box"
          :style="{ backgroundImage: `url(  ${require(  `../assets/taiohi-photos/${value}.png`  )}  )`, backgroundColor: addButton}"
        >
          <div class="removeX" v-if="removeFlag" @click="removeTaiohi(name, value)">X</div>
        </div>
        <div v-else class="box" :style="{backgroundColor: addButton}">
          <!-- PLUS -->
          <h1 class="plus" @click="showPopup(name, value)" :style="{color: plus}">+</h1>
        </div>
        <!-- LABEL -->
        <h3 :style="{color: textColor}" class="black">{{name.toUpperCase()}}</h3>
      </div>
    </div>
    <!-- div full of buttons -->
    <div class="return">
      <router-link to="/" v-if="hide">
        <button id="BACK" v-if="hide" :style="{backgroundColor: buttonColor, color: textColor}">BACK</button>
      </router-link>
      <rotate :dutyArea="dutyArea" v-if="hide"/>
      <button id="REMOVE" class="auto" v-if="hideRemove" @click="togglePin()"> AUTO </button>
      <button id="REMOVE" class="negativeButton" v-if="showRemove" @click="toggleRemove()"> REMOVE </button>
      <button id="DONE" class="negativeButton" v-if="removeFlag" @click="endRemoving()">DONE</button>
    </div>
  </div>
</template>

<script>
import { db } from "../components/firebase";

import rotate from "../components/rotate.vue";

export default {
  name: "taiohiPicker",
  components: {
    rotate
  },
  props: ["dutyArea", "house", "confirmedPin"],
  data() {
    return {
      popup: false,

      dutiesObj: null,

      dutyType: "",

      border: "",
      textColor: "",
      title: "",
      bodyStyle: "",
      backColor: "",
      buttonColor: "",
      addButton: "",
      addTransition: "",
      mode: "",
      plus: "",

      dutyPersonObj: {},

      removeObj: null,
      hide: true,

      removeFlag: false,

      houseName:'',

      toggleMode: '',
      
      showRemove: false,
      hideRemove: true
    }
  },
 watch: {
    confirmedPin: function (val) {
      this.showRemove = true
      this.hideRemove = false
    }
 },
  firestore: {
    dutiesObj: db.collection("duties")
  },
  mounted() {
    // during the page loading bind the style changes to pre-defined variables of the same name for style changes
    this.$bind("modeObj", db.collection("mode")).then(() => {
      this.mode = this.modeObj[0].mode;
      this.backColor = this.modeObj[0].backColor;
      this.textColor = this.modeObj[0].textColor;
      this.border = this.modeObj[0].border;
      this.buttonColor = this.modeObj[0].buttonColor;
      this.addButton = this.modeObj[0].addButton;
      this.addTransition = this.modeObj[0].addTransition;
      this.hover = this.modeObj[0].hover;
      this.plus = this.modeObj[0].plus;
    });

    // ROTATE FUNCTION
    // at start of new day, get duty order from db

    //turn obj into array

    // rotate db order

    // updated db with new rotation
  },
  computed: {
    getDutyArea() {
      // assign dutyAreaObj the object of duties and taiohi for the specified dutyArea (kitchen, ako, hokowhitu, ilab)
      var dutyAreaObj = this.dutiesObj.filter(obj => obj.id === this.dutyArea);
      return dutyAreaObj[0];
    }
  },
  methods: {
    showPopup(dutyType, value) {
      // variable dutyPersonObj holds the duty name and person on clicked duty
      this.dutyPersonObj = {
        duty: dutyType,
        person: value
      };

      // emiting duty type
      this.$emit("plusClicked", this.dutyPersonObj);

      // show/hide buttons in return div
      this.removeFlag = false;
      this.hide = true;
    },
    removeTaiohi(name, value) {
      // assign dutyAreaRef the firebase object for the specified dutyArea (kitchen, ako, hokowhitu, ilab)
      let dutyAreaRef = db.collection("duties").doc(this.dutyArea);

      //update currently selected taiohi with empty object; which removes them from firebase
      let updateObj = {};
      updateObj[name] = "";

      // remove taiohi from duty
      let removeDuty = dutyAreaRef.update(updateObj);
    },
    toggleRemove() {
      // function to hide/show buttons in return div 
      this.removeFlag = true;
      this.showRemove = false;
      this.hide = false;
    },
    endRemoving() {
      // function to hide/show buttons in return div
      this.removeFlag = false;
      this.showRemove = false;
      this.hideRemove = true;
      this.hide = true;
    },
    togglePin() {
      // emit correct pin
      this.$emit("togglePin")
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=PT+Sans:wght@700&family=Rubik:wght@500&display=swap");

* {
  margin: 0;
}

.auto {
  background-color: grey;
  color: white;

  width: 30vw;
}

.removeX {
  color: white;
  background-color: rgb(211, 14, 14);
  height: 50px;
  width: 50px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;

  position: absolute;
  top: 0;
  right: 0;

  font-size: 20px;
  font-weight: bolder;

  transition: 0.3s;
}

.removeX:hover {
  background-color: red;
  font-size: 30px;

  transition: 0.3s;
}

.black {
  font-family: "Rubik", sans-serif;
}

.return {
  display: flex;
  width: 70vw;
  height: 18vh;

  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
}

.negativeButton {
  width: 30vw;
  background-color: rgb(187, 16, 16);
  color: white;
  transition: 0.3s;
}

.negativeButton:hover {
  background-color: red;
  transition: 0.3s;
}

#BACK {
  width: 30vw;
}

.rows {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 70%;
}

.black {
  color: black;
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
  position: relative;
}

.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

button {
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
  -top: 40px;
  font-family: "PT Sans", sans-serif;
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

.plus:hover {
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