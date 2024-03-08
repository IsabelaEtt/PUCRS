import { validate } from "bycontract";
import Aeronave from "./Aeronave.js";

export default class AeronaveComercialPessoas extends Aeronave {
    #companhia
    #capacidadePessoas

    constructor (prefixo, velocidade, autonomia, companhia, capacidadePessoas) {
        validate(arguments, ['string', 'number', 'number', 'string', 'number'])

        super(prefixo, 'comercial pessoas', velocidade, autonomia)
        this.#companhia = companhia
        this.#capacidadePessoas = capacidadePessoas
    }

    checarAltitudesPermitidas () {
        const alturas = []
        for (let i = 28000; i <= 35000; i+=1000) { alturas.push(i) }
        return alturas
    }

    toString () {
        return super.toString() + `; companhia: ${this.#companhia}; capacidade: ${this.#capacidadePessoas} pessoas`
    }
}