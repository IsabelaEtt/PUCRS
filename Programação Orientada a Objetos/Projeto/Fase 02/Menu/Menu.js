import ServicoAeronaves from '../Aeronave/ServicoAeronaves.js'
import ServicoPilotos from '../Piloto/ServicoPilotos.js'
import ServicoAerovias from '../Aerovia/ServicoAerovias.js'
import { validarOpcaoMenu, pegarEntradaUsuario } from '../utils.js'
// import * as utils from '../utils.js' -> forma de importar tudo, sem ter que ficar declarando

export default class Menu {
    #servicoAeronaves
    #servicoPilotos
    #servicoAerovias

    constructor () {
        this.#servicoAeronaves = new ServicoAeronaves()
        this.#servicoPilotos = new ServicoPilotos()
        this.#servicoAerovias = new ServicoAerovias()
    }

    iniciar () {
        const pergunta = 'Bem vindo ao menu principal, selecione qual serviço você gostaria de acessar:' +
        '\n1) Serviço de Aeronaves' +
        '\n2) Serviço de Pilotos' +
        '\n3) Serviço de Aerovias' +
        '\n4) Sair'

        const opcao = Number(pegarEntradaUsuario(pergunta))

        if (!validarOpcaoMenu(opcao, 1, 4)) {
            console.log('Por favor selecione uma opção válida...')
            return this.iniciar()
        }

        if (opcao === 1) {
            this.#menuAeronaves()
        }

        if (opcao === 2) {
            this.#menuPilotos()
        }

        if (opcao === 3) {
            this.#menuAerovias()
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

    #menuAerovias () {
        const pergunta = 'O que você gostaria de fazer?' +
        '\n1) Cadastrar aerovia' +
        '\n2) Listar aerovias' +
        '\n3) Voltar'

        const opcao = Number(pegarEntradaUsuario(pergunta))

        if (!validarOpcaoMenu(opcao, 1, 3)) {
            console.log('Por favor selecione uma opção válida...')
            return this.#menuAerovias()
        }

        if (opcao === 1) {
            this.#servicoAerovias.cadastrarAerovia()
        }

        if (opcao === 2) {
            this.#servicoAerovias.listarAerovias()
        }

        if (opcao === 3) {
            return this.iniciar()
        }

        this.#menuAerovias()
    }
}
