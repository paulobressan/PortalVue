//Importando os componente que vai ser utilizado nas rotas
import Cadastro from './components/produto/cadastro/Cadastro.vue';
import Home from './components/home/Home.vue';

//Exportando um array constante com nossa rotas
export const routes = [
    //Path é o caminho e component é o componente importado
    { path: '', component: Home, titulo: "Home" },
    { path: '/cadastro', component: Cadastro, titulo: "Cadastro" }
];
