<template>
  <div>
    <h1>{{titulo}}</h1>
    <table>
      <thead>
        <th>Imagem</th>
        <th>Nome</th>
      </thead>
      <tbody>
        <tr v-for="produto in produtos">       
          <td><img :src="produto.url" :alt="produto.nome" style=""></td>
          <td>{{produto.nome}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      titulo: "Produtos",
      produtos: []
    };
  },
  created(){
    this.$http.get("http://localhost:5000/api/product")
      .then(res => res.json())
      .then(produtos => this.produtos = produtos);
  }
};
</script>

<style>
  img{
    width: 50px;
  }
</style>
