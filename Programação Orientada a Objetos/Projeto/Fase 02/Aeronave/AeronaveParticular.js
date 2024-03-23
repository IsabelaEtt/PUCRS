import Aeronave from './Aeronave.js';
import * as Erros from '../Erros/ErroAeronave.js'

export default class AeronaveParticular extends Aeronave {
    #respManutencao 

    constructor (prefixo, velocidade, autonomia, respManutencao) {
        if (!respManutencao) { throw new Erros.CampoNaoRecebido('respManutencao') }

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