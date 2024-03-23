class ErroPiloto extends Error {
    constructor (mensagem) {
        super(`Piloto - ${mensagem}`);
    }
}

export class CampoNaoRecebido extends ErroPiloto {
    constructor (campo) {
        super (`não é possível criar o piloto sem o campo ${campo}`)
    }
}
