class ErroAerovia extends Error {
    constructor (mensagem) {
        super(`Aerovia - ${mensagem}`);
    }
}

export class TamanhoInvalido extends ErroAerovia {
    constructor (valor) {
        super(`tamanho ${valor} de aerovia é inválido, deve ser maior que 0 km`)
    }
}

export class CampoNaoRecebido extends ErroAerovia {
    constructor (campo) {
        super (`não é possível criar a aerovia sem o campo ${campo}`)
    }
}
