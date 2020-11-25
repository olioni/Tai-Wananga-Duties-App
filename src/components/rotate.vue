<template>
  <div class="main">
    <div class="space">
      <div class="box" :style="{backgroundColor: buttonColor}">
        <img src="@/assets/white.png" id="rotate" @click="rotate()">
      </div>
    </div>
  </div>
</template>

<script>
import { houses, houseDuties, dutyAreas, areas } from "../components/houseData";
import { db } from "../components/firebase.js";

export default {
  name: "rotate",
  props: ["dutyArea"],
  components: {},
  data() {
    return {
      image: "",
      mode: "",
      buttonColor: "",
      dutyObj: "",
      oldTaiohiArray: [],
      newTaiohiArray: [],
      area: '',
      newObj: '',
      newRotatedObj: {},
      dutyArray: []
    }
  },
  firestore: {
    dutyObj: db.collection("duties")
  },
  mounted() {
    // pull style changes from firebase and assign to the same named variables for style changes
    this.$bind("modeObj", db.collection("mode")).then(() => {
      this.mode = this.modeObj[0].mode;
      this.buttonColor = this.modeObj[0].buttonColor;
    });

  },
  methods: {
    rotateArray(array, stepsToShift) {
      for (var i = 0; i < stepsToShift; i++) {
        array.unshift(array.pop());
      }

      return array;
      },
    rotate() {
      for (let x = 0; x < this.dutyObj.length; x++) {
        if (this.dutyObj[x].id == this.dutyArea) {

          this.oldTaiohiArray = Object.values(this.dutyObj[x])
          this.newTaiohiArray = this.rotateArray(this.oldTaiohiArray, 1)

          for (let y = 0; y < this.dutyObj.length; y++) {  
            if (this.dutyObj[y].id == this.dutyArea) {
              this.dutyArray = Object.keys(this.dutyObj[y])
            }
          }

          for (let z = 0; z < this.dutyArray.length; z++) {
            this.newRotatedObj[this.dutyArray[z]] = this.newTaiohiArray[z]
          }         

          db.collection("duties").doc(this.dutyArea).set(this.newRotatedObj);
          
        }
      }
    },
  }
};

</script>

<style scoped>

#rotate {
  width: 100px;
  height: 100px;
}

.box {
  background-color: #525252;
  border-radius: 15px;
}

.box:hover {
  cursor: pointer;
}

.space {
  margin-left: 10px;
  margin-right: 10px;
}

</style>