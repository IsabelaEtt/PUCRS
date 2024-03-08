import { validate } from "bycontract";

export default class Aeronave {
    #prefixo 
    #tipo
    #velocidade
    #autonomia

    constructor (prefixo, tipo, velocidade, autonomia) {
        validate(arguments, ['string', 'string', 'number', 'number'])

        this.#prefixo = prefixo
        this.#tipo = tipo
        this.#velocidade = velocidade
        this.#autonomia = autonomia
    }

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
        return `Aeronave - prefixo: ${this.#prefixo}; tipo: ${this.#tipo}; velocidade: ${this.#velocidade}km/h; autonomia: ${this.#autonomia}km; horarios permitidos: ${this.checarHorariosPermitidos().join(', ')}; altitudes permitidas: ${this.checarAltitudesPermitidas().join(', ')}`
    }
}