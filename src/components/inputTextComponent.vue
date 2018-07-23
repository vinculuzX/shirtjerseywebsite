<template>
  <div>
    <input type="text"><input 
      :value="val" 
      type="button">
  </div>
</template>

<script>
export default {
    name:"InputTextComponent",
    props:{
        val:{
            type:String,
            required:false,
            default:"button"
        }
    }
}
</script>

<style lang="stylus" scoped>
    input[type="text"]
      width 15vw
      height 41px
      padding-left 1vw
      border none
    input[type='button'] 
      background #00C854
      border none
      padding 14px 12px
      color #FFFFFF
      cursor pointer
</style>
