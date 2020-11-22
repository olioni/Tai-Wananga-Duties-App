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
import { houses, houseDuties, dutyAreas } from "../components/houseData";
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
      rotateObj: ''
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
      rotate() {
        this.rotateObj = this.dutyObj
        console.log(this.rotateObj)
      }
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