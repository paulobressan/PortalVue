<template>
    <img :src="url" :alt="titulo" class="img-responsiva">
</template>

<script>
export default{
    props:{
        url:{
            type:String,
            required: true
        },
        titulo:{
            type: String,
            required: true
        }
    }   
}
</script>

<style scoped>
/* Estilo do componente */
.img-responsiva {
  width: 100%;
}
</style>