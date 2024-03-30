export default class Menu {
    #servicoAeronaves
    #servicoPilotos
    #servicoAerovias
    #servicoPlanosDeVoo
    #prompt

    constructor (prompt, { servicoAeronaves, servicoPilotos, servicoAerovias, servicoPlanosDeVoo }) {
        this.#servicoAeronaves = servicoAeronaves
        this.#servicoPilotos = servicoPilotos
        this.#servicoAerovias = servicoAerovias
        this.#servicoPlanosDeVoo = servicoPlanosDeVoo
        this.#prompt = prompt
    }

    iniciar () {
        const pergunta = 'Bem vindo ao menu principal, selecione qual serviço você gostaria de acessar:'
        const opcoes = [
            'Serviço de Aeronaves',
            'Serviço de Pilotos',
            'Serviço de Aerovias',
            'Serviço de Planos de Voo',
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
            case 4:
                this.#menuPlanosDeVoo()
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
            'Listar todas as aerovias',
            'Listar aerovias entre dois aeroportos',
            'Voltar'
        ]

        switch (this.#prompt.menuDeOpcoes(pergunta, opcoes)) {
            case 1:
                this.#servicoAerovias.cadastrarAerovia()
                break
            case 2:
                this.#servicoAerovias.listarAerovias()
                break
            case 3:
                this.#servicoAerovias.listarAeroviasEntreDoisAeroportos()
                break
            default:
                return this.iniciar()
        }

        this.#menuAerovias()
    }

    #menuPlanosDeVoo () {
        const pergunta = 'O que você gostaria de fazer?'
        const opcoes = [
            'Cadastrar plano de voo',
            'Listar planos de voo',
            'Buscar plano de voo',
            'Voltar'
        ]

        switch (this.#prompt.menuDeOpcoes(pergunta, opcoes)) {
            case 1:
                this.#servicoPlanosDeVoo.cadastrarPlanoDeVoo()
                break
            case 2:
                this.#servicoPlanosDeVoo.listarPlanosDeVoo()
                break
            case 3: 
                this.#servicoPlanosDeVoo.buscarPlanoDeVoo()
                break
            default:
                return this.iniciar()
        }

        this.#menuPlanosDeVoo()
    }

    encerrar () {
        this.#servicoAeronaves.salvarDados()
        this.#servicoAerovias.salvarDados()
        this.#servicoPilotos.salvarDados()
        this.#servicoPlanosDeVoo.salvarDados()
        console.log('Tchau :)')
    }
}
