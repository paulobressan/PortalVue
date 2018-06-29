import { resolve } from "path";
import { rejects } from "assert";

//classe service para acessar dados de produtos.
export default class ProdutoService {
    //construtor espera a instancia do vue-resource por que a classe não esta no contexto do vue.
    constructor(resource) {
        //atribuindo o resource e configurando a rota.
        this._resource = resource('api/product{/id}');
    }

    //lista todas os produtos
    lista() {
        return new Promise((resolve, reject) => {
            this._resource
                .query()
                .then(res => resolve(res.json()), erro => reject(erro));
        });
    }

    //cadastro um produto
    cadastra(produto) {
        return new Promise((resolve, reject) => {
            this._resource
                .save(produto)
                .then(res => resolve(res.json()), erro => reject(erro));
        })
    }

    //remove produto
    remove(id) {
        return new Promise((resolve, reject) => {
            this._resource
                .delete({ id })
                .then(res => resolve(res), erro => reject(erro));
        })
    }
}