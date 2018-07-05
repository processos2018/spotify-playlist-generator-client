<template lang="pug">
  #app
    router-view
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
#app {
  height: 100vh;
  background-image: linear-gradient( to bottom , rgb(0,0,0), rgb(40,40,40) );
}

a {
  text-decoration: none;
}
* {
  box-sizing: border-box;
}
</style>
