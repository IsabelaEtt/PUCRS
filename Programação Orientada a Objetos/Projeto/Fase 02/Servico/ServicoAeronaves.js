import AeronaveParticular from '../Aeronave/AeronaveParticular.js';
import AeronaveComercialPessoas from '../Aeronave/AeronaveComercialPessoas.js';
import AeronaveComercialCarga from '../Aeronave/AeronaveComercialCarga.js';
import Dados from '../Dados/Dados.js'
import { validarOpcaoMenu, pegarEntradaUsuario } from '../utils.js'
import { tiposAeronave, tipoAeronaveComercialCarga, tipoAeronaveComercialPessoas, tipoAeronaveParticular } from '../Utils/constantes.js'
import * as validar from '../Utils/validarDados.js'

export default class ServicoAeronaves {
    #aeronaves
    #dados

    constructor () {
        this.#aeronaves = []
        this.#dados = new Dados()

        this.#pegarAeronaves()
    }

    cadastrarAeronave () {
        console.log(`\n--- Cadastro de Aeronaves ---`)

        const aeronave = {
            prefixo: this.#pegarPrefixo(),
            velocidade: this.#pegarVelocidade(),
            autonomia: this.#pegarAutonomia()
        }

        const tipo = this.#pegarTipo()

        let ClasseAeronave

        if (tipo === 1) {
            aeronave.respManutencao = pegarEntradaUsuario('Qual o nome da empresa responsável pela manutenção?')
            ClasseAeronave = AeronaveParticular
        } else {
            aeronave.nomeCIA = pegarEntradaUsuario('Qual o nome da companhia aérea?')

            if (tipo === 2) {
                aeronave.maxPassageiros = this.#pegarMaxPassageiros()
                ClasseAeronave = AeronaveComercialPessoas
            }
    
            if (tipo === 3) {
                aeronave.pesoMax = this.#pegarPesoMax()
                ClasseAeronave = AeronaveComercialCarga
            }
        }

        this.#criarInstanciaAeronave(ClasseAeronave, aeronave)

    }

    #pegarPrefixo () {
        const prefixo = pegarEntradaUsuario('Qual o prefixo da nova aeronave?')

        if (this.checarSeAeronaveExiste(prefixo)) {
            console.log(`Aeronave ${prefixo} já está cadastrada...`)
            return this.#pegarPrefixo()
        }

        return prefixo
    }

    #pegarTipo () {
        const pergunta = 'Qual o tipo da aeronave?' +
            '\n1) Particular Pequeno Porte' +
            '\n2) Comercial de Passageiros' +
            '\n3) Comercial de Carga'

        const tipo = Number(pegarEntradaUsuario(pergunta))

        if (!validarOpcaoMenu(tipo, 1, 3)) {
            console.log('Por favor selecione um tipo válido...')
            return this.#pegarTipo()
        }

        return tipo
    }

    #pegarVelocidade () {
        const velocidade = Number(pegarEntradaUsuario('Qual a velocidade da aeronave (km/h)?'))

        if (isNaN(velocidade) || velocidade < 1) {
            console.log('Por favor informe uma velocidade válida...')
            return this.#pegarVelocidade()
        }

        return velocidade
    }

    #pegarAutonomia () {
        const autonomia = Number(pegarEntradaUsuario('Qual a autonomia da aeronave (km)?'))

        if (isNaN(autonomia) || autonomia < 1) {
            console.log('Por favor informe uma autonomia válida...')
            return this.#pegarAutonomia()
        }

        return autonomia
    }

    #pegarMaxPassageiros () {
        const maxPassageiros = Number(pegarEntradaUsuario('Qual a quantidade máxima de passageiros permitida?'))

        if (isNaN(maxPassageiros) || maxPassageiros < 1 || !Number.isInteger(maxPassageiros)) {
            console.log('Por favor informe um número válido de passageiros...')
            return this.#pegarMaxPassageiros()
        }

        return maxPassageiros
    }

    #pegarPesoMax () {
        const pesoMax = Number(pegarEntradaUsuario('Qual o peso máximo suportado pela aeronave (toneladas)?'))

        if (isNaN(pesoMax) || pesoMax < 1) {
            console.log('Por favor informe um peso válido...')
            return this.#pegarPesoMax()
        }

        return pesoMax
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
           
            if (!validar.validarTipo(tipo, tiposAeronave)) {
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