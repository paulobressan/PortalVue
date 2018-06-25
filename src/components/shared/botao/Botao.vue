<template>
    <button @click="disparaAcao()" class="botao" :class="estiloDoBotao" :type="tipo">{{rotulo}}</button>
</template>
<script>
export default {
  props: {
    tipo: {
      type: String,
      required: true
    },
    rotulo: {
      type: String,
      required: true
    },
    confirmacao: Boolean,
    estilo: String
  },
  methods: {
    disparaAcao() {
      if (this.confirmacao) {
        if (confirm("Confirma Operação?")) {
          this.$emit("botaoAtivado");
        }
        return;
      }
      this.$emit("botaoAtivado");
    }
  },
  computed: {
    estiloDoBotao() {
      switch (this.estilo) {
        case "padrao":
          return "botao-padrao";
          break;
        case "perigo":
          return "botao-perigo";
          break;
        default:
          return "botao-padrao";
          break;
      }
      if (this.estilo == "padrao") {
        return "botao-padrao";
      }
    }
  }
};
</script>
<style>
.botao {
  display: inline-block;
  padding: 10px;
  border-radius: 3px;
  margin: 10px;
  font-size: 1.2em;
}

.botao-perigo {
  background: firebrick;
  color: white;
}

.botao-padrao {
  background: darkcyan;
  color: white;
}
</style>
