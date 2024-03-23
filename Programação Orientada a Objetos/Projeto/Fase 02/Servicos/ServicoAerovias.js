import Aerovia from '../Aerovia/Aerovia.js'
import { pegarEntradaUsuario } from '../utils.js'

export default class ServicoAerovias {
    #aerovias

    constructor () {
        this.#aerovias = []
    }

    cadastrarAerovia () {
        console.log(`\n--- Cadastro de Aerovias ---`)

        const id = this.#pegarId()
        const origem = pegarEntradaUsuario('Qual o aeroporto de origem?')
        const destino = pegarEntradaUsuario('Qual o aeroporto de destino?')
        const tamanho = this.#pegarTamanho()

        const aerovia = new Aerovia(id, origem, destino, tamanho)

        this.#aerovias.push(aerovia)

        console.log('Aerovia cadasrada com sucesso!')
        console.log(`Aerovia - ${aerovia.toString()}`)
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
        return this.#aerovias.findIndex(a => a.id() === id) != -1
    }

    listarAerovias () {
        console.log(`\n--- Lista de Aerovias ---`)
        for (const aerovia of this.#aerovias) {
            console.log(`- ${aerovia.toString()}`)
        }
    }
}