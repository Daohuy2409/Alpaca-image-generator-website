<template>
    <div class="access">
        <h2>ACCESSORIZE THE ALPACA'S</h2>
        <div class="father">
            <div v-for="(x, index) in alpaca" :key="index">
                <div   @click="select(index)"  :class="{'common': true, 'd1':!x.selected, 'sel': x.selected}">{{ x.name }}</div>
            </div>
        </div>
    </div>
    <div v-for="(x, index) in alpaca" :key="index">
        <styleL
            v-if="x.selected"
            :element="x.name"
            :data="data"
            @giveInfo="receiveType"
            @random="random"
        />
    </div>
</template>

<script setup>
import { ref } from 'vue';
var alpaca = ref([
    {name: 'Hair', selected: true},
    {name: 'Ears', selected: false},
    {name: 'Eyes', selected: false},
    {name: 'Mouth', selected: false},
    {name: 'Neck', selected: false},
    {name: 'Leg', selected: false},
    {name: 'Accessories', selected: false},
    {name: 'Background', selected: false},
    ]);
const props = defineProps(['data']);
function select (index) {
    alpaca.value.forEach((x, i) => {
        if (i !== index) {
            x.selected = false;
        }
    });
    alpaca.value[index].selected = true;
}
function receiveType(data) {
    this.$emit('getInfo', data);
}
function random(data) {
    this.$emit('random', data);
}
</script>
