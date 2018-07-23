<template>
  <div class="footer">
    <div class="footer__subscribe">
      <input-text-component val="Inscreva-se"/>
    </div>
    <div class="footer__services">
      <div class="footer__information">
        <ul>
          <block-list-component 
            v-for="corp in corps" 
            :item="corp.list" 
            :key="corp.id"/>
        </ul>
      </div> 
      <div class="footer__information">
        <ul>
          <block-list-component 
            v-for="option in options" 
            :item="option.list" 
            :key="option.id"/>
        </ul>
      </div>
      <div class="footer__information">
        <ul>
          <block-list-component 
            v-for="info in infos" 
            :item="info.list" 
            :key="info.id"/>
        </ul>
      </div>  
      <div class="footer__information">
        <ul>
          <block-list-component 
            v-for="social in socials" 
            :item="social.list" 
            :key="social.id"/>
        </ul>
      </div>        
    </div>
    <span>Todos os direitos Reservados ShirtWebJersey 2018</span>
  </div>
</template>

<script>
import inputTextComponent from './inputTextComponent.vue'
import blockListComponent from './blockListComponent.vue'
export default {
    name:"FooterComponent",
    components:{inputTextComponent,blockListComponent},
    data:()=>({
      corps:[
       {
         id:"1",
         list:"home"
       },
       {
         id:"2", 
         list:"marcas"
       },
       {
         id:"3",
         list:"privacidade"
       },
       {
         id:"4",
         list:"termo de uso"
       }
      ],
      options:[
       {
         id:"1",
         list:"Brasileiros"
       },
       {
         id:"2", 
         list:"Internacionais"
       },
       {
         id:"3",
         list:"seleção"
       },
       {
         id:"4",
         list:"especial"
       }
      ],
      infos:[
       {
         id:"1",
         list:"Contato"
       },
       {
         id:"2", 
         list:"faq"
       },
       {
         id:"3",
         list:"entregas"
       },
       {
         id:"4",
         list:"devoluções"
       }
      ],
      socials:[
       {
         id:"1",
         list:"redes sociais"
       },
      ]
    })
}
</script>

<style lang="stylus" scoped>
  .footer
    &__subscribe
      margin 0 25vw
    &__services
      margin 15px 10vw
      display flex  
    &__information
      width 15%
      margin 15px 2vw
</style>
