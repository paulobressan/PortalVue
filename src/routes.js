//Importando os componente que vai ser utilizado nas rotas
import Cadastro from './components/produto/cadastro/Cadastro.vue';
import Home from './components/home/Home.vue';

//Exportando um array constante com nossa rotas
export const routes = [
    //Path é o caminho e component é o componente importado
    { path: '', name: 'home', component: Home, titulo: "Home", menu:true },
    { path: '/cadastro', name: 'cadastro', component: Cadastro, titulo: "Cadastro", menu:true },
    { path: '/altera/:id', name: 'altera', component: Cadastro},
    { path: '*', component: Home }//toda rota invalida vai para essa rota.
];