import Aeronave from './Aeronave.js';
import { tiposAeronaveComercial } from '../Utils/constantes.js'
import * as Erros from '../Erros/ErroAeronave.js'

export default class AeronaveComercial extends Aeronave {
    #nomeCIA

    constructor ({ prefixo, tipo, velocidade, autonomia, nomeCIA }) {
        if (!nomeCIA) { throw new Erros.CampoNaoRecebido('nomeCIA') }
        if (!tiposAeronaveComercial.includes(tipo)) { throw new Erros.TipoInvalido(tipo, tiposAeronaveComercial) }

        super({ prefixo, tipo, velocidade, autonomia })
        this.#nomeCIA = nomeCIA
    }

    get nomeCIA () { return this.#nomeCIA }

    toString () {
        return super.toString() + `; companhia: ${this.#nomeCIA}`
    }
}