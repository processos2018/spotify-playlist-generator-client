<template lang="pug">
#test
  .header
    .title: h3 Eu estou me sentindo...
    .title: h3 Eu vou...
  .container
    group.left
      card(title="Feliz", icon="smile")
      card(title="Relaxado", icon="couch")
      card(title="Chateado", icon="angry")
      card(title="Esportista", icon="basketball-ball")
      card(title="Doente", icon="briefcase-medical")
    group.right
      card(title="Estudar", icon="book")
      card(title="Malhar", icon="dumbbell")
      card(title="Viajar", icon="car")
      card(title="Jogar", icon="chess")
      card(title="Descansar", icon="couch")
  .footer
    button(@click="navigate") Gerar playlist
</template>

<script>
import Card from 'BASICS/Card'
import Group from 'BASICS/Group'
export default {
  components: {
    Card,
    Group,
  },
  methods: {
    navigate() {
      this.$router.push({name:'playlist', params: {}})
    }
  },
}
</script>

<style lang="scss">
#test {
  display: block;
  height: 100%;
  .header {
    height: 10%;
    background-color: $black;
    display: flex;
    align-items: center;
    > .title {
      height: 100%;
      border-bottom: 2px solid white;
      flex-grow: 1;
      flex-basis: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      > h3 {
        color: $white;
        text-align: center;
        margin: 0;
      }
    }
  }
  .container {
    width: 100%;
    height: 80%;
    display: inline-flex;
    .left, .right {
      width: 50%;
      display: flex;
      flex-direction: column;
      overflow-y: scroll;
      flex-shrink: 0;
      &::-webkit-scrollbar {
        background-color: $yellow;
        width: 0;
      }
    }
    .right {
      // background-color: $cor-secundaria;
    }
    .left {
      // background-color: green;
    }
  }
  .footer {
    height: 10%;
    background-color: $black;
    display: flex;
    justify-content: center;
    button {
      width: 80%;
      margin: 10px 0;
      border: unset;
      border-radius: 25px;
      background-color: rgb(10,230,10);

      color: $black;
      font-size: 16px;
      font-weight: bold;
    }
  }
}
</style>
