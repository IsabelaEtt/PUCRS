class Carta {
    #naipe
    #valor

    constructor (naipe, valor) {
        this.#naipe = naipe
        this.#valor = valor
    }

    get naipe() { return this.#naipe }
    get valor() { return this.#valor } 
}