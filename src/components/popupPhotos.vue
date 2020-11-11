<template>
  <div class="popupImg">
    <!-- <selectedText v-if="selected"/> -->
    <img
      v-if="selected"
      id="selected"
      :style="{filter: overlay}"
      :src="require('../assets/taiohi-photos/' + name +'.png' )"
    >
    <img
      v-else
      class="unselected"
      :src="require('../assets/taiohi-photos/' + name +'.png' )"
      @click="saveData()"
    >
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
    // console.log(this.dutyPersonObj)
    // for (taiohiName in ) {
    if (this.dutyPersonObj.person == this.name) {
      this.selected = true;
      // console.log(this.dutyPersonObj.person, 'is', this.name)
      this.overlay = "brightness(50%)";
    } else {
      // console.log(this.dutyPersonObj.person)
      this.overlay = "brightness(100%)";
    }

    // }
  },
  methods: {
    saveData() {
      let taiohiOnDuty = {};

      taiohiOnDuty[this.dutyType] = this.name;

      // console.log(this.name + " is in " + this.dutyArea + ' on ' + this.dutyType)
      // this.selectedTaiohi = this.name
      // this.$emit("saveObj", this.selectedTaiohi)

      db.collection("duties").doc(this.dutyArea).update(taiohiOnDuty);

      this.close();
    },
    close() {
      // console.log('starting xClicked() function')
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
