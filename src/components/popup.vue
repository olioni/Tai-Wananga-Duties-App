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
    <div class="popupButtons">
      <div class="cancelButton">
        <button class="CANCEL" @click="closePopup()">CANCEL</button>
      </div>
      <div class="autofillButton">
        <button class="AUTOFILL" @click="autofillDuties()">AUTOFILL</button>
      </div>
    </div>
  </div>
</template>

<script>
import popupPhotos from "@/components/popupPhotos.vue";
import { dutyAreas, houses } from '../components/houseData.js';
import { db } from '../components/firebase.js';

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

      dutyObjLength: '',
      areasName: '',
      thisAreaName: '',
      dutyAreaValue: '',
      houseLength: '',
      autofillObj: {},
      listOfTaiohi: '',
      dutyList: ''

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
    },
    autofillDuties() {
      // on click get length of students in house and length of duties
      // loop over length of duties
      // for every iteration of duties length loop assign a random taiohi to each duty

      this.areasName = Object.values(dutyAreas)
      this.thisAreaName = this.dutyArea

      if (this.thisAreaName == 'Kitchen') {
        this.dutyAreaValue = 0
      } else if (this.thisAreaName == 'Hokowhitu') {
        this.dutyAreaValue = 1
      } else if (this.thisAreaName == 'Ako') {
        this.dutyAreaValue = 3
      } else if (this.thisAreaName == 'Ilab') {
        this.dutyAreaValue = 2
      }

      this.dutyObjLength = this.areasName[this.dutyAreaValue].length
      this.houseLength = this.house.length
      this.dutyList = this.areasName[this.dutyAreaValue]

      for (let x = 0; x <= this.house.length; x++) {
        if (this.house == Object.values(houses)[x]) {
          this.listOfTaiohi = Object.values(houses)[x]
        }
      }
      for (let i = 0; i < this.dutyObjLength; i++) {
        let randomTaiohi = this.listOfTaiohi[Math.floor(Math.random() * this.houseLength + 1)]
        this.autofillObj[this.dutyList[i]] = randomTaiohi
      }
      db.collection("duties").doc(this.dutyArea).set(this.autofillObj);
      this.$emit("close")
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

.popupButtons {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 10vh;
}

.AUTOFILL {
  font-family: "PT Sans", sans-serif;

  border: none;

  width: 20vw;
  height: 7vh;

  margin-left: 15px;
  margin-top: 5%;

  background-color: rgb(170, 170, 170);
  color: white;
  transition: 0.3s;

  border-radius: 15px;

  font-size: 20px;
}

.AUTOFILL:hover {
  background-color: rgb(136, 136, 136);
  cursor: pointer;

  transition: 0.3s;
}
</style>