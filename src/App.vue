<template>
<!-- template ou html, parte visual do componente -->
  <div class="corpo">
    <meu-menu :rotas="routes"></meu-menu>
    <!-- aplicar estilo ao trocar de componente -->
    <transition name="pagina">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import {routes} from './routes';
import Menu from './components/shared/menu/Menu.vue';

//dados do componente
export default {
  components: {
    'meu-menu': Menu
  },

  data(){
    return {
      routes
    }
  }
}
</script>

<style>
/* Estilo do componente */
.corpo {
  font-family: Arial, Helvetica, sans-serif;
  width: 90%;
  margin: 0 auto;
}

.pagina-enter, .pagina-leave-active{
    opacity: 0;
}

.pagina-enter-active, .pagina-leave-active{
    transition: opacity .4s;
}
</style>