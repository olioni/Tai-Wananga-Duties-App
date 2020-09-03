<template>
    <div clas="main">
        <div class="title">
            <h1>TAIOHI DUTIES</h1>
        </div>
        <div class="index-buttons">
            <router-link :to="{name: 'DutyDashboard', params: {id: 'Kitchen'}}">
                <button>KITCHEN</button>
            </router-link>
            <router-link :to="{name: 'DutyDashboard', params: {id: 'Hokowhitu'}}">
                <button>HOKOWHITU</button>
            </router-link>
            <router-link :to="{name: 'DutyDashboard', params: {id: 'Ilab'}}">
                <button>ILAB</button>
            </router-link>
            <router-link :to="{name: 'DutyDashboard', params: {id: 'Ako'}}">
                <button>AKO</button>
            </router-link>
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
    justify-content: center;
    align-items: center; 
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
    /* width: 100%; */
    display: flex;
    justify-content: center;
    align-items: center;
}

h1 {
    border: solid 10px black;
    border-radius: 20px;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50vw;
    height: 12vh;
}

button {
    background-color: rgb(230, 230, 230);
    color: rgb(0, 0, 0);       
    border-radius: 15px;
    border: none;
    height: 15vh;
    width: 50vw;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 40px;
    margin: 5px;
    font-weight: bold;
}

button:hover {
    background-color: #4e4e4e;
    color: #ffffff;
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
