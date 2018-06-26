// //Importando o global vue object
// import Vue from 'vue'

// //Usando o vue para criar uma diretiva.
// Vue.directive('meu-transform', {


//Exportando as configurações da diretivas
export default {
    //Metodo lifecicle hooks
    //el = referencia do elemento no DOM. É nele que recebemos o elemento em que vamos manipular.
    bind(el, binding, vnode) { //O binding pega o valor passado para a diretiva
        //Registra a quantidade de clicks
        let current = 0;

        //Adicionando o evento double click no elemento e para cada double click incrementa 90 em current.
        el.addEventListener('dblclick', () => {
            let incremento = binding.value || 90;
            let efeito;

            //Pegando o argumento da diretiva aplicada no html
            if (!binding.arg || binding.arg == 'rotate') {
                if (binding.modifiers.reverse) {
                    current -= incremento;
                } else {
                    //incrementando o current.
                    current += incremento;
                }
                //efeito de css
                efeito = `rotate(${current}deg)`;
            } else if (binding.arg == 'scale') {
                //efeito de css
                efeito = `scale(${incremento})`;
            }

            //Adicionando um estilo no elemento
            el.style.transform = efeito;
            if (binding.modifiers.animacao) el.style.transition = 'transform 0.5s';
        });
    }
}