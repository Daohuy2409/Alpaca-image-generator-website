<template>
  <h1 class="title">ALPACA GENERATOR</h1>
  <div id="printIt">
    <img :src="`/src/alpaca/backgrounds/${alpaca.background}.png`" />
    <img :src="'/src/alpaca/ears/' + alpaca.ears + '.png'" />
    <img :src="'/src/alpaca/leg/' + alpaca.leg + '.png'" />
    <img :src="'/src/alpaca/neck/' + alpaca.neck + '.png'" />
    <img :src="'/src/alpaca/accessories/' + alpaca.accessories + '.png'" />
    <img src="/src/alpaca/nose.png" />
    <img :src="'/src/alpaca/mouth/' + alpaca.mouth + '.png'" />
    <img :src="'/src/alpaca/hair/' + alpaca.hair + '.png'" />
    <img :src="'/src/alpaca/eyes/' + alpaca.eyes + '.png'" />
  </div>
  <button @click.prevent="printThis" class="download">Download</button>
  
    <accessorize 
    :data="alpaca"
    @getInfo="receiveType"
    @random="random"
    />
  
  
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
  import { ref } from 'vue';
  import html2canvas from "html2canvas";
  var alpaca = ref({
    background: 'darkblue50',
    ears: 'default',
    leg: 'default',
    neck: 'default',
    accessories: 'earings',
    mouth: 'default',
    hair: 'default',
    eyes: 'default'
  });

  var element, type;
  function receiveType(data) {
    element = data.element.toLowerCase();
    type = data.x.toLowerCase();
    alpaca.value[element] = type;
  }
  //random pic
  function random(data) {
    for (const key in data) {
      alpaca.value[key.toLowerCase()] = data[key].toLowerCase();
    }
  }

  //download
  const printThis = async () => {
    console.log("printing..");
    const el = document.getElementById("printIt");

    const options = {
      type: "dataURL",
    };
    const printCanvas = await html2canvas(el, options);

    const link = document.createElement("a");
    link.setAttribute("download", "download.png");
    link.setAttribute(
      "href",
      printCanvas
        .toDataURL("image/png")
        .replace("image/png", "image/octet-stream")
    );
    link.click();

    console.log("done");
    }
</script>
