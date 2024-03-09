export default class PlanoDeVoo {
    #identificador
    #matriculaPiloto
    #prefixoAeronave
    #data
    #identificadorAerovia
    #altitude
    #slotHorarios
    #cancelado

    static #identificadorGen = 0

    constructor (piloto, aeronave, data, aerovia, altitude) {
        PlanoDeVoo.#identificadorGen++
        this.#identificador = PlanoDeVoo.#identificadorGen
        this.#matriculaPiloto = piloto.matricula()
        this.#prefixoAeronave = aeronave.prefixo()
        this.#data = data
        this.#identificadorAerovia = aerovia.identificador()
        this.#altitude = altitude
        this.#cancelado = false

        const tempoDeViagem =  Math.ceil(aerovia.tamanho() / aeronave.velocidade())
        const horaInicio = data.getHours()
        this.#slotHorarios = []
        for (let i = 0; i < tempoDeViagem; i++) {
            this.#slotHorarios.push(horaInicio+1)
        }
    }

    toString () {
        return `Plano de Voo - identificador: ${this.#identificador}; piloto: ${this.#matriculaPiloto}; aeronave: ${this.#prefixoAeronave}; ` +
            `data: ${this.#data.toISOString()}; aerovia: ${this.#identificadorAerovia}; altitude: ${this.#altitude}; ` +
            `cancelado: ${this.#cancelado ? 'sim' : 'não'}`
    }
}