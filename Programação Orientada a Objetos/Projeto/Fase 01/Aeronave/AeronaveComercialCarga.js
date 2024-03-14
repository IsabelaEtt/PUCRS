import { validate } from 'bycontract';
import AeronaveComercial from './AeronaveComercial.js';

export default class AeronaveComercialCarga extends AeronaveComercial {
    #pesoMax

    constructor (prefixo, velocidade, autonomia, nomeCIA, pesoMax) {
        validate(arguments, ['string', 'number', 'number', 'string', 'number'])

        super(prefixo, 'CC', velocidade, autonomia, nomeCIA)
        this.#pesoMax = pesoMax
    }

    checarHorariosPermitidos () {
        const horarios = []
        for (let i = 0; i <= 6; i++) { horarios.push(i) }
        return horarios
    }

    toString () {
        return super.toString() + `; capacidade: ${this.#pesoMax} toneladas`
    }
}