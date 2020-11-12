<template>
  <div class="main">
    <div class="box" :style="{backgroundColor: buttonColor}">
      <img src="@/assets/white.png" id="rotate">
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
      rotateObj: ""
    }
  },
  firestore: {
    rotateObj: db.collection("duties")
  },
  mounted() {
    this.$bind("modeObj", db.collection("mode")).then(() => {
      this.mode = this.modeObj[0].mode;

      this.buttonColor = this.modeObj[0].buttonColor;
    });

    if (this.mode == "darkMode") {
      this.image = "white.png";
    } else {
      this.image = "black.png";
    }
  },
  methods: {
      rotate() {
        
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

  margin-top: 40px;
}

.box:hover {
  cursor: pointer;
}

</style>