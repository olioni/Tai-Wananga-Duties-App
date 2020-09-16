<template>
  <div class="kitchen">
    <div id="heading">
      <h1 class="title">{{dutyArea.toUpperCase()}} DUTIES</h1>
    </div>
    <taiohiPicker @plusClicked="plusClicked" :dutiesObj="dutiesObj"  :dutyArea="dutyArea"/>
    <popup v-if="popupFlag" @xClicked="closePopup()" :dutyArea="dutyArea" :dutyType="dutyType" :house="nui"/>
  </div>
</template>

<script>
// @ is an alias to /src
import taiohiPicker from '@/components/taiohiPicker.vue'
import popup from '@/components/popup.vue'
import popupPhotos from '@/components/popupPhotos.vue'

import { db } from '../components/firebase' 

export default {
  name: 'DutyDashboard',
  components: {
    taiohiPicker,
    popup,
    popupPhotos
  },
  mounted() {
    
  },
  data() {
    return {
      dutyArea: this.$route.params.id,
      dutiesObj: this.$route.params.dutiesObj,
      popupFlag: false,
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
        "ayah",
        "calais",
        "nathaniel",
        "jahnaia"
        ],
      dutyType: '',
      // dutiesObj: {
      //   kitchen: {
      //     bins: 'olioni',
      //     servery: 'meelah',
      //     drying: 'atama',
      //     pots: 'malakai',
      //     tables: '',
      //     rinsing: '',
      //     floors: '',
      //     chairs: ''
      //     },
      //     hokowhitu: {
      //       vacuum: '',
      //       chairs: '',
      //     }
      // },
    }
  }, 
  methods: {
    plusClicked(duty) {
      this.dutyType = duty
      console.log("plus was clicked")
      console.log("dutyType is " + this.dutyType)
      this.popupFlag = true
    },
      closePopup() {
      console.log("x was clicked")
      this.popupFlag = false
    },
  
  }
}
</script>

<style scoped>
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