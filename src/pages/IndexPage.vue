<template lang="html">
  <div id="index">
    <div class="content">
      <div class="content__highlight">
        25% off em compras acima de R$100!!! Use o cupom: 25GL  <a> Detalhes > </a>
      </div>
      <div class="content__banners">
        <img 
          src="assets/images/1.png" 
          alt="banner1">
        <img 
          src="assets/images/2.png" 
          alt="banner2">
      </div>
      <div class="content__partners">
        <blockTileComponent title="marcas" />
      </div>
    </div>
  </div> 
</template>

<script>
import BlockTileComponent  from '../components/blockTileComponent.vue'
    export default {
        name:'Index',
        components:{
          BlockTileComponent
        }
    }
</script>

<style  lang="stylus" scoped>
  brandgreen =  #00c854
  .content
    &__highlight
      width 100%
      text-align center
      margin:20px 0px
    &__highlight > a
      color brandgreen
    &__banners 
      height 10vh
      margin-left 10% 
      margin-right auto
    &__banners > img 
      float left
      margin-left 20px
</style>
