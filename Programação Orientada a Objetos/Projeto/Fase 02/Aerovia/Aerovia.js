import * as Erros from '../Erros/ErroAerovia.js'

export default class Aerovia {
    #id
    #origem
    #destino
    #tamanho

    constructor ({ id, origem, destino, tamanho }) {
        if (!id) { throw new Erros.CampoNaoRecebido('id') }
        if (!origem) { throw new Erros.CampoNaoRecebido('origem') }
        if (!destino) { throw new Erros.CampoNaoRecebido('destino') }
        if (isNaN(tamanho) || tamanho < 0) { throw new Erros.TamanhoInvalido(tamanho) }

        this.#id = id
        this.#origem = origem
        this.#destino = destino
        this.#tamanho = tamanho
    }

    get id () { return this.#id }

    get origem () { return this.#origem }

    get destino () { return this.#destino }

    get tamanho () { return this.#tamanho }

    toString () {
        return `id: ${this.#id}; aeroporto origem: ${this.#origem}; aeroporto destino: ${this.#destino}; tamanho: ${this.#tamanho}km`
    }
}