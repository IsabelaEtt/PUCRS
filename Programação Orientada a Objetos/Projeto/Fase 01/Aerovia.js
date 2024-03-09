import { validate } from "bycontract";

export default class Aerovia {
    #identificador
    #aeroportoOrigem
    #aeroportoDestino
    #tamanho
    #agenda

    constructor (identificador, aeroportoOrigem, aeroportoDestino, tamanho) {
        validate(arguments, ['string', 'string', 'string', 'number'])

        this.#identificador = identificador
        this.#aeroportoOrigem = aeroportoOrigem
        this.#aeroportoDestino = aeroportoDestino
        this.#tamanho = tamanho
        this.#agenda = {}
    }

    identificador() { return this.#identificador }

    tamanho() { return this.#tamanho }

    toString () {
        return `Aerovia - identificador: ${this.#identificador}; aeroporto origem: ${this.#aeroportoOrigem}; aeroporto destino: ${this.#aeroportoDestino}; tamanho: ${this.#tamanho}km`
    }
}