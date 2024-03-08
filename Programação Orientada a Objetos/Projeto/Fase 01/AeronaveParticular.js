import { validate } from "bycontract";
import Aeronave from "./Aeronave.js";

export default class AeronaveParticular extends Aeronave {
    #empresa 

    constructor (prefixo, velocidade, autonomia, empresa) {
        validate(arguments, ['string', 'number', 'number', 'string'])

        super(prefixo, 'particular', velocidade, autonomia)
        this.#empresa = empresa
    }

    checarAltitudesPermitidas () {
        const alturas = []
        for (let i = 25000; i <= 27000; i+=1000) { alturas.push(i) }
        return alturas
    }

    toString () {
        return super.toString() + `; empresa: ${this.#empresa}`
    }
}