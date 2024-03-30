import PlanoDeVoo from '../PlanoDeVoo/PlanoDeVoo.js';
import moment from 'moment';

export default class ServicoPlanosDeVoo {
    #planosDeVoo
    #dados
    #prompt
    #servicoAeronaves
    #servicoPilotos
    #servicoAerovias

    constructor (dados, prompt, { servicoAeronaves, servicoPilotos, servicoAerovias }) {
        this.#planosDeVoo = []
        this.#dados = dados
        this.#prompt = prompt
        this.#servicoAeronaves = servicoAeronaves
        this.#servicoPilotos = servicoPilotos
        this.#servicoAerovias = servicoAerovias

        this.#pegarPlanosDeVoo()
    }

    cadastrarPlanoDeVoo () {
        console.log(`\n--- Cadastro de Plano de Voo ---`)

        const { matriculaPiloto, habilitacaoAtivaPiloto } = this.#pegarPiloto()
        const { prefixoAeronave, velocidadeAeronave, autonomiaAeronave, altitudesPermitidasAeronave, horariosPermitidosAeronave } = this.#pegarAeronave()
        const { idAerovia, tamanhoAerovia } = this.#pegarAerovia()
        const dataVoo = this.#pegarDataVoo()

        const planoDeVoo = {
            matriculaPiloto,
            habilitacaoAtivaPiloto,
            prefixoAeronave,
            velocidadeAeronave,
            autonomiaAeronave,
            altitudesPermitidasAeronave,
            horariosPermitidosAeronave,
            idAerovia,
            tamanhoAerovia,
            dataVoo,
            altitudeVoo: this.#prompt.pedirNumero('Qual vai ser a altitude do voo?', 25, 35, true) * 1000
        }

        this.#criarInstanciaPlanoDeVoo(planoDeVoo)
    }

    #pegarPiloto () {
        const matriculaPiloto = this.#prompt.perguntar('Qual a matricula do piloto que vai realizar o voo?')
        const dadosPiloto = this.#consultarPiloto(matriculaPiloto)

        if (!dadosPiloto) {
            console.log('Piloto não encontrado! Por favor, insira uma matricula de piloto válida.')
            return this.#pegarPiloto()
        }

        return dadosPiloto
    }

    #consultarPiloto (matriculaPiloto) {
        return this.#servicoPilotos.pegarPilotoPorMatricula(matriculaPiloto) 
    }

    #pegarAeronave () {
        const prefixoAeronave = this.#prompt.perguntar('Qual o prefixo da aeronave que vai ser utilizada no voo?')
        const dadosAeronave = this.#consultarAeronave(prefixoAeronave)

        if (!dadosAeronave) {
            console.log('Aeronave não encontrada! Por favor, insira um prefixo de aeronave válida.')
            return this.#pegarAeronave()
        }

        return dadosAeronave
    }

    #consultarAeronave (prefixoAeronave) {
        return this.#servicoAeronaves.pegarAeronavePorPrefixo(prefixoAeronave) 
    }

    #pegarAerovia () {
        const idAerovia = this.#prompt.perguntar('Qual o id da aerovia que vai ser utilizada no voo?')
        const dadosAerovia = this.#consultarAerovia(idAerovia)

        if (!dadosAerovia) {
            console.log('Aerovia não encontrada! Por favor, insira um id de aerovia válido.')
            return this.#pegarAerovia()
        }

        return dadosAerovia
    }

    #consultarAerovia (idAerovia) {
        return this.#servicoAerovias.pegarAeroviaPorId(idAerovia) 
    }

    #pegarDataVoo () {
        const mes = this.#prompt.pedirNumero('Qual mês vai ser o voo?', 1, 12, true)
        const dia = this.#prompt.pedirNumero('Qual dia vai ser o voo?', 1, 31, true)
        const hora = this.#prompt.pedirNumero('Qual hora vai ser o voo?', 0, 23, true)
        const minuto = this.#prompt.pedirNumero('Qual minuto vai ser o voo?', 0, 59, true)

        const dataVoo = moment(`${mes}-${dia} ${hora}:${minuto}`, "M-D H:m")
        if (!dataVoo.isValid()) {
            console.log('Data inválida! Por favor, insira uma data válida.')
            return this.#pegarDataVoo()
        }

        return dataVoo
    }

    #pegarPlanosDeVoo() {
        console.log('\nPegando planos de voo salvos...')

        let planosDeVooSalvos
        try { planosDeVooSalvos = this.#dados.lerDados('planoDeVoo')
        } catch(e) { return console.log(`Não foi possível pegar os planos de voo salvos: ${e.message}`) }

        for (const planoDeVoo of planosDeVooSalvos) {
            const { matriculaPiloto, prefixoAeronave, idAerovia, data } = planoDeVoo

            const dadosPiloto = this.#consultarPiloto(matriculaPiloto)
            if (!dadosPiloto) {
                console.log(`Piloto ${matriculaPiloto} não encontrado, pulando...`)
                continue;
            }
            planoDeVoo.habilitacaoAtivaPiloto = dadosPiloto.habilitacaoAtivaPiloto


            const dadosAeronave = this.#consultarAeronave(prefixoAeronave)
            if (!dadosAeronave) {
                console.log(`Aeronave ${prefixoAeronave} não encontrada, pulando...`)
                continue;
            }
            planoDeVoo.prefixoAeronave = dadosAeronave.prefixoAeronave
            planoDeVoo.velocidadeAeronave = dadosAeronave.velocidadeAeronave
            planoDeVoo.autonomiaAeronave = dadosAeronave.autonomiaAeronave
            planoDeVoo.altitudesPermitidasAeronave = dadosAeronave.altitudesPermitidasAeronave
            planoDeVoo.horariosPermitidosAeronave = dadosAeronave.horariosPermitidosAeronave


            const dadosAerovia = this.#consultarAerovia(idAerovia)
            if (!dadosAerovia) {
                console.log(`Aerovia ${idAerovia} não encontrada, pulando...`)
                continue;
            }
            planoDeVoo.tamanhoAerovia = dadosAerovia.tamanhoAerovia

            planoDeVoo.dataVoo = moment(planoDeVoo.dataVoo)
            if (!planoDeVoo.dataVoo.isValid()) {
                console.log('Data de voo inválida, pulando...')
                continue
            }

            this.#criarInstanciaPlanoDeVoo(planoDeVoo)
        }
    }

    #criarInstanciaPlanoDeVoo (params) {
        let novoPlanoDeVoo
        try { novoPlanoDeVoo = new PlanoDeVoo(params)
        } catch(e) { return console.log(`Não foi possível criar o plano de voo: ${e.message}`) }

        this.#planosDeVoo.push(novoPlanoDeVoo)
        console.log(`Plano de voo ${novoPlanoDeVoo.id} cadastrado com sucesso!`)
    }

    listarPlanosDeVoo () {
        console.log(`\n--- Lista de Planos de Voo ---`)
        for (const planoDeVoo of this.#planosDeVoo) {
            console.log(`- ${planoDeVoo.toString()}`)
        }
    }

    salvarDados () {
        console.log('Salvando planos de voo...')

        try { this.#dados.gravarDados('planoDeVoo', this.#planosDeVoo)
        } catch(e) { return console.log(`Não foi possível salvar os planos de voo: ${e.message}`) }
    }

    buscarPlanoDeVoo () {
        const id = this.#prompt.pedirNumero('Qual o id do plano de voo?', undefined, undefined, true)

        const planoDeVoo = this.#planosDeVoo.find(p => p.id === id)
        if (!planoDeVoo) { 
            console.log(`\nNão existe nenhum plano de voo com esse id :(`)
            return
        }

        console.log(`\nPlano de voo: ${planoDeVoo.toString()}`)
    }
}