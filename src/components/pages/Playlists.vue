<template lang="pug">
section#playlists
  h1 Geradores de playlists pré definidos
  .playlists
    .playlist
      router-link(:to="{ name: 'playlist', params: { name: 'playlist-classical' }}")
        .image Clássica
    .playlist
      router-link(:to="{ name: 'playlist', params: { name: 'playlist-pop' }}")
        .image Pop
    .playlist
      router-link(:to="{ name: 'playlist', params: { name: 'playlist-punk-rock' }}")
        .image Punk Rock
  h1 Ou se preferir gere uma playlist com seus próprios parametros >#[router-link(:to="{ name: 'customizer'}") Aqui]<.
</template>

<script>
export default {}
</script>

<style lang="scss">
#playlists {
  padding: 60px 20px;
  > .playlists {
    display: flex;
    justify-content: center;
    margin-top: 60px;
    > .playlist {
      margin: 0 10px;
      margin-bottom: 10px;
      .image {
        background-color: white;
        width: 200px;
        height: 200px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: black;
        font-weight: bold;
        &:hover {
          opacity: 0.8;
        }
      }
    }
  }
}
</style>
