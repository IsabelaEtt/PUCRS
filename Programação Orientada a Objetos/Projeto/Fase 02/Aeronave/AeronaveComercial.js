import Aeronave from './Aeronave.js';
import { validate } from 'bycontract';
import { tiposAeronaveComercial } from './aeronaveUtils.js'

export default class AeronaveComercial extends Aeronave {
    #nomeCIA

    constructor (prefixo, tipo, velocidade, autonomia, nomeCIA) {
        validate(arguments, ['string', 'string', 'number', 'number', 'string'])
        super(prefixo, tipo, velocidade, autonomia)

        this.#nomeCIA = nomeCIA
    }

    validarTipo (tipo) {
        if (!tiposAeronaveComercial.includes(tipo)) {
            throw new Error(`Tipo de aeronave comercial inválido, deve ser ${tiposAeronaveComercial.join('|')}`)
        }
    }

    toString () {
        return super.toString() + `; companhia: ${this.#nomeCIA}`
    }
}