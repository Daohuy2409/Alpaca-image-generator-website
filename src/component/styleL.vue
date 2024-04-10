<template>
    <h2>STYLE</h2>
    <div class="father">
        <div v-for="(x, index) in dict[element]" :key="index">
            <div v-if="alpaca[element.toLowerCase()] === x.toLowerCase()" :id="index" class="prop common sel">{{ x }}</div>
            <div v-else @click="addClass(index); $parent.$emit('getInfo', {element, x})" :id="index" class="prop common d1">{{ x }}</div>
        </div>
    </div>
</template>
<script setup>
    const props = defineProps(['element', 'data']);
    const dict = {
        'Hair': ['Default', 'Bang', 'Curls', 'Elegant', 'Quiff', 'Short'],
        'Ears': ['Default', 'Tilt-backward', 'Tilt-forward'],
        'Accessories': ['Earings', 'Glasses', 'Flower', 'Headphong'],
        'Background': ['Blue50', 'Blue60', 'Blue70', 
                       'Darkblue30', 'Darkblue50', 'Darkblue70', 
                       'Green50', 'Green60', 'Green70', 
                       'Grey40', 'Grey70', 'Grey80', 
                       'Red50', 'Red60', 'Red70', 
                       'Yellow50', 'Yellow60', 'Yellow70'],
        'Eyes': ['Default', 'Angry', 'Naughty', 'Panda', 'Smart', 'Star'],
        'Leg': ['Default', 'Bubble-tea', 'Cookie', 'Game-console', 'Tilt-backward', 'Tilt-forward'],
        'Mouth': ['Default', 'Eating', 'Laugh', 'Tongue','Astonished'],
        'Neck': ['Default', 'Bend-backward', 'Bend-forward', 'Thick']
    }
    const alpaca = props.data;
    
    function addClass(index) {
        const current = document.querySelectorAll('.prop');
        current.forEach((x) => {
            if (x.classList.contains('sel')) {
                x.classList.remove('sel');
                x.classList.add('d1');
            }
        });
        var element = document.getElementById(index);
        element.className = element.className.replace('d1', 'sel');
    }
</script>
