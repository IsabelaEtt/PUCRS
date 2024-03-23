class ErroAeronave extends Error {
    constructor (mensagem) {
        super(`Aeronave - ${mensagem}`);
    }
}

class ValorInvalido extends ErroAeronave {
    constructor (campo, valor, regra) {
        super(`${campo} ${valor} de aeronave é inválido, deve ser ${regra}`)
    }
}

export class TipoInvalido extends ValorInvalido {
    constructor (valor, tiposPermitidos) {
        super('tipo', valor, tiposPermitidos.join('|'))
    }
}

export class VelocidadeInvalida extends ValorInvalido {
    constructor (valor) {
        super('velocidade', valor, 'maior que 0 km/h')
    }
}

export class AutonomiaInvalida extends ValorInvalido {
    constructor (valor) {
        super('autonomia', valor, 'maior que 0 km')
    }
}

export class PesoMaxInvalido extends ValorInvalido {
    constructor (valor) {
        super('peso maximo', valor, 'maior que 0 toneladas')
    }
}

export class MaxPassageirosInvalido extends ValorInvalido {
    constructor (valor) {
        super('maximo de passageiros', valor, 'maior que 0 passageiros')
    }
}

export class CampoNaoRecebido extends ErroAeronave {
    constructor (campo) {
        super (`não é possível criar a aeronave sem o campo ${campo}`)
    }
}
