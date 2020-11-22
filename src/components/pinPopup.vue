<template>
  <div class="main">
    <div class="inside">
      <h1 id="pinHeading">ENTER 4-DIGIT PIN</h1>
      <input ref="pin" type="password" max="4" min="4">
      <div id="errorDiv" v-if="incorrectPin">
        <p v-if="incorrectPin" id="errorMsg">{{ this.msg }}</p>
      </div>
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
        incorrectPin: false,
    };
  },
  mounted() {
      this.incorrectPin = false
  },
  methods: {
    closePopup() {
        this.$emit("closePinPopup")
    },
    confirmPin() {
        // check if pin is correct pin
        console.log(this.$refs.pin.value)
        if (isNaN(this.$refs.pin.value) == false) {
          if (this.$refs.pin.value == 1234) {
            this.$emit("pinConfirmed")
            // check if pin is too long
          } else if (this.$refs.pin.value.length > 4) {
            this.msg = 'PIN IS TOO LONG, PLEASE TRY AGAIN'
            this.incorrectPin = true
            // check if pin is too short
          } else if (this.$refs.pin.value.length < 4 && this.$refs.pin.value.length >= 1 && this.$refs.pin.value >= 1) {
            this.msg = 'PIN IS TOO SHORT, PLEASE TRY AGAIN'
            this.incorrectPin = true
            // check if pin is 4 digits, is not a string, but is incorrect
          } else if (this.$refs.pin.value.length == 4 && this.$refs.pin.value !== 1234) {
            this.msg = 'PIN IS INCORRECT'
            this.incorrectPin = true
            // check if pin is less than one (for decimals)
          } else if (10 % this.$refs.pin.value <= 1) {
            this.msg = 'PIN CANNOT BE DECIMAL, PLEASE TRY AGAIN'
            this.incorrectPin = true
          } else if (this.$refs.pin.value == '') {
            this.msg = 'PLEASE ENTER A 4-DIGIT PIN'
            this.incorrectPin = true
          }
        } else if (isNaN(this.$refs.pin.value) == true) {
          // check if pin is a string
          this.msg = 'PIN MUST BE A 4-DIGIT NUMBER'
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

button:hover {
  cursor:pointer;
}

.buttons {
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  height: 10vh;
  width: 45vw;
}

#errorDiv {
  height: 5vh;

  display: flex;
  justify-content: center;
  align-items: center;
}

#errorMsg {
  display: flex;
  justify-content: center;
  align-items: center;

  color: red;
  font-weight: bolder;

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
  // flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 90%;
  // height: 10vh;

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


    background-color: rgb(30, 187, 16);
    color: white;
    transition: 0.3s;

    border-radius: 15px;

    font-size: 20px;

.ENTER:hover {
    cursor: pointer;
    background-color: lime;

    transition: 0.3s;
  }
}

.x {
  display: flex;
  justify-content: center;
  align-items: center;

  color: white;
  width: 2.5vw;
  height: 5vh;
  -top: 20px;

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