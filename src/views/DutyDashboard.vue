<template>
  <div class="kitchen">
    <div id="heading">
      <h1 v-if="dutyArea" class="title">{{dutyArea.toUpperCase()}} DUTIES</h1>
    </div>
    <taiohiPicker @plusClicked="plusClicked" :dutyArea="dutyArea"/>
    <popupBack v-if="popupBack" @xClicked="closePopup()"/>
    <popup v-if="popupFlag" @xClicked="closePopup()" :dutyArea="dutyArea" :dutyType="dutyType" :house="nui"/>
  </div>
</template>

<script>
// @ is an alias to /src
import taiohiPicker from '@/components/taiohiPicker.vue'
import popup from '@/components/popup.vue'
import popupPhotos from '@/components/popupPhotos.vue'
import popupBack from '@/components/popupBack.vue'

import { db } from '../components/firebase' 

export default {
  name: 'DutyDashboard',
  components: {
      taiohiPicker,
      popup,
      popupPhotos,
      popupBack
  },
  mounted() {

  },
  data() {
    return {
      dutyArea: this.$route.params.id,
      // kitchenTA: false,
      // kitchenTN: false,
      // kitchenTM: false,
      // kitchenTK: false,
      manawaOnKitchen: {
        kitchen: 'manawa',
        hokowhitu: 'ariki',
        ilab: 'nui',
        ako: 'kaha'
      },
      kahaOnKitchen: {
        kitchen: 'kaha',
        hokowhitu: 'nui',
        ilab: 'manawa',
        ako: 'ariki'
      },
      arikiOnKitchen: {
        kitchen: 'ariki',
        hokowhitu: 'manawa',
        ilab: 'kaha',
        ako: 'nui'
      },
      nuiOnKitchen: {
        kitchen: 'nui',
        hokowhitu: 'kaha',
        ilab: 'ariki',
        ako: 'manawa'
      },
      popupFlag: false,
      popupBack: false,
      photosFlag: false,
        nui: [
        "olioni",
        "margaret",
        "atama",
        "aria",
        "jodeci",
        "teise",
        "cage",
        "maia",
        "calais",
        "nathaniel",
        "jahnaia"
        ],
        ariki: [
          "mata",
          "dante",
          "terangimarie",
          "meelah",
          "shiquana",
          "anton",
          "oho",
          "kayah",
          "pare"
        ],
        kaha: [
          "jesse",
          "miri",
          "dallas",
          "kyden",
          "lanae",
          "rongopai",
          "harley",
          "nevaeh",
          "celin",
          "taliyah",
          "mihiata"
        ],
        manawa: [
          "kino",
          "casey",
          "hekaranga",
          "cairo",
          "malakai",
          "kiana",
          "kareama",
          "akaysha",
          "tainui",
          "teaurereo",
          "teahu",
          "savannah",
          "shannah",
          "keyahn"
        ],
      dutyType: '',
    }
  }, 
  methods: {
    plusClicked(dutyType) {
      console.log("plus was clicked. duty is:", dutyType)
      this.dutyType = dutyType
      this.popupFlag = true
      this.popupBack = true
    },
      closePopup() {
      console.log("x was clicked")
      this.popupFlag = false
      this.popupBack = false
    },
    houseRotation() {

    }
  
  }
}
</script>

<style scoped>
*{
  margin: 0;
}

.kitchen {
  height: 100%;
  width: 100%;
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