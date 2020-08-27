<template>
  <div class="kitchen">
    <taiohiPicker @plusClicked="plusClicked"/>
    <popup v-if="popupFlag" @xClicked="closePopup()" :house="nui"/>
  </div>
</template>

<script>
// @ is an alias to /src
import taiohiPicker from '@/components/taiohiPicker.vue'
import popup from '@/components/popup.vue'
import popupPhotos from '@/components/popupPhotos.vue'

export default {
  name: 'Kitchen',
  components: {
    taiohiPicker,
    popup,
    popupPhotos
  },
  computed: {

  },
  data() {
    return {
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
    }
  }, 
  methods: {
    plusClicked() {
      console.log("plus was clicked")
      this.popupFlag = true
    },
      closePopup() {
      console.log("x was clicked")
      this.popupFlag = false
    }
  }
}
</script>

<style scoped>
  * {
    margin: 0;
  }

  .kitchen {
    height: 100%;
    width: 100%;
  }

  body {
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>