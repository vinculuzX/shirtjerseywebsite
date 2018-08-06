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
      <div class="clear"/>
      <div class="content__partners">
        <blockTileComponent title="marcas"/>
      </div>
      <div class="clear"/>
      <div class="content__products">
        <div 
          v-for="product in products.data"
          :key="product.id" 
          class="products">
          <a :href="product.slug"><img 
            :src="getProductThumb(product)" 
            :alt="product.description"></a>
        </div>
      </div>
      <div class="clear"/>
    </div>
  </div> 
</template>

<script>
import BlockTileComponent  from '../components/blockTileComponent.vue';
import {mapState} from 'vuex';    
    export default {
        name:'IndexPage',
        components:{
          BlockTileComponent
        },
        computed:mapState({
          products: state => state.products.all
        }),
        created () {
          this.$store.dispatch('getProductHomePage')
        },
        methods:{
          getProductThumb: function (product) {
              var placeholder = 'https://placeholdit.imgix.net/~text?txtsize=69&txt=824%C3%971050&w=824&h=1050'
              try {
                var fileId = product.relationships.main_image.data.id
                var file = this.products.included.main_images.find(function (el) {
                  return fileId === el.id
                })
                return file.link.href || placeholder
              } catch (e) {
                return placeholder
              }
            }
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
      margin-left 10% 
      margin-right auto
    &__banners > img 
      float left
      margin-left 20px
    &__products
      margin-top 10px
    &__products > .products
      float left
      padding 0px 70px
      margin 0px 30px
  .clear
    clear left    
</style>
