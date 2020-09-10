<template>
    <div class="popupImg">
        <img class="profilePic" :src="require('../assets/taiohi-photos/' + name +'.png' )" @click="saveData()"/>
    </div>
</template>

<script>
import firebase from "firebase";
import { db } from './firebase'

// import { studentsDb } from "./firebaseInit";

export default {
    name: 'popupPhotos',
    props: ['name', 'dutyType', 'dutyArea'],
    data() {
        return {
            houseOnKitchen: 'nui',
            selectedTaiohi: ''
        }
    },
    mounted() {
        
    },
    methods: {
        saveData() {

            let taiohiOnDuty = {}

            taiohiOnDuty[this.dutyType] = this.name

            console.log(this.name + " is in " + this.dutyArea + ' on ' + this.dutyType)
            // this.selectedTaiohi = this.name
            // this.$emit("saveObj", this.selectedTaiohi)

            db.collection("duties").doc(this.dutyArea).update(taiohiOnDuty)

        }

    }
}
</script>

<style scoped>
* {
    margin: 0;
}

.profilePic {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background-color: rgb(145, 145, 145);
    margin-right: 5px;
    margin-left: 5px;
    margin-top: 5px;
    margin-bottom: 5px;
}

img:hover {
    border-radius: 50%;
    -webkit-box-shadow: 0px 0px 30px 0px rgb(255, 255, 255);
    -moz-box-shadow: 0px 0px 30px 0px rgba(255, 255, 255);
    box-shadow: 0px 0px 30px 0px rgba(255, 255, 255);
    cursor: pointer;
    transition: 0.3s;
}

.popupImg {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}

#name {
    color: white;
}
</style>
