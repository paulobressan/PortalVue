//Importando bibliotecas para ser utilizadas.
import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';
import VueRoter from 'vue-router';

//Importando as rotas da aplicação
import {routes} from './routes';

//importando diretivas 
import './directives/Transform';

//Usando bibliotecas de terceiros.
Vue.use(VueResource);
Vue.use(VueRoter);

//Criando o roteador com base nas rotas importadas, com auxilio do VueRouter, ele espera como parametro as rotas importadas.
const router = new VueRoter({
  routes: routes,
  mode: 'history' //Omitir o # na url, para isso o servidor precisar apontar para o index.html em todas as rotas.
});

//Global Vue Object
new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
