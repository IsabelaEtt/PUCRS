import { validate } from 'bycontract';

export default class Aerovia {
    #id
    #origem
    #destino
    #tamanho

    constructor (id, origem, destino, tamanho) {
        validate(arguments, ['string', 'string', 'string', 'number'])

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