import { validate } from "bycontract";
import Aeronave from "./Aeronave.js";

export default class AeronaveComercialCarga extends Aeronave {
    #companhia
    #capacidadeToneladas

    constructor (prefixo, velocidade, autonomia, companhia, capacidadeToneladas) {
        validate(arguments, ['string', 'number', 'number', 'string', 'number'])

        super(prefixo, 'comercial carga', velocidade, autonomia)
        this.#companhia = companhia
        this.#capacidadeToneladas = capacidadeToneladas
    }

    checarHorariosPermitidos () {
        const horarios = []
        for (let i = 0; i <= 6; i++) { horarios.push(i) }
        return horarios
    }

    toString () {
        return super.toString() + `; companhia: ${this.#companhia}; capacidade: ${this.#capacidadeToneladas} toneladas`
    }
}