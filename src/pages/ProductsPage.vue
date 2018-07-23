<template>
  <div id="products">
    <div class="leftside">
      <sideMenuComponent/>
    </div>
    <div class="products__content">
      <blockProductComponent/>
    </div>
  </div>
</template>

<script>
import blockProductComponent from '../components/blockProductComponent.vue';
import sideMenuComponent from '../components/sideMenuComponent.vue';
export default {
    name:"ProductsPage",
    components:{
      blockProductComponent,
      sideMenuComponent
    }
}
</script>

<style lang="stylus" scoped>

</style>
