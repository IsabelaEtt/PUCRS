import AeronaveComercial from './AeronaveComercial.js';
import { tipoAeronaveComercialCarga } from '../Utils/constantes.js'
import * as Erros from '../Erros/ErroAeronave.js'
import * as validar from '../Utils/validarDados.js'

export default class AeronaveComercialCarga extends AeronaveComercial {
    #pesoMax

    constructor ({ prefixo, velocidade, autonomia, nomeCIA, pesoMax }) {
        if (!validar.validarNumero(pesoMax)) { throw new Erros.PesoMaxInvalido(pesoMax) }

        super({ prefixo, tipo: tipoAeronaveComercialCarga, velocidade, autonomia, nomeCIA })
        this.#pesoMax = pesoMax
    }

    get pesoMax () { return this.#pesoMax }

    checarHorariosPermitidos () {
        const horarios = []
        for (let i = 0; i <= 6; i++) { horarios.push(i) }
        return horarios
    }

    toString () {
        return super.toString() + `; capacidade: ${this.#pesoMax} toneladas`
    }
}