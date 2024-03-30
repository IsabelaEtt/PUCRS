class ErroPlanoDeVoo extends Error {
    constructor (mensagem) {
        super(`Plano de Voo - ${mensagem}`);
    }
}

export class CampoNaoRecebido extends ErroPlanoDeVoo {
    constructor (campo) {
        super (`não é possível criar o plano de voo sem o campo ${campo}`)
    }
}