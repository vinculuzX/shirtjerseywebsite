<template>
  <div class="product">
    <span class="product__tag" >New</span>
    <figure class="product__image">
      <img 
        :src="product.image" 
        :alt="product.title">
    </figure>
    <div class="product__title">
      {{ product.title }}
    </div>
    <div class="product__price">
      <span> {{ product.currency }} </span>{{ product.price }}
    </div>
  </div>
</template>
<script>
export default {
    name:"BlockProductComponent",
    props:{
      product:{
        type:Array,
        default:() => [{
            image:"assets/images/product1.png",
            title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce libero ex",
            currency:"R$",
            price:"300,00"
            }]
      }
    }
}
</script>

<style lang="stylus" scoped>
  brandgreen =  #00c854
  .product
    width 325px
    padding 5px 9px
    font-family 'Open Sans', 'serif'
    font-style normal
    cursor pointer
    &__tag
      padding 3px 12px
      background-color brandgreen
      text-transform uppercase
      font-size 10px
      color #FFFFFF
    &__image 
      margin 3px 5px
    &__image > img 
      width 300px
      height 300px
    &__title
      font-weight bold
      font-size 16px
      padding 5px 0px
    &__price
      font-weight bold
      font-size 14px
    &__price > span 
      font-weight bold
      color brandgreen
      font-size 8px  

</style>
