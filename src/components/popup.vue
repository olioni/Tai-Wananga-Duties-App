<template>
    <div class="main">
        <h1 class="x" @click="closePopup()">X</h1>


    </div>
</template>

<script>
export default {
  name: 'popup',
  props: {
    msg: String
  },
  data() {
      return {
          tainuiPhotos: {
              
          }
      }
  },
  methods: {
    closePopup() {
        console.log('closing now...')
        this.$emit('xClicked')
    }
  }
}
</script>

<style scoped>
.main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgb(61, 61, 61);
    width: 70%;
    height: 70%;
    border-radius: 15px;

    position:relative;
    height:700px;
    top: 50%;
    left: 15%;
    margin-top: -670px;
}

.x {
    color: white;
}

.x:hover {
    color: red;
    cursor: pointer;
    transition: 0.3s;
}
</style>