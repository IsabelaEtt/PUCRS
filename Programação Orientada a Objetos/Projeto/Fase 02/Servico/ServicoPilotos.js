import Piloto from '../Piloto/Piloto.js';
import Dados from '../Dados/Dados.js'
import { validarOpcaoMenu, pegarEntradaUsuario } from '../utils.js'

export default class ServicoPiloto {
    #pilotos
    #dados

    constructor () {
        this.#pilotos = []
        this.#dados = new Dados()

        this.#pegarPilotos()
    }

    cadastrarPiloto () {
        console.log(`\n--- Cadastro de Pilotos ---`)

        const piloto = {
            matricula: this.#pegarMatricula(),
            nome: pegarEntradaUsuario('Qual o nome do piloto?'),
            habilitacaoAtiva: this.#pegarStatusHabilitacao()
        }

        this.#criarInstanciaPiloto(piloto)
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
        return this.#pilotos.findIndex(a => a.matricula === matricula) != -1
    }

    listarPilotos () {
        console.log(`\n--- Lista de Pilotos ---`)
        for (const piloto of this.#pilotos) {
            console.log(`- ${piloto.toString()}`)
        }
    }

    #pegarPilotos () {
        console.log('\nPegando pilotos salvos...')

        let pilotosSalvos
        try { pilotosSalvos = this.#dados.lerDados('piloto')
        } catch(e) { return console.log(`Não foi possível pegar as pilotos salvos: ${e.message}`) }

        for (const piloto of pilotosSalvos) {
            this.#criarInstanciaPiloto(piloto)
        }
    }

    #criarInstanciaPiloto (params) {
        let novoPiloto
        try { novoPiloto = new Piloto(params)
        } catch(e) { return console.log(`Não foi possível criar o piloto ${params.matricula}: ${e.message}`) }

        this.#pilotos.push(novoPiloto)
        console.log(`Piloto ${novoPiloto.matricula} cadastrado com sucesso!`)
    }

    salvarDados () {
        console.log('Salvando pilotos...')

        try { this.#dados.gravarDados('piloto', this.#pilotos)
        } catch(e) { return console.log(`Não foi possível salvar os pilotos: ${e.message}`) }
    }
}