<template>
  <div class="blocktile">
    <h2 class="blocktile__title">{{ title }}</h2>
    <div class="blocktile__el">
      <img 
        :src="image" 
        :alt="alt"
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
    },
    image: {
      type: String,
      required: false,
      default:""
    },
    alt: {
      type: String,
      required: false,
      default:""
    }
  }
};
</script>

<style lang="stylus" scoped>
  .blocktile
    margin-top 30px
    padding  10px 15px
    &__title
      font-family Open Sans
      font-size 36px
      color #111111
    &__el
      margin 15px
    &__el  > img
      float left
      padding 30px 66px   
</style>