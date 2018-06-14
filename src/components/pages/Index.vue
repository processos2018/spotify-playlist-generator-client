<template lang="pug">
section#home
  h1 Spotify Playlist Generator
  router-link(:to="{ name: 'playlists' }") /playlists
</template>

<script>
export default {
  name: 'Index',
}
</script>

<style lang="scss">
</style>
