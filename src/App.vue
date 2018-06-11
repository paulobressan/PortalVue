<template>
<!-- template ou html, parte visual do componente -->
  <div class="corpo">
    <h1 class="centralizado">{{titulo}}</h1>
    <ul class="lista-produtos">
      <li class="lista-produtos-item" v-for="produto in produtos">
        <meu-painel :titulo="produto.nome">
          <figure>             
            <img :src="produto.url" :alt="produto.nome">
          </figure>
        </meu-painel>      
      </li>
    </ul>
  </div>
</template>

<script>

//importando outros componentes
import Painel from './components/shared/painel/Painel.vue';


//dados do componente
export default {
  //Propriedade components para usar outros componentes, desde que estaja importado.
  components: {
    'meu-painel': Painel
  },
  name: "app",
  data() {
    //dados ou objeto do componente.
    return {
      titulo: "Produtos",
      produtos: []
    };
  },
  created() {
    this.$http
      .get("http://localhost:5000/api/product")
      .then(res => res.json())
      .then(produtos => (this.produtos = produtos));
  }
};
</script>

<style>
/* Estilo do componente */
img {
  width: 100%;
}
.corpo {
  font-family: Arial, Helvetica, sans-serif;
  width: 90%;
  margin: 0 auto;
}

.centralizado {
  text-align: center;
}

.lista-produtos {
  list-style: none;
}

.lista-produtos-item {
  display: inline-block;
}
</style>
