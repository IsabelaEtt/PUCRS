import { validate } from "bycontract";

export default class Piloto {
    #nome
    #matricula
    #status

    constructor (nome, matricula, status) {
        validate(arguments, ['string', 'string', 'boolean'])
        this.#nome = nome
        this.#matricula = matricula
        this.#status = status
    }

    toString () {
        return `Piloto - nome: ${this.#nome}; matrcula: ${this.#matricula}; status habilitação: ${this.#status ? 'ativa' : 'inativa'}`
    }
}