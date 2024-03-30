import Aerovia from '../Aerovia/Aerovia.js'

export default class ServicoAerovias {
    #aerovias
    #dados
    #prompt

    constructor (dados, prompt) {
        this.#aerovias = []
        this.#dados = dados
        this.#prompt = prompt

        this.#pegarAerovias()
    }

    cadastrarAerovia () {
        console.log(`\n--- Cadastro de Aerovias ---`)

        const aerovia = {
            id: this.#pegarId(),
            origem: this.#prompt.perguntar('Qual o aeroporto de origem?'),
            destino: this.#prompt.perguntar('Qual o aeroporto de destino?'),
            tamanho: this.#prompt.pedirNumero('Qual o tamanho da aerovia (km)?', 1)
        }

        this.#criarInstanciaAerovia(aerovia)
    }

    #pegarId () {
        const id = this.#prompt.perguntar('Qual o identificador da nova aerovia?')

        if (this.#checarSeAeroviaExiste(id)) {
            console.log(`Aerovia ${id} já está cadastrada...`)
            return this.#pegarId()
        }

        return id
    }

    #checarSeAeroviaExiste (id) {
        return this.#aerovias.findIndex(a => a.id === id) != -1
    }

    #pegarAerovias () {
        console.log('\nPegando aerovias salvas...')

        let aeroviasSalvas
        try { aeroviasSalvas = this.#dados.lerDados('aerovia')
        } catch(e) { return console.log(`Não foi possível pegar as aerovias salvas: ${e.message}`) }

        for (const aerovia of aeroviasSalvas) {
            if (this.#checarSeAeroviaExiste(aerovia.id)) {
                console.log(`Aerovia ${aerovia.id} já está cadastrada, pulando...`)
                continue;
            }

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

    listarAerovias () {
        console.log(`\n--- Lista de Aerovias ---`)
        for (const aerovia of this.#aerovias) {
            console.log(`- ${aerovia.toString()}`)
        }
    }

    salvarDados () {
        console.log('Salvando aerovias...')

        try { this.#dados.gravarDados('aerovia', this.#aerovias)
        } catch(e) { return console.log(`Não foi possível salvar as aerovias: ${e.message}`) }
    }

    pegarAeroviaPorId (id) {
        const aerovia = this.#aerovias.find(a => a.id === id)
        if (!aerovia) { return }

        return {
            idAerovia: aerovia.id,
            tamanhoAerovia: aerovia.tamanho
        }
    }

    listarAeroviasEntreDoisAeroportos () {
        const origem = this.#prompt.perguntar('Qual o aeroporto de origem?')
        const destino = this.#prompt.perguntar('Qual o aeroporto de destino?')

        const aeroviasEncontradas = this.#aerovias.filter(a => a.origem == origem && a.destino == destino)
        if (aeroviasEncontradas.length == 0) { 
            console.log(`\nNão existe nenhuma aerovia para esse percurso :(`)
            return
        }

        console.log(`\n--- Lista de Aerovias entre ${origem} e ${destino} ---`)
        for (const aerovia of aeroviasEncontradas) {
            console.log(`- ${aerovia.toString()}`)
        }
    }
}