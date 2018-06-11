<template>
<!-- template ou html, parte visual do componente -->
    <div class="painel">
        <h2 class="painel-titulo">{{titulo}}</h2>
        <!-- Slot é para definir onde o conteudo passado de outros componente vai ser exibido. -->
        <slot class="painel-conteudo"></slot>
    </div>
</template>

<script>
//dados do componente
export default {
    //aplicando props para receber dados de outros componentes
    props: ['titulo']
};
</script>

<style scoped>
/* O scoped torna os estilos aplicavel somente para o componente "Painel" */

/* estilo do painel */

.painel {
  padding: 0 auto;
  border: solid 2px grey;
  display: inline-block;
  margin: 5px;
  box-shadow: 5px 5px 10px grey;
  width: 200px;
  height: 100%;
  vertical-align: top;
  text-align: center;
}

.painel .painel-titulo {
  text-align: center;
  border: solid 2px;
  background: lightblue;
  margin: 0 0 15px 0;
  padding: 10px;
  text-transform: uppercase;
}

*  {
    box-shadow: 5px 5px 10px black;
}
</style>
