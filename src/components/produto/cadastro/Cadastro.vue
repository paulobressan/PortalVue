<template>

  <div>
    <h1 class="centralizado">Cadastro</h1>
    <h2 class="centralizado"></h2>

    <!-- criando o evento submit retirando o evento nativo-->
    <form @submit.prevent="gravar()">
      <div class="controle">
        <label for="titulo">NOME</label>
        <input id="titulo" autocomplete="off" :value="produto.nome" @input="produto.nome = $event.target.value">
      </div>

      <div class="controle">
        <label for="url">URL</label>
        <input id="url" autocomplete="off" :value="produto.url" @input="produto.url = $event.target.value">
        <div class="bloco-img">
            <imagem-responsiva :url="produto.url" :titulo="produto.nome"/>
        </div>
      </div>

      <div class="controle">
        <label for="descricao">DESCRIÇÃO</label>
        <textarea id="descricao" autocomplete="off" :value="produto.descricao" @input="produto.descricao = $event.target.value"></textarea>
      </div>

      <div class="centralizado">
        <meu-botao rotulo="GRAVAR" tipo="submit"/>
        <router-link to="/"><meu-botao rotulo="VOLTAR" tipo="button"/></router-link>
      </div>

    </form>
  </div>
</template>

<script>
import ImagemResponsiva from "../../shared/imagem-responsiva/ImagemResponsiva.vue";
import Botao from "../../shared/botao/Botao.vue";
import { Produto } from "../../../models/Produto.js";

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
  methods: {
    gravar() {
      console.log(this.produto);
      this.limpar();
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
.bloco-img{
    width: 250px;
}
</style>