import AeronaveParticular from '../Aeronave/AeronaveParticular.js';
import AeronaveComercialPessoas from '../Aeronave/AeronaveComercialPessoas.js';
import AeronaveComercialCarga from '../Aeronave/AeronaveComercialCarga.js';
import { tiposAeronave, tipoAeronaveComercialCarga, tipoAeronaveComercialPessoas, tipoAeronaveParticular } from '../Utils/constantes.js'

export default class ServicoAeronaves {
    #aeronaves
    #dados
    #prompt

    constructor (dados, prompt) {
        this.#aeronaves = []
        this.#dados = dados
        this.#prompt = prompt

        this.#pegarAeronaves()
    }

    cadastrarAeronave () {
        console.log(`\n--- Cadastro de Aeronaves ---`)

        const aeronave = {
            prefixo: this.#pegarPrefixo(),
            velocidade: this.#prompt.pedirNumero('Qual a velocidade da aeronave (km/h)?', 1),
            autonomia: this.#prompt.pedirNumero('Qual a autonomia da aeronave (km)?', 1)
        }

        const tipo = this.#pegarTipo()

        let ClasseAeronave

        if (tipo === 1) {
            aeronave.respManutencao = this.#prompt.perguntar('Qual o nome da empresa responsável pela manutenção?')
            ClasseAeronave = AeronaveParticular
        } else {
            aeronave.nomeCIA = this.#prompt.perguntar('Qual o nome da companhia aérea?')

            if (tipo === 2) {
                aeronave.maxPassageiros = this.#prompt.pedirNumero('Qual a quantidade máxima de passageiros permitida?', 1, undefined, true)
                ClasseAeronave = AeronaveComercialPessoas
            }
    
            if (tipo === 3) {
                aeronave.pesoMax = this.#prompt.pedirNumero('Qual o peso máximo suportado pela aeronave (toneladas)?', 1)
                ClasseAeronave = AeronaveComercialCarga
            }
        }

        this.#criarInstanciaAeronave(ClasseAeronave, aeronave)

    }

    #pegarPrefixo () {
        const prefixo = this.#prompt.perguntar('Qual o prefixo da nova aeronave?')

        if (this.checarSeAeronaveExiste(prefixo)) {
            console.log(`Aeronave ${prefixo} já está cadastrada...`)
            return this.#pegarPrefixo()
        }

        return prefixo
    }

    #pegarTipo () {
        const pergunta = 'Qual o tipo da aeronave?'
        const opcoes = [
            'Particular Pequeno Porte',
            'Comercial de Passageiros',
            'Comercial de Carga'
        ]
        
        return this.#prompt.menuDeOpcoes(pergunta, opcoes)
    }

    checarSeAeronaveExiste (prefixo) {
        return this.#aeronaves.findIndex(a => a.prefixo === prefixo) != -1
    }

    listarAeronaves () {
        console.log(`\n--- Lista de Aeronaves ---`)
        for (const aeronave of this.#aeronaves) {
            console.log(`- ${aeronave.toString()}`)
        }
    }

    #pegarAeronaves () {
        console.log('\nPegando aeronaves salvas...')

        let aeronavesSalvas
        try { aeronavesSalvas = this.#dados.lerDados('aeronave')
        } catch(e) { return console.log(`Não foi possível pegar as aeronaves salvas: ${e.message}`) }

        for (const aeronave of aeronavesSalvas) {
            const { prefixo, tipo } = aeronave

            if (this.checarSeAeronaveExiste(prefixo)) {
                console.log(`Aeronave ${prefixo} já está cadastrada, pulando...`)
            }
           
            if (!tiposAeronave.includes(tipo)) {
                console.log(`Aeronave ${prefixo} com tipo invalido, pulando...`)
            }

            let ClasseAeronave
            if (tipo == tipoAeronaveParticular) { ClasseAeronave = AeronaveParticular }
            if (tipo == tipoAeronaveComercialCarga) { ClasseAeronave = AeronaveComercialCarga }
            if (tipo == tipoAeronaveComercialPessoas) { ClasseAeronave = AeronaveComercialPessoas }

            this.#criarInstanciaAeronave(ClasseAeronave, aeronave)
        }
    }

    #criarInstanciaAeronave (ClasseAeronave, params) {
        let novaAeronave
        try { novaAeronave = new ClasseAeronave(params)
        } catch(e) { return console.log(`Não foi possível criar a aeronave ${params.prefixo}: ${e.message}`) }

        this.#aeronaves.push(novaAeronave)
        console.log(`Aeronave ${novaAeronave.prefixo} cadastrada com sucesso!`)
    }

    salvarDados () {
        console.log('Salvando aeronaves...')

        try { this.#dados.gravarDados('aeronave', this.#aeronaves)
        } catch(e) { return console.log(`Não foi possível salvar as aeronaves: ${e.message}`) }
    }
}