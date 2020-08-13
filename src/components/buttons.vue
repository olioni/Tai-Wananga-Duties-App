<template>
    <div clas="main">
        <div class="title">
            <h1>TAIOHI DUTIES</h1>
        </div>
        <div class="index-buttons">
            <router-link to="/kitchen">
                <button>KITCHEN</button>
            </router-link>
            <button>HOKOWHITU</button>
            <button>ILAB</button>
            <button>AKO</button>
        </div>
    </div>
</template>

<script>
export default {
  name: 'indexButtons',
  props: {
    msg: String
  }
}
</script>

<style scoped>
* {
    margin: 0;
    display: flex;
    flex-direction: column;
}

.index-buttons {
    height: 70vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.title {
    font-size: 40px;
    bottom: 0;
    width: 100%;
}

h1 {
    border: solid 2px black;
    border-radius: 20px;
}

button {
    background-color: grey;
    color: white;       
    border-radius: 15px;
    border: none;
    height: 15vh;
    width: 50vw;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 40px;
    margin: 5px;
}

button:hover {
    background-color: #e3e3e3;
    color: #242424;
    cursor: pointer;
    transition: 0.3s;
}

.main {
    margin: 0;
}

a {
    text-decoration: none;
}
</style>
