import Aerovia from '../Aerovia/Aerovia.js'
import Dados from '../Dados/Dados.js'
import { pegarEntradaUsuario } from '../Utils/receberDados.js'

export default class ServicoAerovias {
    #aerovias
    #dados

    constructor () {
        this.#aerovias = []
        this.#dados = new Dados()

        this.#pegarAerovias()
    }

    cadastrarAerovia () {
        console.log(`\n--- Cadastro de Aerovias ---`)

        const aerovia = {
            id: this.#pegarId(),
            origem: pegarEntradaUsuario('Qual o aeroporto de origem?'),
            destino: pegarEntradaUsuario('Qual o aeroporto de destino?'),
            tamanho: this.#pegarTamanho()
        }

        this.#criarInstanciaAerovia(aerovia)
    }

    #pegarId () {
        const id = pegarEntradaUsuario('Qual o identificador da nova aerovia?')

        if (this.checarSeAeroviaExiste(id)) {
            console.log(`Aerovia ${id} já está cadastrada...`)
            return this.#pegarId()
        }

        return id
    }

    #pegarTamanho () {
        const tamanho = Number(pegarEntradaUsuario('Qual o tamanho da aerovia (km)?'))

        if (isNaN(tamanho) || tamanho < 1) {
            console.log('Por favor informe um tamanho válido...')
            return this.#pegarTamanho()
        }

        return tamanho
    }

    checarSeAeroviaExiste (id) {
        return this.#aerovias.findIndex(a => a.id === id) != -1
    }

    listarAerovias () {
        console.log(`\n--- Lista de Aerovias ---`)
        for (const aerovia of this.#aerovias) {
            console.log(`- ${aerovia.toString()}`)
        }
    }

    #pegarAerovias () {
        console.log('\nPegando aerovias salvas...')

        let aeroviasSalvas
        try { aeroviasSalvas = this.#dados.lerDados('aerovia')
        } catch(e) { return console.log(`Não foi possível pegar as aerovias salvas: ${e.message}`) }

        for (const aerovia of aeroviasSalvas) {
            this.#criarInstanciaAerovia(aerovia)
        }
    }

    #criarInstanciaAerovia (params) {
        let novaAerovia
        try { novaAerovia = new Aerovia(params)
        } catch(e) { return console.log(`Não foi possível criar a aerovia ${params.id}: ${e.message}`) }

        this.#aerovias.push(novaAerovia)
        console.log(`Aerovia ${novaAerovia.id} cadastrada com sucesso!`)
    }

    salvarDados () {
        console.log('Salvando aerovias...')

        try { this.#dados.gravarDados('aerovia', this.#aerovias)
        } catch(e) { return console.log(`Não foi possível salvar as aerovias: ${e.message}`) }
    }
}