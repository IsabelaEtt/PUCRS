class Jogo {
    #jogadores
    #baralho

    constructor (numJogadores) {
        this.#criaBaralho()
        this.#criaJogadores()
    }

    #criaBaralho() {
        this.#baralho = new Baralho()

        for (let naipe = 1; naipe <= 4; naipe++) {
            for (let valor = 1; valor <= 13; valor++) {
                this.#baralho.adicionarCarta(new Carta(naipe, valor))
            }
        }

        this.#baralho.embaralhar()
    }

    #criaJogadores(numJogadores) {
        const numCartasPorJogador = Math.floor(this.#baralho().legth / numJogadores)
        for (let jogador=1; jogador<=numJogadores; jogador++) {
            const deck = new Deck()
            for (let i=0; i < numCartasPorJogador; i++) {
                deck.adicionarCarta(this.#baralho.pegarUltimaCarta())
            }
            this.#jogadores.push(deck, `Jogador ${jogador}`)
        }
    }

    #rodada() {
        let jogadorEscolhido = 0
        let maiorCarta = this.#jogadores[0].deck().pegarUltimaCarta()
        let cartasDescartadas = []

        for (let jogador = 1; jogador < this.#jogadores.length(); jogador++) {
            carta = this.#jogadores[jogador].deck().pegarUltimaCarta()

            if (carta.naipe() < maiorCarta.naipe()) { continue; }
            if (carta.naipe() === maiorCarta.naipe() && carta.valor() < maiorCarta.valor()) { continue; }

            cartasDescartadas.push(maiorCarta)
            jogadorEscolhido = jogador
            maiorCarta = carta
        }

        this.#jogadores[jogadorEscolhido].deck.adicionarVariasCartas(cartasDescartadas)
    }

    #pegaVencedor() {
        for (let jogador = 0; jogador < this.#jogadores.length(); jogador++) {
            if (this.#jogadores[jogador].deck.estaVazio()) {
                return this.#jogadores[jogador]
            }
        }
    }

    jogar () {
        this.#rodada()
        const vencedor = this.#pegaVencedor()
        if(!vencedor) { return this.jogar() }

        console.log(`Vencedor é ${vencedor.nome()}`)
    }
    
}