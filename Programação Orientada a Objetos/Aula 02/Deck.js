class Deck {
    #cartas

    get cartas() { return this.#cartas.values() }
    // values() retorna um iterador, não uma referência da classe, mantendo o encapsulamento

    adicionarCarta(carta) {
        this.#cartas.push(carta)
    }

    pegarUltimaCarta() {
        return this.#cartas.shift()
    }

    pegarCartaDe(posicao) {
        const carta = this.#cartas[posicao]
        this.#cartas.splice(posicao, 1)
        return carta
    }

    adicionarCartaEm(posicao, carta) {
        this.#cartas.splice(posicao, 0, carta)
    }

    estaVazio() {
        return this.#cartas.length === 0
    }

    adicionarVariasCartas(novasCartas) {
        this.#cartas.concat(novasCartas)
    }

}