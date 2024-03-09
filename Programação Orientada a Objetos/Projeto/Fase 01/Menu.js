import ServicoAeronaves from './Aeronave/ServicoAeronaves.js'
import ServicoPilotos from './Piloto/ServicoPilotos.js'
import { validarOpcaoMenu, pegarEntradaUsuario } from './utils.js'

export default class Menu {
    #servicoAeronaves
    #servicoPilotos

    constructor () {
        this.#servicoAeronaves = new ServicoAeronaves()
        this.#servicoPilotos = new ServicoPilotos()
    }

    iniciar () {
        const pergunta = 'Bem vindo ao menu principal, selecione qual serviço você gostaria de acessar:' +
        '\n1) Serviço de Aeronaves' +
        '\n2) Serviço de Pilotos' +
        '\n3) Sair'

        const opcao = Number(pegarEntradaUsuario(pergunta))

        if (!validarOpcaoMenu(opcao, 1, 3)) {
            console.log('Por favor selecione uma opção válida...')
            return this.iniciar()
        }

        if (opcao === 1) {
            this.#menuAeronaves()
        }

        if (opcao === 2) {
            this.#menuPilotos()
        }
    }      
    
    #menuAeronaves () {
        const pergunta = 'O que você gostaria de fazer?' +
        '\n1) Cadastrar aeronave' +
        '\n2) Listar aeronaves' +
        '\n3) Voltar'

        const opcao = Number(pegarEntradaUsuario(pergunta))

        if (!validarOpcaoMenu(opcao, 1, 3)) {
            console.log('Por favor selecione uma opção válida...')
            return this.#menuAeronaves()
        }

        if (opcao === 1) {
            this.#servicoAeronaves.cadastrarAeronave()
        }

        if (opcao === 2) {
            this.#servicoAeronaves.listarAeronaves()
        }

        if (opcao === 3) {
            return this.iniciar()
        }

        this.#menuAeronaves()
    }

    #menuPilotos () {
        const pergunta = 'O que você gostaria de fazer?' +
        '\n1) Cadastrar piloto' +
        '\n2) Listar pilotos' +
        '\n3) Voltar'

        const opcao = Number(pegarEntradaUsuario(pergunta))

        if (!validarOpcaoMenu(opcao, 1, 3)) {
            console.log('Por favor selecione uma opção válida...')
            return this.#menuPilotos()
        }

        if (opcao === 1) {
            this.#servicoPilotos.cadastrarPiloto()
        }

        if (opcao === 2) {
            this.#servicoPilotos.listarPilotos()
        }

        if (opcao === 3) {
            return this.iniciar()
        }

        this.#menuPilotos()
    }
}
