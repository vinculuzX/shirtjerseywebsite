<template>
  <div class="navbar">
    <div class="navbar__brand">
      <img 
        :src="logoImage" 
        :alt="logoAlt">
    </div> 
    <div class="navbar__items">
      <div 
        v-for="nav in navs" 
        :key="nav.item">
        <a :href="nav.item">{{ nav.item }}<span> + </span> </a>
      </div>
    </div>
    <div class="navbar__search">
      <input type="text"><span><input type="button">
      <img src="assets/images/search.png"></span>
    </div>
    <div class="navbar__object">
      <img src="assets/images/cart.png">
      <img src="assets/images/user.png">
    </div>
  </div>
</template>

<script>
export default {
  name:"NavComponent",
  props:{
    logoImage:{
      type:String,
      required:true
    },
    logoAlt:{
      type:String,
      required:true
    },
  },  
  data:() => ({
    navs:[{
      item:"brasileiros",
    },{
      item:"Internacionais",
    },{
      item:"Seleções",
    },{
      item:"Especiais",
    }]
  }) 
}
</script>

<style scoped lang="stylus">
  brandgreen =  #00c854
  .navbar
    background-color #000000
    overflow hidden
    height 75px
    div 
      float left
      color #ffffff
      text-align center 
      font 14px/19px
      height 40px
      padding: 20px 0px
    &__brand
      margin-left 8vw
      margin-right 4vw
    &__brand > img 
      position relative
      top 10px    
    &__search
      margin-left 11vw
    &__search > input[type='text'] 
      position relative
      bottom 11px
      width 9vw
      height 38px
      padding-left 1vw
      border none   
    &__search > span
       cursor pointer   
    &__search > span > img 
      position relative
      right 14%
      bottom 5px
    &__search > span > input[type='button'] 
      background #00C854
      width 45px
      height 40px
      border none
      padding 5px 0px
    &__object
      position relative
      top 10px 
    &__object > img
      padding-left 2vw
      cursor pointer
    &__items > div > a
        position relative
        bottom 10px
        font-size 14px
        padding  31px 30px
        text-decoration none 
        font-family 'Open Sans', sans-serif
        color #ffffff
        text-transform uppercase
      &__items > div > a > span 
        color brandgreen;
        font-size 14px  
        
</style>