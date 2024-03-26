import Piloto from '../Piloto/Piloto.js';

export default class ServicoPiloto {
    #pilotos
    #dados
    #prompt

    constructor (dados, prompt) {
        this.#pilotos = []
        this.#dados = dados
        this.#prompt = prompt

        this.#pegarPilotos()
    }

    cadastrarPiloto () {
        console.log(`\n--- Cadastro de Pilotos ---`)

        const piloto = {
            matricula: this.#pegarMatricula(),
            nome: this.#prompt.perguntar('Qual o nome do piloto?'),
            habilitacaoAtiva: this.#prompt.menuDeOpcoes('Qual o status da habilitacao?', ['Ativa', 'Inativa']) === 1
        }

        this.#criarInstanciaPiloto(piloto)
    }

    #pegarMatricula () {
        const matricula = this.#prompt.perguntar('Qual a matricula do novo piloto?')

        if (this.checarSePilotoExiste(matricula)) {
            console.log(`Piloto ${matricula} já está cadastrado...`)
            return this.#pegarMatricula()
        }

        return matricula
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