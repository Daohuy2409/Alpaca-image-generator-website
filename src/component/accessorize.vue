<template>
    <h2>ACCESSORIZE THE ALPACA'S</h2>
    <div class="father">
        <div v-for="(x, index) in alpaca" :key="index">
            <div   @click="select(index)"  :class="{'common': true, 'd1':!x.selected, 'sel': x.selected}">{{ x.name }}</div>
        </div>
    </div>
</template>
<style scoped>
.father {
    width: 400px; 
    display: flex;
    flex-wrap: wrap;
}
.common {
    display: inline-block;
    height: 50px;
    padding: 0 30px 0 30px;
    margin: 0 10px 10px 0;
    border-radius: 100px;
    text-align: center;
    align-content: center;
}
.d1 {
    
    border: 1px solid #51bbfc;
    color: #51bbfc;
    background: #fff;
}
.d1:hover {
    border: 3px solid #6f8fc5;
    color: #6e9ae4;
    cursor: pointer;
}
.sel {
    background: #24509c;
    color: #fff;
}
</style>
<script setup>
import { ref } from 'vue';
var alpaca = ref([
    {name: 'Hair', selected: false},
    {name: 'Ears', selected: false},
    {name: 'Eyes', selected: false},
    {name: 'Mouth', selected: false},
    {name: 'Neck', selected: false},
    {name: 'Leg', selected: false},
    {name: 'Accessories', selected: false},
    {name: 'Background', selected: false},
    ]);
function select (index) {
    alpaca.value.forEach((x, i) => {
        if (i !== index) {
            x.selected = false;
        }
    });
    alpaca.value[index].selected = true;
    
    
}
</script>
