<template>
  <div id="app">
    <header>
      <nav-component 
        :logo-image="image.logo" 
        :logo-alt="alt" 
      />
    </header>
    <main>
      <router-view/>
    </main>
  </div>
</template>
<script>
  import NavComponent  from './components/navComponent.vue';

  const logo = "../assets/images/logo.png";
  const alt = "teste"
  export default {
    name: "App",
    components:{NavComponent},
     data: () => ({
       image:{logo,alt}
    })
  } 
</script>
<style lang="stylus" src="./assets/styles/main.styl"></style>