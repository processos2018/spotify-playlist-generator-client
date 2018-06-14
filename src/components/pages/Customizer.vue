<template lang="pug">
section#customizer
  h1 Escolha os parâmetros desejados para gerar sua playlist
  form(@submit.prevent="redirect")
    .input
      p acousticness
      input(type="range")#acousticness
    .input
      p danceability
      input(type="range")#danceability
    .input
      p energy
      input(type="range")#energy
    .input
      p instrumentalness
      input(type="range")#instrumentalness
    .input
      p liveness
      input(type="range")#liveness
    .input
      p loudness
      input(type="range")#loudness
    .input
      p speechiness
      input(type="range")#speechiness
    .input
      p tempo
      input(type="range")#tempo
    .input
      p valence
      input(type="range")#valence
    .buttons
      button(@click="redirect") Voltar
      button(type="reset") Resetar
      button(type="submit") Gerar
</template>

<script>
export default {
  methods: {
    redirect() {
      this.$router.push('playlists')
    }
  }
}
</script>

<style lang="scss">
#customizer {
  padding: 40px 60px;
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    .input {
      width: 80%;
      > input {
        width: 100%;
      }
    }
    .buttons {
      display: flex;
      margin-top: 10px;
    }
  }
}
</style>
