<template>
    <div class="main">
        <h1>USELESS BUTTON</h1>
        <button>PRESS ME</button>
    </div>
</template>

<script>
export default {
  name: 'componenttest',
  props: {
    msg: String
  }
}
</script>

<style scoped>
    button {
        background-color: red;
        color: white;
        border-radius: 50%;
        border: none;
        height: 26vh;
        width: 20vw;
    }

    button:hover {
        background-color: pink;
        color: red;
        transition: 0.3s;
        cursor: pointer;
    }
</style>
