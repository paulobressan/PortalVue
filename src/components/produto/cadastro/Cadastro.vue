<template>

  <div>
    <h1 class="centralizado">Cadastro</h1>
    <h2 class="centralizado"></h2>

    <!-- criando o evento submit retirando o evento nativo-->
    <form @submit.prevent="gravar()">
      <div class="controle">
        <label for="titulo">NOME</label>
        <!-- O lazy é o carregamento preguiçoso, quando terminar de digitar vai ser aplicado o bind -->
        <input id="titulo" autocomplete="off" v-model.lazy="produto.nome">
      </div>

      <div class="controle">
        <label for="url">URL</label>
        <input id="url" autocomplete="off" v-model.lazy="produto.url">
        <div class="bloco-img">
            <!-- Só vai exibir o titulo da imagem se existir uma url, ou melhor quando o usuario terminar de digitar a url e nome (Opcional) -->
            <imagem-responsiva v-show="produto.url" :url="produto.url" :titulo="produto.nome"/>
        </div>
      </div>

      <div class="controle">
        <label for="descricao">DESCRIÇÃO</label>
        <textarea id="descricao" autocomplete="off" v-model="produto.descricao"></textarea>
      </div>

      <div class="centralizado">
        <meu-botao rotulo="GRAVAR" tipo="submit"/>
        <router-link :to="{ name: 'home'}"><meu-botao rotulo="VOLTAR" tipo="button"/></router-link>
      </div>

    </form>
  </div>
</template>

<script>
import ImagemResponsiva from "../../shared/imagem-responsiva/ImagemResponsiva.vue";
import Botao from "../../shared/botao/Botao.vue";
import Produto from "../../../domain/produto/Produto.js";

//importando serviço
import ProdutoService from '../../../domain/produto/ProdutoService.js';

export default {
  components: {
    "imagem-responsiva": ImagemResponsiva,
    "meu-botao": Botao
  },
  data() {
    return {
      produto: new Produto()
    };
  },

  created() {
    this.service = new ProdutoService(this.$resource);
  },
  methods: {
    gravar() {
      this.service
        .cadastra(this.produto)
        .then(() => this.limpar(), erro => console.log(erro));
      //como estamos usando o vue-resource, podemos chamar this(global vue object) e usar o $http do vue-resource.
      // this.$http.post('api/product', this.produto)
      // .then(() =>this.limpar(), erro => console.log(erro));

      //vue-resource configurada amnual
      // this.resource
      //   .save(this.produto)
      //   .then(() => this.limpar(), erro => console.log(erro));
    },
    limpar() {
      this.produto = new Produto();
    }
  }
};
</script>
<style scoped>
.centralizado {
  text-align: center;
}
.controle {
  font-size: 1.2em;
  margin-bottom: 20px;
}
.controle label {
  display: block;
  font-weight: bold;
}

.controle label + input,
.controle textarea {
  width: 100%;
  font-size: inherit;
  border-radius: 5px;
}

.centralizado {
  text-align: center;
}
.bloco-img {
  width: 250px;
}
</style>