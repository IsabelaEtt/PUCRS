class ErroDado extends Error {
    constructor (mensagem) {
        super(`Dados - ${mensagem}`);
    }
}

export class TipoInvalido extends ErroDado {
    constructor (valor, [...tiposPermitidos]) {
        console.log('tiposPermitidos', tiposPermitidos)
        super(`tipo ${valor} de dado é inválido, deve ser ${tiposPermitidos.join('|')}`)
    }
}

export class HeadersInvalido extends ErroDado {
    constructor (headersArquivo, headersEsperados) {
        super(`arquivo csv com headers errados, recebeu [${headersArquivo}], mas deveria ser [${headersEsperados}]`)
    }
}