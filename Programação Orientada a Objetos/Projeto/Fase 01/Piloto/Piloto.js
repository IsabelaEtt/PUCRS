import { validate } from "bycontract";

export default class Piloto {
    #nome
    #matricula
    #habilitacaoAtiva

    constructor (matricula, nome, habilitacaoAtiva) {
        validate(arguments, ['string', 'string', 'boolean'])
        this.#matricula = matricula
        this.#nome = nome
        this.#habilitacaoAtiva = habilitacaoAtiva
    }

    matricula () { return this.#matricula }

    toString () {
        return `matrcula: ${this.#matricula}; nome: ${this.#nome}; status habilitação: ${this.#habilitacaoAtiva ? 'ativa' : 'inativa'}`
    }
}