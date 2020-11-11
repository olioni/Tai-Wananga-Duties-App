<template>
  <div class="main">
    <div class="inside">
      <h1>{{ this.houseName }}</h1>
      <popupPhotos
        v-for="name in house"
        :key="name.id"
        :dutyType="dutyType"
        :dutyArea="dutyArea"
        :name="name"
        @selected="studentSelected()"
        :dutyPersonObj="dutyPersonObj"
      />
    </div>
    <!-- <div id="circle">
            <h1 class="x" @click="closePopup()">X</h1>
    </div>-->

    <button class="CANCEL" @click="closePopup()">CANCEL</button>
  </div>
</template>

<script>
import popupPhotos from "@/components/popupPhotos.vue";

export default {
  name: "popup",
  props: ["house", "dutyType", "dutyArea", "dutyPersonObj"],
  components: {
    popupPhotos
  },
  data() {
    return {
      name: "",
      color: "",
      houseName: ""
    };
  },
  methods: {
    closePopup() {
      // console.log('closing now...')
      this.$emit("xClicked");
    },
    getPhotos() {
      let photosObj = {};
      //get house list of students
      // console.log(this.house)

      //loop array to create images of taiohi w/ names
      console.log(this.photosObj)
    },
    studentSelected() {
      // console.log('student chosen, will now close popup')
      this.$emit("close");
    }
  },
  mounted() {
    
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=PT+Sans:wght@700&family=Rubik:wght@500&display=swap");

* {
  margin: 0;
}

/* #circle {
    display: flex;
    justify-content: center;
    align-items: center; 

    margin-bottom: 10px;

    height: 45px;
    width: 40px;
    border: 2px solid black;
} */

.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(61, 61, 61);
  width: 70%;
  height: 70%;
  border-radius: 15px;

  position: relative;
  height: 700px;
  top: -10%;
  margin-top: -700px;
}

.inside {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 90%;
}

.x {
  display: flex;
  justify-content: center;
  align-items: center;

  color: white;
  width: 2.5vw;
  height: 5vh;
  margin-top: 20px;

  border: 5px solid white;
  border-radius: 50%;

  transition: 0.3s;
}

.x:hover {
  color: red;
  cursor: pointer;
  border: 5px solid red;

  font-size: 40px;

  transition: 0.3s;
}

h3 {
  color: white;
  font-size: 50px;
}

.CANCEL {
  font-family: "PT Sans", sans-serif;

  border: none;

  width: 20vw;
  height: 7vh;

  margin-left: 15px;
  margin-top: 5%;

  background-color: rgb(187, 16, 16);
  color: white;
  transition: 0.3s;

  border-radius: 15px;

  font-size: 20px;
}

.CANCEL:hover {
  background-color: red;
  cursor: pointer;

  transition: 0.3s;
}
</style>