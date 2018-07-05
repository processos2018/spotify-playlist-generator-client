<template lang="pug">
.card(:class="{active:isActive}")
  .image(@click="handleClick")
    i.fas(v-show="isActive", class="fa-pencil-alt", @click="toggleMenu")
    i.fas(:class="['fa-'+icon]").icon
    .title {{title}}
  .details(v-show="isSelected && isActive")
    .subtitle Baseie sua playlist em artistas ou músicas
    button.option(@click="chooseSong") #[i.fas(class="fa-plus")] Escolher música
    button.option(@click="chooseArtist") #[i.fas(class="fa-plus")] Escolher artista
  modal-choice(v-if="isModalOpen", :option="modalOption")
</template>

<script>
import ModalChoice from 'BASICS/ModalChoice'
export default {
  props: ['title', 'icon'],
  components: {
    ModalChoice
  },
  data() {
    return {
      isSelected: false,
      isActive: false,
      isModalOpen: false,
      modalOption: '',
    }
  },
  methods: {
    handleClick() {
      this.$parent.$emit('changeActive', this.icon)
    },
    toggleMenu() {
      this.isSelected = !this.isSelected
    },
    chooseSong() {
      this.modalOption = 'song'
      this.isModalOpen = true
    },
    chooseArtist() {
      this.modalOption = 'artist'
      this.isModalOpen = true
    },
  },
}
</script>

<style lang="scss">
.card {
  margin: 10px 15px;
  &.active {
    > .image {
      background-image: linear-gradient( to bottom right, blue, rgb(10,190,10) );
      > .icon {
        font-size: 80px;
        transform: rotate(-5deg);
      }
      > .title {
        font-size: 20px;
      }
    }
  }
  > .image {
    position: relative;
    height: 180px;
    flex-grow: 1;
    flex-shrink: 0;
    transition: all ease 1s;
    background-image: linear-gradient( to bottom right, rgb(10,190,10), blue );
    border-radius: 3px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .icon {
      transition: all ease-in-out .1s;
      color: white;
      font-size: 60px;
      margin-bottom: 15px;
    }
    .fa-pencil-alt {
      position: absolute;
      top: 10px;
      right: 10px;
      font-size: 22px;
      color: white;
      cursor: pointer;
    }
    .title {
      color: white;
      font-weight: bold;
      font-size: 16px;
    }
  }
  > .details {
    height: auto;
    flex-grow: 1;
    flex-shrink: 0;
    background-color: lightgrey;
    border-radius: 3px;
    margin-top: -3px;
    color: black;
    padding: 20px;
    > button.option {
      background: unset;
      border: unset;
      cursor: pointer;
    }
  }
}
</style>
