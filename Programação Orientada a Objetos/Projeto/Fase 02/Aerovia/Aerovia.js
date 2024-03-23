import * as Erros from '../Erros/ErroAerovia.js'
import * as validar from '../Utils/validarDados.js'

export default class Aerovia {
    #id
    #origem
    #destino
    #tamanho

    constructor (id, origem, destino, tamanho) {
        if (!id) { throw new Erros.CampoNaoRecebido('id') }
        if (!origem) { throw new Erros.CampoNaoRecebido('origem') }
        if (!destino) { throw new Erros.CampoNaoRecebido('destino') }
        if (!validar.validarNumero(tamanho)) { throw new Erros.TamanhoInvalido(tamanho) }

        this.#id = id
        this.#origem = origem
        this.#destino = destino
        this.#tamanho = tamanho
    }

    id () { return this.#id }

    toString () {
        return `id: ${this.#id}; aeroporto origem: ${this.#origem}; aeroporto destino: ${this.#destino}; tamanho: ${this.#tamanho}km`
    }
}