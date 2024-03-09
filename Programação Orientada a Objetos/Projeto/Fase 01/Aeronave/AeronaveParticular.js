import { validate } from "bycontract";
import Aeronave from "./Aeronave.js";

export default class AeronaveParticular extends Aeronave {
    #respManutencao 

    constructor (prefixo, velocidade, autonomia, respManutencao) {
        validate(arguments, ['string', 'number', 'number', 'string'])

        super(prefixo, 'PP', velocidade, autonomia)
        this.#respManutencao = respManutencao
    }

    checarAltitudesPermitidas () {
        const alturas = []
        for (let i = 25000; i <= 27000; i+=1000) { alturas.push(i) }
        return alturas
    }

    toString () {
        return super.toString() + `; resonsável manutenção: ${this.#respManutencao}`
    }
}