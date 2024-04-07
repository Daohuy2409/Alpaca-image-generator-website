<script>
export default {
  data() {
    return {
      check: false
    }
  },
  computed: {
    checkBtn() {
      return this.check ? 'Uncheck' : 'Check'
    }
  }
}
</script>

<template>
  <div>
    <h1>Hehe</h1>
    <button @click="this.check = !this.check"> {{ checkBtn }}</button>
    <transition >
      <p v-if="check">Checked popsjsp</p>
    </transition>
  </div>
  
</template>

<style scoped>
.p {
  transition: opacity 2s;
}
.v-leave-from {
  opacity: 1;
}
.v-leave-to {
  opacity: 0;
}
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
