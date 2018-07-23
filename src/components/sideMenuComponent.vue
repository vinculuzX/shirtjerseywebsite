<template>
  <div class="menu">
    <div class="menu__title">
      {{ title }}
    </div>
    <div 
      v-for="item in items" 
      :key="item.id" 
      class="menu__links">
      {{ item.element }} <span> ({{ item.number }}) </span>
    </div>
    <br>
  </div>
</template>
<script>
export default {
    name:"SideMenuComponent",
    props:{
      items:{
        type:Array,
        default:() => [{id:"1",element:"Internacional",number:"636"}]
      },
      title:{
        type:String,
        default:"Categoria"
      }  
    },
    mounted() {
      var elements = document.getElementsByClassName("menu__links");
      elements[elements.length - 1].classList.add("menu__lastLink");
    },
}
</script>

<style lang="stylus" scoped>
  .menu
    font-family 'Open Sans', 'serif'
    font-size 18px
    width 15%
    margin 15px 7px
    div   
      border 1px solid #C4C4C4;
      box-sizing: border-box;
      padding 17px 22px
      cursor pointer 
    &__title  
      font-weight bold
      border-bottom none !important
    &__links
       border-bottom none !important
       span 
        font-size 10px
        color #C4C4C4
    &__lastLink
       border-bottom 1px solid #C4C4C4 !important

</style>

