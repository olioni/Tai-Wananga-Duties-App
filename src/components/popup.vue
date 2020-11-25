<template>
  <div class="main">
    <div class="inside">
      <h1 id="">{{ this.dutyHouse.toUpperCase() }}</h1>
      <div class="photoDiv">
        <popupPhotos
          v-for="name in house"
          :key="name.id"
          :dutyType="dutyType"
          :dutyArea="dutyArea"
          :name="name"
          @selected="studentSelected()"
          :dutyPersonObj="dutyPersonObj"
          :style="{top: top}"
        />
        </div>
    </div>
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
      dutyHouse: "",
      top: null,
    };
  },
  methods: {
    closePopup() {
      // emit xClicked to dutyDashboard to hide the popup when the x is clicked
      this.$emit("xClicked");
    },
    studentSelected() {
      // emit close to dutyDashboard to hide popup when taiohi is selected
      this.$emit("close");
    }
  },
  mounted() {
    if (this.house == 'nui') {
      this.dutyHouse = 'tai nui'
    } else if (this.house == 'ariki') {
      this.dutyHouse = 'tai ariki'
    } else if (this.house == 'kaha') {
      this.dutyHouse = 'tai kaha'
    } else if (this.house == 'manawa') {
      this.dutyHouse = 'tai manawa'
    }
  }
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=PT+Sans:wght@700&family=Rubik:wght@500&display=swap");

* {
  margin: 0;
}

.photoDiv {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
}

.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(61, 61, 61);
  width: 80%;
  height: 80%;
  border-radius: 15px;
  position: absolute;
}

.inside {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
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