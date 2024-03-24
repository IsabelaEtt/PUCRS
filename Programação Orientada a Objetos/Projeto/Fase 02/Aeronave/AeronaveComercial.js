import Aeronave from './Aeronave.js';
import { tiposAeronaveComercial } from '../Utils/constantes.js'
import * as Erros from '../Erros/ErroAeronave.js'
import * as validar from '../Utils/validarDados.js'

export default class AeronaveComercial extends Aeronave {
    #nomeCIA

    constructor (prefixo, tipo, velocidade, autonomia, nomeCIA) {
        if (!nomeCIA) { throw new Erros.CampoNaoRecebido('nomeCIA') }
        if (!validar.validarTipo(tipo, tiposAeronaveComercial)) { throw new Erros.TipoInvalido(tipo, tiposAeronaveComercial) }

        super(prefixo, tipo, velocidade, autonomia)
        this.#nomeCIA = nomeCIA
    }

    toString () {
        return super.toString() + `; companhia: ${this.#nomeCIA}`
    }
}