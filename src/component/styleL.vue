<template>
    <h2>STYLE</h2>
    <div class="father">
        <div v-for="(x, index) in dict[element]" :key="index">
            <div @click="addClass(index)" :id="index" class="prop common d1">{{ x }}</div>
        </div>
    </div>
    
</template>
<script setup>
    const props = defineProps(['element']);
    const dict = {
        'Hair': ['Default', 'Bang', 'Curls', 'Elegant', 'Quiff', 'Short'],
        'Ears': ['Default', 'Tilt-backward', 'Tilt-forward'],
        'Accessories': ['Earings', 'Glasses', 'Flower', 'Headphong'],
        'Background': ['blue50', 'blue60', 'blue70', 
                       'darkblue30', 'darkblue50', 'darkblue70', 
                       'green50', 'green60', 'green70', 
                       'grey40', 'grey70', 'grey80', 
                       'red50', 'red60', 'red70', 
                       'yellow50', 'yellow60', 'yellow70'],
        'Eyes': ['Default', 'Angry', 'Naughty', 'Panda', 'Smart', 'Star'],
        'Leg': ['Default', 'Bubble-tea', 'Cookie', 'Game-console', 'Tilt-backward', 'Tilt-forward'],
        'Mouth': ['Default', 'Eating', 'Laugh', 'Tongue','Astonished'],
        'Neck': ['Default', 'Bend-backward', 'Bend-forward', 'Thick']
    }

    function addClass(index) {
        const current = document.querySelectorAll('.prop');
        console.log(current);
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
