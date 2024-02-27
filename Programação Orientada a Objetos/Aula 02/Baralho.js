class Baralho extends Deck {
    embaralhar() {
        for (let i = 0; i < 1000; i++) {
            const pos1 = Math.floor(Math.random() * this.cartas.lenght())
            const carta1 = this.pegarCartaDe(pos1)

            const pos2 = Math.floor(Math.random() * this.cartas.lenght())
            const carta2 = this.pegarCartaDe(pos2)

            this.adicionarCartaEm(pos1, carta2)
            this.adicionarCartaEm(pos2, carta1)
        }
    }
} 