<template>
  <div class="main">
    <div class="inside">
        <h1 id="pinHeading">ENTER 4-DIGIT PIN</h1>
        <input type="password" ref="pin">
        <p v-if="incorrectPin">{{ this.msg }}</p>
    </div>
    <div class="buttons">
        <button class="CANCEL" @click="closePopup()">CANCEL</button>
        <button class="ENTER" @click="confirmPin()">ENTER</button>
    </div>
  </div>
</template>

<script>

export default {
  name: "pinPopup",
  props: [""],
  data() {
    return {
        msg: '',
        incorrectPin: false
    };
  },
  mounted() {

  },
  methods: {
    closePopup() {
        this.$emit("closePinPopup")
    },
    confirmPin() {
        if (this.$refs.pin.value == 1234) {
            this.$emit("confirmed")
            this.incorrectPin = false
        } else if (this.$refs.pin.value.toString().length == 5) {
            this.msg = "PIN IS TOO LONG, PLEASE TRY AGAIN"
            this.incorrectPin = true
        } else if (this.$refs.pin.value.toString().length == 3) {
            this.msg = "PIN IS TOO SHORT, PLEASE TRY AGAIN"
            this.incorrectPin = true
        } else if (this.$refs.pin.value < 1234 || this.$refs.pin.value > 1234) {
            this.msg = "INCORRECT PIN, PLEASE TRY AGAIN"
            this.incorrectPin = true
        } else if (typeof(this.$refs.pin.value) !== Number) {
            this.msg = "PIN MUST BE A 4-DIGIT NUMBER"
            this.incorrectPin = true
        }
    }
  }
}
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=PT+Sans:wght@700&family=Rubik:wght@500&display=swap");

* {
  margin: 0;
}

.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(61, 61, 61);
  width: 70%;
  height: 70%;
  border-radius: 15px;

  position: absolute;
}

.inside {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 90%;

    h1 {
        color: white;
    }

    input {
        width: 20vw;
        height: 5vh;

        font-size: 50px;

        text-align: center;

        border-radius: 10px;
        border: none;
    }   

    p {
        color: red;
        margin-top: 25px;
        font-weight: bold;
        font-size: 30px;
    }
}


.ENTER {
    font-family: "PT Sans", sans-serif;

    border: none;

    width: 20vw;
    height: 7vh;

    margin-left: 15px;
    margin-top: 5%;

    background-color: rgb(30, 187, 16);
    color: white;
    transition: 0.3s;

    border-radius: 15px;

    font-size: 20px;
}

.ENTER:hover {
    cursor: pointer;
    background-color: lime;

    transition: 0.3s;
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
  
  .x:hover {
    color: red;
    cursor: pointer;
    border: 5px solid red;
    font-size: 40px;
    transition: 0.3s;
    }
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