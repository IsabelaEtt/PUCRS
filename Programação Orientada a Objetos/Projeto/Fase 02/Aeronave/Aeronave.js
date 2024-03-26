import { tiposAeronave } from '../Utils/constantes.js'
import * as Erros from '../Erros/ErroAeronave.js'

export default class Aeronave {
    #prefixo 
    #tipo
    #velocidade
    #autonomia

    constructor ({ prefixo, tipo, velocidade, autonomia }) {
        if (!prefixo) { throw new Erros.CampoNaoRecebido('prefixo') }
        if (!tiposAeronave.includes(tipo)) { throw new Erros.TipoInvalido(tipo, tiposAeronave) }
        if (isNaN(velocidade) || velocidade < 0) { throw new Erros.VelocidadeInvalida(velocidade) }
        if (isNaN(autonomia) || autonomia < 0) { throw new Erros.AutonomiaInvalida(autonomia) }

        this.#prefixo = prefixo
        this.#tipo = tipo
        this.#velocidade = velocidade
        this.#autonomia = autonomia
    }

    get prefixo() { return this.#prefixo }

    get tipo() { return this.#tipo }

    get velocidade () { return this.#velocidade }

    get autonomia () { return this.#autonomia }

    checarAltitudesPermitidas () {
        const alturas = []
        for (let i = 25000; i <= 35000; i+=1000) { alturas.push(i) }
        return alturas
    }

    checarHorariosPermitidos () {
        const horarios = []
        for (let i = 0; i <= 23; i++) { horarios.push(i) }
        return horarios
    }

    toString () {
        return `prefixo: ${this.#prefixo}; tipo: ${this.#tipo}; velocidade: ${this.#velocidade}km/h; autonomia: ${this.#autonomia}km; horarios permitidos: ${this.checarHorariosPermitidos().join(', ')}; altitudes permitidas: ${this.checarAltitudesPermitidas().join(', ')}`
    }
}