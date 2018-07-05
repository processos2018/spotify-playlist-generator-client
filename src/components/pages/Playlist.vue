<template lang="pug">
section#playlist
  router-link(:to="{ name: 'playlists' }") Voltar
  .title
    h1 Playlist {{playlist.name}} gerada com sucesso
  .playlist
    .header
      .table Faixa
      .table Artista
      .table Duração
    .tracks(v-if="playlist")
      .track(v-for="item in playlist.tracks.items")
        .name {{item.track.name}}
        .artist #[template(v-for="(artist, i) in item.track.artists") {{artist.name}}#[template(v-if="i != item.track.artists.length - 1") , ]]
        .duration {{duration(item.track.duration_ms)}}
  .options
    .option
      .text Deseja salvar esta playlist no seu Spotify?
      .buttons
        button Sim
        button Não
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      playlist: '',
    }
  },
  mounted() {
    let name = this.$route.params.name
    let url = 'http://fabrica-de-playlists-service.herokuapp.com/recommendation?'
    let params = "genre=classical&name=testando-classica"
    axios.get(url+params)
      .then( response => response.data )
      .then( playlist => this.playlist = playlist )
      .then( playlist => console.log(playlist))
      .catch( err => console.log('playlist não encontrada') )
  },
  methods:  {
    duration(ms) {
      let milliseconds = parseInt((ms%1000)/100)
      let seconds = parseInt((ms/1000)%60)
      let minutes = parseInt((ms/(1000*60))%60)
      let hours = parseInt((ms/(1000*60*60))%24);
      hours = (hours < 10) ? "0" + hours : hours;
      minutes = (minutes < 10) ? "0" + minutes : minutes;
      seconds = (seconds < 10) ? "0" + seconds : seconds;
      return minutes + ":" + seconds;
    },
  }
}
</script>

<style lang="scss">
#playlist {
  padding: 60px 20px;
  .title {
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
  }
  > .playlist {
    margin-bottom: 20px;
    > .header {
      display: flex;
      > .table {
        font-weight: bold;
        font-size: 16px;
        flex: 1 0 0;
      }
    }
    > .tracks {
      > .track {
        padding: 10px 0;
        border-bottom: 1px solid #767777;

        display: flex;
        > .name, > .artist, .duration {
          flex: 1 0 0;
        }
        > .duration {
          text-align: right;
        }
      }
    }
  }
  > .options {
    display: flex;
    justify-content: center;
    > .option {
      .buttons {
        display: flex;
        justify-content: center;
      }
    }
  }
}
</style>
