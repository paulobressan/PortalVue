<template>
<!-- template ou html, parte visual do componente -->
  <div>
    <h1 class="centralizado">{{titulo}}</h1>
    
    <!-- Input para realizar filtro. Nele contem o evento v-on:input que atualiza a propriedade filtro. -->
    <input type="search" class="filtro" @input="filtro = $event.target.value" placeholder="filtre por parte do titulo...">
    <ul class="lista-produtos">
      <li class="lista-produtos-item" v-for="produto in fotosComFiltro">
        <meu-painel :titulo="produto.nome">
          <figure> 
            <imagem-responsiva v-meu-transform.animacao="15" :url="produto.url" :titulo="produto.nome"></imagem-responsiva>       
          </figure>
          <meu-botao 
            tipo="button" 
            rotulo="Remover" 
            :confirmacao="true" 
            estilo="perigo"
            @botaoAtivado="remove(produto)"></meu-botao>
        </meu-painel>      
      </li>
    </ul>
  </div>
</template>

<script>
//importando outros componentes
import Painel from "../shared/painel/Painel.vue";
import ImagemResponsiva from "../shared/imagem-responsiva/ImagemResponsiva.vue";
import Botao from "../shared/botao/botao.vue";

//dados do componente
export default {
  //Propriedade components para usar outros componentes, desde que estaja importado.
  components: {
    "meu-painel": Painel,
    "imagem-responsiva": ImagemResponsiva,
    "meu-botao": Botao
  },
  name: "app",
  data() {
    //dados ou objeto do componente.
    return {
      titulo: "Produtos",
      produtos: [],
      filtro: ""
    };
  },

  //O computed torna a um metodo a ser reconhecido com propriedade,
  //assim podemos filtrar uma lista atravez de uma propriedade que por tras dos panos é um metodo.
  computed: {
    //filtro da lista de produtos
    fotosComFiltro() {
      if (this.filtro) {
        //Expressão regular
        let exp = new RegExp(this.filtro.trim(), "i");
        return this.produtos.filter(produto => exp.test(produto.nome));
      } else {
        return this.produtos;
      }
    }
  },

  methods: {
    remove(produto) {
        alert(`Remover a foto ${produto.nome}`);
    }
  },

  //Assim que a pagina por criada
  created() {
    this.$http
      .get("http://localhost:5000/api/product")
      .then(res => res.json())
      .then(produtos => (this.produtos = produtos))
      .catch(erro => {
        if (!erro.status) {
          alert("Erro de conexão, tente novamente mais tarde.");
        }
      });
  }
};
</script>

<style>
/* Estilo do componente */

.centralizado {
  text-align: center;
}

.lista-produtos {
  list-style: none;
}

.lista-produtos-item {
  display: inline-block;
}

.filtro {
  display: block;
  width: 100%;
}
</style>
