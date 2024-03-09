import AeronaveParticular from './AeronaveParticular.js';
import AeronaveComercialPessoas from './AeronaveComercialPessoas.js';
import AeronaveComercialCarga from './AeronaveComercialCarga.js';
import { validarOpcaoMenu, pegarEntradaUsuario } from '../utils.js'

export default class ServicoAeronaves {
    #aeronaves

    constructor () {
        this.#aeronaves = []
    }

    cadastrarAeronave () {
        console.log(`\n--- Cadastro de Aeronaves ---`)

        const prefixo = this.#pegarPrefixo()
        const tipo = this.#pegarTipo()
        const velocidade = this.#pegarVelocidade()
        const autonomia = this.#pegarAutonomia()

        let aeronave;

        if (tipo === 1) {
            const respManutencao = pegarEntradaUsuario('Qual o nome da empresa responsável pela manutenção?')
            aeronave = new AeronaveParticular(prefixo, velocidade, autonomia, respManutencao)
        } else {
            const nomeCIA = pegarEntradaUsuario('Qual o nome da companhia aérea?')

            if (tipo === 2) {
                const maxPassageiros = this.#pegarMaxPassageiros()
                aeronave = new AeronaveComercialPessoas(prefixo, velocidade, autonomia, nomeCIA, maxPassageiros)
            }
    
            if (tipo === 3) {
                const pesoMax = this.#pegarPesoMax()
                aeronave = new AeronaveComercialCarga(prefixo, velocidade, autonomia, nomeCIA, pesoMax)
            }
        }

        this.#aeronaves.push(aeronave)

        console.log('Aeronave cadasrada com sucesso!')
        console.log(`Aeronave - ${aeronave.toString()}`)
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

    checarSeAeronaveExiste(prefixo) {
        return this.#aeronaves.findIndex(a => a.prefixo() === prefixo) != -1
    }

    listarAeronaves () {
        console.log(`\n--- Lista de Aeronaves ---`)
        for (const aeronave of this.#aeronaves) {
            console.log(`- ${aeronave.toString()}`)
        }
    }
}