<template lang="pug">
section#home
  h1.a Descrição e mensagem do produto
  p.b Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.
  router-link(:to="{ name: 'playlists' }") /playlists
</template>

<script>
export default {
  name: 'Index',
}
</script>

<style lang="scss">
h1.a, p.b {
  position: fixed;
  margin-left: 300px;
  margin-top: 200px
}
p.b {
  margin-top: 230px;
}
</style>
