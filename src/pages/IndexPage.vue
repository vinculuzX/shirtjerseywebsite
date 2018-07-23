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
          v-for="product in products" 
          :key="product.id" 
          class="products">
          <a :href="product.id"><img 
            :src="product.image" 
            :alt="product.description"></a>
        </div>
      </div>
      <div class="clear"/>
    </div>
  </div> 
</template>

<script>
import BlockTileComponent  from '../components/blockTileComponent.vue'
    export default {
        name:'IndexPage',
        components:{
          BlockTileComponent
        },
        data:()=>({
          products:[
            {
              id:"1",
              image:"assets/images/product1.png",
              description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce libero ex"
            },
            {
              id:"2",
              image:"assets/images/product2.png",
              description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce libero ex"
            },
            {
              id:"3",
              image:"assets/images/product3.png",
              description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce libero ex"
            },
            {
              id:"4",
              image:"assets/images/product4.png",
              description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce libero ex"
            }
          ]
        })
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
