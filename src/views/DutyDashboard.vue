<template>
  <div class="dashboard" :style="{backgroundColor: backColor}">
    <div id="heading">
      <h1
        :style="{color: textColor, border: border}"
        v-if="dutyArea"
        class="title"
      >{{dutyArea.toUpperCase()}} DUTIES</h1>
    </div>
    <taiohiPicker @plusClicked="plusClicked" :dutyArea="dutyArea" :house="house"/>
    <popupBack v-if="popupBack" @xClicked="closePopup()"/>
    <popup
      v-if="popupFlag"
      @xClicked="closePopup()"
      :dutyArea="dutyArea"
      :dutyType="dutyType"
      :house="nui"
      :dutyPersonObj="dutyPersonObj"
      @close="close()"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import taiohiPicker from "@/components/taiohiPicker.vue";
import popup from "@/components/popup.vue";
import popupPhotos from "@/components/popupPhotos.vue";
import popupBack from "@/components/popupBack.vue";

import { db } from "../components/firebase";
import { houses, houseDuties, dutyAreas } from "../components/houseData";

export default {
  name: "DutyDashboard",
  components: {
    taiohiPicker,
    popup,
    popupPhotos,
    popupBack
  },
  data() {
    return {
      dutyArea: this.$route.params.id,
      // kitchenTA: false,
      // kitchenTN: false,
      // kitchenTM: false,
      kitchenTK: true,
      house: "",
      popupFlag: false,
      popupBack: false,
      photosFlag: false,
      dutyType: "",
      border: "",
      textColor: "",
      title: "",
      bodyStyle: "",
      backColor: "",
      buttonColor: "",
      mode: "",
      addTransition: "",
      plus: "",
      dutyPersonObj: null,
      nui: "",
      ariki: "",
      manawa: "",
      kaha: ""
    };
  },
  // firestore: {
  //   modeObj: db.collection("mode")
  // },
  mounted() {
    this.$bind("modeObj", db.collection("mode")).then(() => {
      // console.log("from bind", this.modeObj[0].mode)
      this.mode = this.modeObj[0].mode;
      this.backColor = this.modeObj[0].backColor;
      this.textColor = this.modeObj[0].textColor;
      this.border = this.modeObj[0].border;
      this.buttonColor = this.modeObj[0].buttonColor;
      this.plus = this.modeObj[0].plus;
      this.addTransition = this.modeObj[0].addTransition;
    });

    // YO OLIONI. (From Pā)
    // This data can be imported into any component. These arrays and objects will help you replicate the rotation in your Repl.it
    // moved house data to a separate file. now are imported. see line 20

    // console.log("houses import:", houses)
    // console.log("houseDuties import:", houseDuties)
    // console.log("dutyAreas import:", dutyAreas)

    this.ariki = houses.ariki;
    this.nui = houses.nui;
    this.kaha = houses.kaha;
    this.manawa = houses.manawa;
  },
  methods: {
    plusClicked(dutyPersonObj) {
      this.dutyPersonObj = dutyPersonObj;
      // console.log(this.dutyPersonObj)
      this.dutyType = dutyPersonObj.duty;
      this.popupFlag = true;
      this.popupBack = true;
      // console.log(this.popupFlag);
      // console.log(this.popupBack);
    },
    closePopup() {
      // console.log("x was clicked");
      this.popupFlag = false;
      this.popupBack = false;
    },
    houseRotation() {
      // if (thiskitchenTK == true) {
      //   house = kahaOnKitchen.kitchen;
      // }
    },
    close() {
      this.popupFlag = false;
      this.popupBack = false;
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
}

.dashboard {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
}

.title {
  border: solid 7px black;
  border-radius: 20px;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50vw;
  height: 12vh;
  font-size: 60px;
}

#heading {
  display: flex;
  width: 100%;
  height: 20vh;
  justify-content: center;
  align-items: center;
}
</style>