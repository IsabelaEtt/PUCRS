export default class Menu {
    #servicoAeronaves
    #servicoPilotos
    #servicoAerovias
    #prompt

    constructor ({ servicoAeronaves, servicoPilotos, servicoAerovias }, prompt) {
        this.#servicoAeronaves = servicoAeronaves
        this.#servicoPilotos = servicoPilotos
        this.#servicoAerovias = servicoAerovias
        this.#prompt = prompt
    }

    iniciar () {
        const pergunta = 'Bem vindo ao menu principal, selecione qual serviço você gostaria de acessar:'
        const opcoes = [
            'Serviço de Aeronaves',
            'Serviço de Pilotos',
            'Serviço de Aerovias',
            'Sair'
        ]

        switch (this.#prompt.menuDeOpcoes(pergunta, opcoes)) {
            case 1:
                this.#menuAeronaves()
                break
            case 2:
                this.#menuPilotos()
                break
            case 3:
                this.#menuAerovias()
                break
            default:
                return this.encerrar()
        }
    }      
    
    #menuAeronaves () {
        const pergunta = 'O que você gostaria de fazer?'
        const opcoes = [
            'Cadastrar aeronave',
            'Listar aeronaves',
            'Voltar'
        ]

        switch (this.#prompt.menuDeOpcoes(pergunta, opcoes)) {
            case 1:
                this.#servicoAeronaves.cadastrarAeronave()
                break
            case 2:
                this.#servicoAeronaves.listarAeronaves()
                break
            default:
                return this.iniciar()
        }

        this.#menuAeronaves()
    }

    #menuPilotos () {
        const pergunta = 'O que você gostaria de fazer?'
        const opcoes = [
            'Cadastrar piloto',
            'Listar pilotos',
            'Voltar'
        ]

        switch (this.#prompt.menuDeOpcoes(pergunta, opcoes)) {
            case 1:
                this.#servicoPilotos.cadastrarPiloto()
                break
            case 2:
                this.#servicoPilotos.listarPilotos()
                break
            default:
                return this.iniciar()
        }

        this.#menuPilotos()
    }

    #menuAerovias () {
        const pergunta = 'O que você gostaria de fazer?'
        const opcoes = [
            'Cadastrar aerovia',
            'Listar aerovias',
            'Voltar'
        ]

        switch (this.#prompt.menuDeOpcoes(pergunta, opcoes)) {
            case 1:
                this.#servicoAerovias.cadastrarAerovia()
                break
            case 2:
                this.#servicoAerovias.listarAerovias()
                break
            default:
                return this.iniciar()
        }

        this.#menuAerovias()
    }

    encerrar () {
        this.#servicoAeronaves.salvarDados()
        this.#servicoAerovias.salvarDados()
        this.#servicoPilotos.salvarDados()
        console.log('Tchau :)')
    }
}
