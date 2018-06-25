//Importando o global vue object
import Vue from 'vue'

//Usando o vue para criar uma diretiva.
Vue.directive('meu-transform', {
    //Metodo lifecicle hooks
    //el = referencia do elemento no DOM. É nele que recebemos o elemento em que vamos manipular.
    bind(el, binding, vnode){ //O binding pega o valor passado para a diretiva
        //Registra a quantidade de clicks
        let current = 0;

        //Adicionando o evento double click no elemento e para cada double click incrementa 90 em current.
        el.addEventListener('dblclick', ()=>{
            let incremento = 90;
            let animacao = false;
            if(binding.value){
                //pegando o valor passado para a diretiva
                incremento = binding.value.incremento;
                animacao = binding.value.animacao;
            }

            //incrementando o current.
            current+= incremento;
            //Adicionando um estilo no elemento
            el.style.transform = `rotate(${current}deg)`;
            if(animacao) el.style.transition = 'transform 0.5s';
        });
    }
});