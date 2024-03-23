import { tiposAeronave } from './aeronaveUtils.js'
import * as Erros from '../Erros/ErroAeronave.js'
import * as validar from '../Utils/validarDados.js'

export default class Aeronave {
    #prefixo 
    #tipo
    #velocidade
    #autonomia

    constructor (prefixo, tipo, velocidade, autonomia) {
        if (!prefixo) { throw new Erros.CampoNaoRecebido('prefixo') }
        if (!validar.validarTipo(tipo, tiposAeronave)) { throw new Erros.TipoInvalido(tipo, tiposAeronave) }
        if (!validar.validarNumero(velocidade)) { throw new Erros.VelocidadeInvalida(velocidade) }
        if (!validar.validarNumero(autonomia)) { throw new Erros.AutonomiaInvalida(autonomia) }
    
        this.#prefixo = prefixo
        this.#tipo = tipo
        this.#velocidade = velocidade
        this.#autonomia = autonomia
    }

    prefixo() { return this.#prefixo }

    velocidade () { return this.#velocidade }

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