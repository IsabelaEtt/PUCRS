import * as Erros from '../Erros/ErroPiloto.js'

export default class Piloto {
    #matricula
    #nome
    #habilitacaoAtiva

    constructor ({ matricula, nome, habilitacaoAtiva }) {
        if (!matricula) { throw new Erros.CampoNaoRecebido('matricula') }
        if (!nome) { throw new Erros.CampoNaoRecebido('nome') }

        this.#matricula = matricula
        this.#nome = nome
        this.#habilitacaoAtiva = habilitacaoAtiva === true
    }

    get matricula () { return this.#matricula }

    get nome () { return this.#nome }

    get habilitacaoAtiva () { return this.#habilitacaoAtiva }

    toString () {
        return `matrcula: ${this.#matricula}; nome: ${this.#nome}; status habilitação: ${this.#habilitacaoAtiva ? 'ativa' : 'inativa'}`
    }
}