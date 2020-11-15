<template>
  <div class="dashboard" :style="{backgroundColor: backColor}">
    <div id="heading">
      <h1
        :style="{color: textColor, border: border}"
        v-if="dutyArea"
        class="title"
      >{{dutyArea.toUpperCase()}} DUTIES</h1>
    </div>
    <taiohiPicker @plusClicked="plusClicked" @togglePin="togglePin" :dutyArea="dutyArea" :house="house" :confirmation="confirmation" @cancelConfirmation="closePin()"/>
    <popupBack v-if="popupBack" @xClicked="closePopup()"/>
    <popup
      v-if="popupFlag"
      @xClicked="closePopup()"
      :dutyArea="dutyArea"
      :dutyType="dutyType"
      :house="nui"
      :dutyPersonObj="dutyPersonObj"
      :houseName="houseName"
      @close="close()"
    />
    <pinPopup v-if="pinFlag" @closePinPopup="closePinPopup" @confirmed="confirmed"/>
  </div>
</template>

<script>
// @ is an alias to /src
import taiohiPicker from "@/components/taiohiPicker.vue";
import popup from "@/components/popup.vue";
import popupPhotos from "@/components/popupPhotos.vue";
import popupBack from "@/components/popupBack.vue";
import pinPopup from "@/components/pinPopup.vue";

import { db } from "../components/firebase";
import { houses, houseDuties, dutyAreas, houseName } from "../components/houseData";

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
      confirmation: false
    };
  },
  mounted() {
    this.$bind("modeObj", db.collection("mode")).then(() => {
      this.mode = this.modeObj[0].mode;
      this.backColor = this.modeObj[0].backColor;
      this.textColor = this.modeObj[0].textColor;
      this.border = this.modeObj[0].border;
      this.buttonColor = this.modeObj[0].buttonColor;
      this.plus = this.modeObj[0].plus;
      this.addTransition = this.modeObj[0].addTransition;
    });

    this.ariki = houses.ariki;
    this.nui = houses.nui;
    this.kaha = houses.kaha;
    this.manawa = houses.manawa;
  },
  methods: {
    plusClicked(dutyPersonObj) {
      this.dutyPersonObj = dutyPersonObj;

      this.dutyType = dutyPersonObj.duty;
      this.popupFlag = true;
      this.popupBack = true;
    },
    closePopup() {
      // console.log("x was clicked");
      this.popupFlag = false;
      this.popupBack = false;
    },
    close() {
      this.popupFlag = false;
      this.popupBack = false;
    },
    togglePin() {
      this.pinFlag = true
      this.popupBack = true
    },
    closePinPopup() {
      this.pinFlag = false
      this.popupBack = false
    },
    confirmed() {
      this.confirmation = true
      this.pinFlag = false
      this.popupBack = false
    },
    closePin() {
      this.confirmation = false
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