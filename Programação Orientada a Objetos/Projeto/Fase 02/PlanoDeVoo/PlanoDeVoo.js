import * as Erros from '../Erros/ErroPlanoDeVoo.js'
import moment from 'moment';

export default class PlanoDeVoo {
    #id
    #matriculaPiloto
    #prefixoAeronave
    #idAerovia
    #data
    #altitude
    #slotHorarios
    #cancelado

    static #idGen = 0
    static #agendamentoAerovias = {}
    // agendamentoAerovias = {
    //     aerovia: {
    //         altitude: {
    //             dia: {
    //                 hora
    //             }
    //         }
    //     }
    // }

    constructor ({
        matriculaPiloto,
        habilitacaoAtivaPiloto = false,
        prefixoAeronave,
        velocidadeAeronave,
        autonomiaAeronave,
        altitudesPermitidasAeronave,
        horariosPermitidosAeronave,
        idAerovia,
        tamanhoAerovia,
        dataVoo,
        altitudeVoo
    }) {
        if (!matriculaPiloto) { throw new Erros.CampoNaoRecebido('matriculaPiloto') }
        if (!prefixoAeronave) { throw new Erros.CampoNaoRecebido('prefixoAeronave') }
        if (!velocidadeAeronave) { throw new Erros.CampoNaoRecebido('velocidadeAeronave') }
        if (!autonomiaAeronave) { throw new Erros.CampoNaoRecebido('autonomiaAeronave') }
        if (altitudesPermitidasAeronave?.length == 0) { throw new Erros.CampoNaoRecebido('autonomiaAeronave') }
        if (horariosPermitidosAeronave?.length == 0) { throw new Erros.CampoNaoRecebido('horariosPermitidosAeronave') }
        if (!idAerovia) { throw new Erros.CampoNaoRecebido('idAerovia') }
        if (!tamanhoAerovia) { throw new Erros.CampoNaoRecebido('tamanhoAerovia') }
        if (!dataVoo) { throw new Erros.CampoNaoRecebido('dataVoo') }
        if (!altitudeVoo) { throw new Erros.CampoNaoRecebido('altitudeVoo') }

        PlanoDeVoo.#idGen++
        this.#id = PlanoDeVoo.#idGen
        this.#matriculaPiloto = matriculaPiloto
        this.#prefixoAeronave = prefixoAeronave
        this.#idAerovia = idAerovia
        this.#data = dataVoo
        this.#altitude = altitudeVoo
        this.#slotHorarios = []
        this.#cancelado = false

        // Regra: a habilitação do piloto tem de estar ativa
        if (!habilitacaoAtivaPiloto) {
            this.#cancelado = true
            console.log('O piloto selecionado está sem habilitação ativa, alterando status para cancelado...')
            return
        }

        // Regra: a aeronave tem de ter autonomia para voar o trecho (a autonomia tem de ser 10% maior que o tamanho da aerovia)
        const autonomiaMinimia = tamanhoAerovia + (tamanhoAerovia * 0.1)
        if (autonomiaAeronave < autonomiaMinimia) {
            this.#cancelado = true
            console.log('A aeronave selecionada não possui autonomia suficiente para o voo, alterando status para cancelado...')
            return
        }

        // Regra: a altitude escolhida tem de ser compatível com o tipo de aeronave
        if (!altitudesPermitidasAeronave.includes(altitudeVoo)) {
            this.#cancelado = true
            console.log('A aeronave selecionada não pode voar na altitude selecionada, alterando status para cancelado...')
            return
        }

        // Criando objetos no agendamento, caso não existam
        if (!PlanoDeVoo.#agendamentoAerovias[idAerovia]) { PlanoDeVoo.#agendamentoAerovias[idAerovia] = {} }
        if (!PlanoDeVoo.#agendamentoAerovias[idAerovia][altitudeVoo]) { PlanoDeVoo.#agendamentoAerovias[idAerovia][altitudeVoo] = {} }

        // Calculando tempo de viagem
        const tempoDeViagemEmMinutos = (tamanhoAerovia / velocidadeAeronave) * 60
        const slotFim = moment(dataVoo).add(tempoDeViagemEmMinutos, 'minutes').endOf('hour')

        // Pegando slots de horários necessários e checando se eles possuem agendamento
        this.#slotHorarios = []
        let possuiAgendamentoNoSlot = false
        for (const slot = moment(dataVoo); slot <= slotFim; slot.add(60, 'minutes')) {
            this.#slotHorarios.push(slot.hour())
        
            const dataSlot = slot.format("DD-MM-YYYY")
            if (!PlanoDeVoo.#agendamentoAerovias[idAerovia][altitudeVoo][dataSlot]) { PlanoDeVoo.#agendamentoAerovias[idAerovia][altitudeVoo][dataSlot] = {} }

            const horaSlot = slot.hour()
            if (PlanoDeVoo.#agendamentoAerovias[idAerovia][altitudeVoo][dataSlot][horaSlot]) { possuiAgendamento = true }
        }

        // Regra: não pode haver restrições de horário para o tipo de aeronave
        for (const horario of this.#slotHorarios) {
            if (!horariosPermitidosAeronave.includes(horario)) {
                this.#cancelado = true
                console.log('A aeronave selecionada não pode voar no horário selecionado, alterando status para cancelado...')
                return
            }
        }

        // Regra: os slots de horário necessários têm de estar livres.
        if (possuiAgendamentoNoSlot) {
            this.#cancelado = true
            console.log('A aerovia selecionada está ocupada na altitude e data selecionados, alterando status para cancelado...')
            return
        }

        // Registrando ocupamento das aerovias para plano de voo aprovado
        for (const slot = moment(dataVoo); slot <= slotFim; slot.add(60, 'minutes')) {
            const dataSlot = slot.format("DD-MM-YYYY")
            const horaSlot = slot.hour()

            PlanoDeVoo.#agendamentoAerovias[idAerovia][altitudeVoo][dataSlot][horaSlot] = true
        }
    }

    toString () {
        return `Plano de Voo - id: ${this.#id}; piloto: ${this.#matriculaPiloto}; aeronave: ${this.#prefixoAeronave}; ` +
            `data: ${this.#data.toISOString()}; aerovia: ${this.#idAerovia}; altitude: ${this.#altitude}; ` +
            `cancelado: ${this.#cancelado ? 'sim' : 'não'}`
    }
}