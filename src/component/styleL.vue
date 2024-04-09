<template>
    <h2>STYLE</h2>
    <p>{{ element }}</p>
    <p>{{ src }}</p>
</template>
<script setup>
    const props = defineProps(['element', 'src']);
</script>
