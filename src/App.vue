<template>
  <h1 class="title">ALPACA GENERATOR</h1>
  <img :src="'/src/alpaca/backgrounds/' + alpaca.background  + '.png'" />
  <img :src="'/src/alpaca/ears/' + alpaca.ears + '.png'" />
  <img :src="'/src/alpaca/leg/' + alpaca.leg + '.png'" />
  <img :src="'/src/alpaca/neck/' + alpaca.neck + '.png'" />
  <img :src="'/src/alpaca/accessories/' + alpaca.accessories + '.png'" />
  <img src="/src/alpaca/nose.png" />
  <img :src="'/src/alpaca/mouth/' + alpaca.mouth + '.png'" />
  <img :src="'/src/alpaca/hair/' + alpaca.hair + '.png'" />
  <img :src="'/src/alpaca/eyes/' + alpaca.eyes + '.png'" />
  <div class="access">
    <accessorize @getInfo="receiveType"/>
  </div>
  
</template>

<style scoped>
img {
  position: absolute;
  top: 15%;
  width: 400px;
  height: 500px;
}
.title {
  font-weight: bold;
  font-size: 50px; 
}
 .access{
  position: absolute;
  top: 20%; right: 20%;
}
</style>
<script setup>
  import accessorize from './component/accessorize.vue';
  var alpaca = {
    background: 'darkblue50',
    ears: 'default',
    leg: 'default',
    neck: 'default',
    accessories: 'earings',
    mouth: 'default',
    hair: 'default',
    eyes: 'default'
  }
  var element, type;
  function receiveType(data) {
    element = data.element.toLowerCase();
    type = data.x.toLowerCase();
  }
  if (element != null && type != null) {
    alpaca[element] = type;
  } else {
    console.log('No data');
  }
</script>
