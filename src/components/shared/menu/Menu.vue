<template>
    <ul>
      <li v-for="rota in rotas">
        <router-link :to="rota.path ? rota.path : '/'">
          {{rota.titulo}}        
        </router-link>
      </li>
    </ul> 
</template>
<script>
    export default {
        props: {
            //Configurando uma prop ao pé da letra
            rotas: {
                type: Array,
                required: true
            }
        }
    }
</script>
<style>

</style>
