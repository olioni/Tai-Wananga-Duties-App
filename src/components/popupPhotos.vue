<template>
  <div class="popupImg">
    <!-- image of taiohi -->
    <img class="unselected" :src="require('../assets/taiohi-photos/' + name +'.png' )" @click="saveData()">
  </div>
</template>

<script>
import firebase from "firebase";
import { db } from "./firebase";

// import { studentsDb } from "./firebaseInit";

export default {
  name: "popupPhotos",
  props: ["name", "dutyType", "dutyArea", "dutyPersonObj"],
  components: {},
  data() {
    return {
      selectedTaiohi: "",
      selected: false,
      unselected: true,

      taiohiName: "",

      overlay: ""
    };
  },
  mounted() {

  },
  methods: {
    saveData() {
      // create empty object named taiohiOnDuty
      let taiohiOnDuty = {};

      // assign taiohiOnDuty a property of dutyType (bins, washing, drying, etc) to taiohi name
      taiohiOnDuty[this.dutyType] = this.name;

      // send to firebase to store in the cloud for pulling down
      db.collection("duties").doc(this.dutyArea).update(taiohiOnDuty);

      this.close();
    },
    close() {
      // if a taiohi was selected or the x was clicked then 
      //emit selected to push up to dutyDashboard
      // which then hides the popup
      this.$emit("selected");
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
}

#selected {
  width: 140px;
  height: 140px;
  border-radius: 50%;
  background-color: rgb(145, 145, 145);
  margin-right: 5px;
  margin-left: 5px;
  margin-top: 5px;
  margin-bottom: 5px;
}

.unselected {
  width: 140px;
  height: 140px;
  border-radius: 50%;
  background-color: rgb(145, 145, 145);
  margin-right: 5px;
  margin-left: 5px;
  margin-top: 5px;
  margin-bottom: 5px;
}

/* .profilePic {
    width: 140px;
    height: 140px;
    border-radius: 50%;
    background-color: rgb(145, 145, 145);
    margin-right: 5px;
    margin-left: 5px;
    margin-top: 5px;
    margin-bottom: 5px;
} */

.unselected:hover {
  border-radius: 50%;
  -webkit-box-shadow: 0px 0px 30px 0px rgb(255, 255, 255);
  -moz-box-shadow: 0px 0px 30px 0px rgba(255, 255, 255);
  box-shadow: 0px 0px 30px 0px rgba(255, 255, 255);
  cursor: pointer;
  transition: 0.3s;

  background-color: white;
}

.popupImg {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

#name {
  color: white;
}
</style>
