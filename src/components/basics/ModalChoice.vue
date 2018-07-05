<template lang="pug">
.choice-modal
  .modal
    button.close-button(@click="closeModal") x
    .content
      h1 Digite o nome d{{text}}:
      input
      button Adicionar
</template>

<script>
export default {
  props: ['option'],
  methods: {
    closeModal() {
      this.$parent.modalOption = ''
      this.$parent.isModalOpen = false
    }
  },
  computed: {
    text() {
      return this.option == 'artist'? 'o artista' : 'a música'
    },
  },
}
</script>

<style lang="scss">
.choice-modal {
  position: fixed;
  background-color: rgba(0,0,0,0.5);
  width: 100%;
  height:  100%;
  top: 0;
  left: 0;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  .modal {
    position: relative;
    background-color: white;
    border-radius: 5px;
    width: 80%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    > .content {
      text-align: center;
      h1 {
        margin-top: 0;
      }
      input {
        width: 100%;
      }
      button {
        margin-top: 15px;
        border: unset;
        border-radius: 5px;
        padding: 5px 10px;
        cursor: pointer;
      }
    }
  }
  .close-button {
    position: absolute;
    right: 5px;
    top: 5px;
    background: unset;
    border: unset;
    cursor: pointer;
    font-size: 20px;
  }

}
</style>
