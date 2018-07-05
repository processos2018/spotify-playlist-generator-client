<template lang="pug">
div
  slot
</template>

<script>
export default {
  data() {
    return {
      active: '',
    }
  },
  mounted() {
    this.$on('changeActive', this.setActiveCard)
  },
  methods: {
    setActiveCard(icon) {
      this.active = icon
      this.$slots.default.forEach( el => el.componentInstance.isActive = false )
      let active = this.$slots.default.find( el => el.componentInstance.icon == icon )
      active.componentInstance.isActive = true
    },
  }
}
</script>

<style lang="scss">
</style>
