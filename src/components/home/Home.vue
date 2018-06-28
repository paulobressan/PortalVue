<template>
<!-- template ou html, parte visual do componente -->
  <div>
    <h1 class="centralizado">{{titulo}}</h1>
    
  <p class="centralizado" v-show="mensagem">{{mensagem}}</p>

    <!-- Input para realizar filtro. Nele contem o evento v-on:input que atualiza a propriedade filtro. -->
    <input type="search" class="filtro" @input="filtro = $event.target.value" placeholder="filtre por parte do titulo...">
    <ul class="lista-produtos">
      <li class="lista-produtos-item" v-for="produto in fotosComFiltro">
        <transition name="painel">
          <meu-painel :titulo="produto.nome">
            <figure> 
              <imagem-responsiva v-meu-transform:scale.animacao="1.2" :url="produto.url" :titulo="produto.nome"></imagem-responsiva>       
            </figure>
            <meu-botao 
              tipo="button" 
              rotulo="Remover" 
              :confirmacao="true" 
              estilo="perigo"
              @botaoAtivado="remove(produto)"></meu-botao>
          </meu-painel>             
        </transition>
      </li>
    </ul>
  </div>
</template>

<script>
//importando outros componentes
import Painel from "../shared/painel/Painel.vue";
import ImagemResponsiva from "../shared/imagem-responsiva/ImagemResponsiva.vue";
import Botao from "../shared/botao/botao.vue";

//importando serviço produto
import ProdutoService from "../../domain/produto/ProdutoService.js";

//Importando diretivas
import transform from "../../directives/Transform";

//dados do componente
export default {
  //Propriedade components para usar outros componentes, desde que estaja importado.
  components: {
    "meu-painel": Painel,
    "imagem-responsiva": ImagemResponsiva,
    "meu-botao": Botao
  },
  //A propriedade directives define as diretivas do componente diretivas.
  directives: {
    "meu-transform": transform
  },
  name: "app",
  data() {
    //dados ou objeto do componente.
    return {
      titulo: "Produtos",
      produtos: [],
      filtro: "",
      mensagem: ""
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
      //chamando serviço de delete da api
      //configuração manual do resource
      this.service.remove(produto.id).then(
        () => {
          this.mensagem = "Foto removida com sucesso.";
          let indice = this.produtos.indexOf(produto);
          this.produtos.splice(indice, 1);
        },
        erro => {
          console.log(erro);
          this.mensagem = "Não foi possivel remover a foto.";
        }
      );
    }
  },

  //Assim que a pagina por criada
  created() {
    //criando instancia service para usar o service de produtos
    this.service = new ProdutoService(this.$resource);
    this.service
      .lista()
      .then(produtos => (this.produtos = produtos), erro => console.log(erro));

    //METODO ANTIGO
    //Configurando manualmente a requisição do vue-resource
    //Retorno do resource e criando uma propriedade dinamicamente
    // this.resource = this.$resource("api/product{/id}");
    //o {/id} vai ser utilizado para deletar, a resource é utlizada em outros metodos,
    //portando o query sabe que que não estamos passando nenhum parametro na busca então ele descarta o {/id}
    //Buscar ou por baixo dos panos GET
    // this.resource
    //   .query()
    //   .then(res => res.json())
    //   .then(produtos => (this.produtos = produtos))
    //   .catch(erro => {
    //     if (!erro.status) {
    //       alert("Erro de conexão, tente novamente mais tarde.");
    //     }
    //   });

    //Fim da configuração
    // this.$http
    //   .get("api/product")
    //   .then(res => res.json())
    //   .then(produtos => (this.produtos = produtos))
    //   .catch(erro => {
    //     if (!erro.status) {
    //       alert("Erro de conexão, tente novamente mais tarde.");
    //     }
    //   });
  }
};
</script>

<style scoped>
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

.painel-enter,
.painel-leave-active {
  opacity: 0;
}

.painel-enter-active,
.painel-leave-active {
  transition: opacity 0.4s;
}
</style>
