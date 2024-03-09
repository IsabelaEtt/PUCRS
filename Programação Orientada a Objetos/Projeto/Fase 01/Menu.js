import ServicoAeronaves from './Aeronave/ServicoAeronaves.js'
import { validarOpcaoMenu, pegarEntradaUsuario } from './utils.js'

export default class Menu {
    #servicoAeronaves

    constructor () {
        this.#servicoAeronaves = new ServicoAeronaves()
    }

    iniciar () {
        const pergunta = 'Bem vindo ao menu principal, selecione qual serviço você gostaria de acessar:' +
        '\n1) Serviço de Aeronaves' +
        '\n2) Sair'

        const opcao = Number(pegarEntradaUsuario(pergunta))

        if (!validarOpcaoMenu(opcao, 1, 2)) {
            console.log('Por favor selecione uma opção válida...')
            return this.iniciar()
        }

        if (opcao === 1) {
            this.#menuAeronaves()
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
            this.#servicoAeronaves.criarAeronave()
        }

        if (opcao === 2) {
            this.#servicoAeronaves.listarAeronaves()
        }

        if (opcao === 3) {
            return this.iniciar()
        }

        this.#menuAeronaves()
    }
}
