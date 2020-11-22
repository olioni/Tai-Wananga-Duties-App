<template>
  <div class="dashboard" :style="{backgroundColor: backColor}">
    <div id="heading">
      <h1
        :style="{color: textColor, border: border}"
        v-if="dutyArea"
        class="title"
      >{{dutyArea.toUpperCase()}} DUTIES</h1>
    </div>
    <taiohiPicker @plusClicked="plusClicked" @togglePin="togglePin" :dutyArea="dutyArea" :house="house" :confirmedPin="confirmedPin"/>
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
    <pinPopup v-if="pinFlag" @closePinPopup="closePinPopup" @pinConfirmed="pinConfirmed"/>
  </div>
</template>

<script>
// @ is an alias to /src
// import components from the components folder
import taiohiPicker from "@/components/taiohiPicker.vue";
import popup from "@/components/popup.vue";
import popupPhotos from "@/components/popupPhotos.vue";
import popupBack from "@/components/popupBack.vue";
import pinPopup from "@/components/pinPopup.vue";

import { db } from "../components/firebase";
import { houses, houseDuties, dutyAreas } from "../components/houseData";

export default {
  name: "DutyDashboard",
  components: {
    taiohiPicker,
    popup,
    popupPhotos,
    popupBack,
    pinPopup
  },
  data() {
    return {
      dutyArea: this.$route.params.id,

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
      kaha: "",

      pinFlag: false,
      confirmedPin: ''
    };
  },
  mounted() {
    // bind the style changes made in buttons to these dutyDashboard variables
    this.$bind("modeObj", db.collection("mode")).then(() => {
      this.mode = this.modeObj[0].mode;
      this.backColor = this.modeObj[0].backColor;
      this.textColor = this.modeObj[0].textColor;
      this.border = this.modeObj[0].border;
      this.buttonColor = this.modeObj[0].buttonColor;
      this.plus = this.modeObj[0].plus;
      this.addTransition = this.modeObj[0].addTransition;
    });

    // assign the specified houses in the houses object to these variables
    this.ariki = houses.ariki;
    this.nui = houses.nui;
    this.kaha = houses.kaha;
    this.manawa = houses.manawa;
  },
  methods: {
    // when the plus on taiohiPicker is clicked assign the variables
    // dutyPersonObj and dutyType to variables of the same name AND
    // set popupFlag and back to true to display them
    plusClicked(dutyPersonObj) {
      this.dutyPersonObj = dutyPersonObj;
      this.dutyType = dutyPersonObj.duty;
      this.popupFlag = true;
      this.popupBack = true;
    },
    // set popupFlag and back to false to hide them
    closePopup() {
      this.popupFlag = false;
      this.popupBack = false;
    },
    // set popupFlag and back to false to hide them
    close() {
      this.popupFlag = false;
      this.popupBack = false;
    },
    // set pinFlag and popupBack to true to display them
    togglePin() {
      this.pinFlag = true
      this.popupBack = true
    },
    // set pinFlag and popupBack to false to hide them
    closePinPopup() {
      this.pinFlag = false
      this.popupBack = false
    },
    // if the pin is correct set pinFlag and popupBack to false as above
    // BUT also set confirmed pin to true to state the pin is correct to taiohiPicker
    pinConfirmed() {
      this.confirmedPin = true
      this.pinFlag = false
      this.popupBack = false
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