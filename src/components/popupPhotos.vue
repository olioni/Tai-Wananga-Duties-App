<template>
    <div class="popupImg">
        <img class="profilePic" :src="require('../assets/taiohi-photos/' + name +'.png' )" @click="saveData()"/>
    </div>
</template>

<script>
export default {
    name: 'popupPhotos',
    props: ['name'],
    data() {
        return {
            houseOnKitchen: 'nui',
            dutiesObj: {
                kitchen: {
                    bins: ''
                }
            }
        }
    },
    mounted() {
        console.log(this.name)
    },
    methods: {
        saveData() {
            this.name
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
