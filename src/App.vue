<template>
  <div id="app">
    <header>
      <nav-component 
        :logo-image="image.logo" 
        :logo-alt="image.alt" 
      />
    </header>
    <div><router-link to="/products">teste</router-link></div>
    <main>
      <router-view/>
    </main>
    <footer>
      <footer-component/>
    </footer>
  </div>
</template>
<script>
  import NavComponent  from './components/navComponent.vue';
  import FooterComponent from './components/footerComponent.vue';

  const logo = "../assets/images/logo.png";
  const alt = "teste"
  export default {
    name: "App",
    components:{NavComponent,FooterComponent},
     data: () => ({
       image:{logo,alt}
    })
  } 
</script>
<style lang="stylus" src="./assets/styles/main.styl"></style>