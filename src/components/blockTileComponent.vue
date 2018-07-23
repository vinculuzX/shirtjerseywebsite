<template>
  <div class="blocktile">
    <h2 class="blocktile__title">{{ title }}</h2>
    <div class="blocktile__el">
      <img 
        src="assets/images/image.png"
        alt="nike partner"
      >
      <img 
        src="assets/images/1280px-Adidas_Logo.png"
        alt="adidas partner"
      >
      <img 
        src="assets/images/Reebok-Logo-PNG-Image.png"
        alt="rebook partner"
      >
      <img 
        src="assets/images/Umbro_logo.png"
        alt="umbro partner"
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "BlockTileComponent",
  props: {
    title: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="stylus" scoped>
  .blocktile
    position relative
    margin-top 30px
    padding  10px 15px
    &__title
      font-family Open Sans
      font-size 36px
      color #111111
      text-align center
    &__el
      margin-left 10%
      margin-right 10%
    &__el  > img
      float left
      padding 42px 61px
      margin 0px 30px   
</style>