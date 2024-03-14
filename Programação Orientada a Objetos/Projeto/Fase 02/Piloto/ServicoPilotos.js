import Piloto from './Piloto.js';
import { validarOpcaoMenu, pegarEntradaUsuario } from '../utils.js'

export default class ServicoPiloto {
    #pilotos

    constructor () {
        this.#pilotos = []
    }

    cadastrarPiloto () {
        console.log(`\n--- Cadastro de Pilotos ---`)

        const matricula = this.#pegarMatricula()
        const nome = pegarEntradaUsuario('Qual o nome do piloto?')
        const habilitacaoAtiva = this.#pegarStatusHabilitacao()

        const piloto = new Piloto(matricula, nome, habilitacaoAtiva)

        this.#pilotos.push(piloto)

        console.log('Piloto cadastrado com sucesso!')
        console.log(`Piloto - ${piloto.toString()}`)
    }

    #pegarMatricula () {
        const matricula = pegarEntradaUsuario('Qual a matricula do novo piloto?')

        if (this.checarSePilotoExiste(matricula)) {
            console.log(`Piloto ${matricula} já está cadastrado...`)
            return this.#pegarMatricula()
        }

        return matricula
    }

    #pegarStatusHabilitacao () {
        const pergunta = 'Qual o status da habilitacao?' +
            '\n1) Ativa' +
            '\n2) Inativa'

        const status = Number(pegarEntradaUsuario(pergunta))

        if (!validarOpcaoMenu(status, 1, 2)) {
            console.log('Por favor selecione um status válido...')
            return this.#pegarStatusHabilitacao()
        }

        return status === 1
    }

    checarSePilotoExiste (matricula) {
        return this.#pilotos.findIndex(a => a.matricula() === matricula) != -1
    }

    listarPilotos () {
        console.log(`\n--- Lista de Pilotos ---`)
        for (const piloto of this.#pilotos) {
            console.log(`- ${piloto.toString()}`)
        }
    }
}