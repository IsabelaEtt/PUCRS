class Jogador {
    #deck
    #nome

    constructor(deck, nome) {
        this.#deck = deck
        this.#nome = nome
    }

    get deck() { return this.#deck }
    get nome() { return this.#nome }
}