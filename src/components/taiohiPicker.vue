<template>
  <div class="main">
    <div class="rows">
      <!-- loop over the duties and names to assign to a circle -->
      <div v-for="(value, name) in getDutyArea" :key="name.id" class="circle" :id="name">
        <div
          v-if="value"
          class="box"
          :style="{ backgroundImage: `url(  ${require(  `../assets/taiohi-photos/${value}.png`  )}  )`, backgroundColor: addButton}"
          @click="showPopup(name)"
        ></div>
        <div v-else class="box" :style="{backgroundColor: addButton}">
          <h1 class="plus" @click="showPopup(name)" :style="{color: plus}">+</h1>
        </div>
        <h3 :style="{color: textColor}" class="black">{{name.toUpperCase()}}</h3>
      </div>
    </div>
    <!-- <div id="remove">
            <h1 id="x">X</h1>
    </div>-->
    <div class="return">
      <router-link to="/">
        <button :style="{backgroundColor: buttonColor}">BACK</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import { db } from "../components/firebase";

export default {
  name: "taiohiPicker",
  props: ["dutyArea"],
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
      plus: ""
    };
  },
  firestore: {
    dutiesObj: db.collection("duties")
  },
  mounted() {
    console.log("from taiohi picker: dutyArea: ", this.dutyArea);
    console.log("from taiohi picker: dutiesObj: ", this.dutiesObj);

    this.$bind("modeObj", db.collection("mode")).then(() => {
      // console.log("from bind", this.modeObj[0].mode)
      this.mode = this.modeObj[0].mode;
      this.backColor = this.modeObj[0].backColor;
      this.textColor = this.modeObj[0].textColor;
      this.border = this.modeObj[0].border;
      this.buttonColor = this.modeObj[0].buttonColor;
      this.addButton = this.modeObj[0].addButton;
      this.addTransition = this.modeObj[0].addTransition;
      this.hover = this.modeObj[0].hover
    });
  },
  computed: {
    getDutyArea() {
      var dutyAreaObj = this.dutiesObj.filter(obj => obj.id === this.dutyArea);
      console.log("from taiohi picker: dutyAreaObj: ", dutyAreaObj); //this is an array with the object at index 0
      return dutyAreaObj[0];
    }
  },
  methods: {
    showPopup(dutyType) {
      console.log("showing popup for: ", dutyType);
      // emiting duty type
      this.$emit("plusClicked", dutyType);
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
}

#x {
  color: black;
}

#remove:hover {
  cursor: pointer;
  color: red;
  border: solid 4px red;
  transition: 0.3s;
}

#x:hover {
  color: red;
  transition: 0.3s;
}

#remove {
  width: 40px;
  height: 40px;
  border: solid 4px black;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;
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