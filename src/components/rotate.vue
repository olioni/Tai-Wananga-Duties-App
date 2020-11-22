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
      oldTaiohiArray: '',
      newTaiohiArray: '',
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

          let oldTaiohiArray = Object.values(this.dutyObj[x])
          console.log('old array:', oldTaiohiArray)

        
          let newTaiohiArray = this.rotateArray(oldTaiohiArray, 1)
          console.log('new rotated array:', newTaiohiArray)

          let dutyRotatedObj = {}
          console.log(this.dutyArea)
          const placeholder = this.dutyObj
          console.log(placeholder[this.dutyArea])
          console.log(placeholder[this.dutyArea].length)
          for (let y = 0; y < this.dutyObj[this.dutyArea].length; y++) {  

            dutyRotatedObj[this.dutiesObj[this.dutyArea][y]] = newTaiohiArray[y]
            
            
          }
          console.log(dutyRotatedObj)
          // console.log(this.dutyArray)          

          // dutyObj[duties[x]] = rotatedStudents[x]
          // console.log('new obj created:', this.newRotatedObj)

          // db.collection("duties").doc(this.dutyArea).update(this.newRotatedObj);

      
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