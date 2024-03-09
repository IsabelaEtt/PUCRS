import { validate } from "bycontract";
import AeronaveComercial from "./AeronaveComercial.js";

export default class AeronaveComercialPessoas extends AeronaveComercial {
    #maxPassageiros

    constructor (prefixo, velocidade, autonomia, nomeCIA, maxPassageiros) {
        validate(arguments, ['string', 'number', 'number', 'string', 'number'])

        super(prefixo, 'CP', velocidade, autonomia, nomeCIA)
        this.#maxPassageiros = maxPassageiros
    }

    checarAltitudesPermitidas () {
        const alturas = []
        for (let i = 28000; i <= 35000; i+=1000) { alturas.push(i) }
        return alturas
    }

    toString () {
        return super.toString() + `; capacidade: ${this.#maxPassageiros} pessoas`
    }
}