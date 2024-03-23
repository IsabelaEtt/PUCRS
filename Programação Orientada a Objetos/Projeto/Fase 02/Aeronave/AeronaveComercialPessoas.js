import AeronaveComercial from './AeronaveComercial.js';
import * as Erros from '../Erros/ErroAeronave.js'
import * as validar from "../Utils/validarDados.js"

export default class AeronaveComercialPessoas extends AeronaveComercial {
    #maxPassageiros

    constructor (prefixo, velocidade, autonomia, nomeCIA, maxPassageiros) {
        if (!validar.validarNumero(maxPassageiros)) { throw new Erros.MaxPassageirosInvalido(maxPassageiros) }

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