import AeronaveComercial from './AeronaveComercial.js';
import { tipoAeronaveComercialPessoas } from '../Utils/constantes.js'
import * as Erros from '../Erros/ErroAeronave.js'

export default class AeronaveComercialPessoas extends AeronaveComercial {
    #maxPassageiros

    constructor ({ prefixo, velocidade, autonomia, nomeCIA, maxPassageiros }) {
        if (isNaN(maxPassageiros) || maxPassageiros < 0) { throw new Erros.MaxPassageirosInvalido(maxPassageiros) }

        super({ prefixo, tipo: tipoAeronaveComercialPessoas, velocidade, autonomia, nomeCIA })
        this.#maxPassageiros = maxPassageiros
    }

    get maxPassageiros () { return this.#maxPassageiros }

    checarAltitudesPermitidas () {
        const alturas = []
        for (let i = 28000; i <= 35000; i+=1000) { alturas.push(i) }
        return alturas
    }

    toString () {
        return super.toString() + `; capacidade: ${this.#maxPassageiros} pessoas`
    }
}