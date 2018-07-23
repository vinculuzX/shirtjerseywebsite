<template>
  <li>
    <a :href="item">{{ item }}</a>
  </li>
</template>

<script>
export default {
    name:"BlockListComponent",
    props:{
        item:{
            type:String,
            required:false,
            default:""
        }
    }
}
</script>

<style lang="stylus" scoped>
    li
     list-style none 
     padding 5px 9px
    li > a
     text-decoration none 
     color #FFFFFF
     text-transform uppercase    
</style>

