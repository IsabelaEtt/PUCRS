import promptsync from 'prompt-sync'
const prompt = promptsync({ sigint: true })

export function validarOpcaoMenu (opcao, opcaoMin, opcaoMax) {
    return !isNaN(opcao) && opcao >= opcaoMin && opcao <= opcaoMax && Number.isInteger(opcao)
}

export function pegarEntradaUsuario (pergunta) {
    console.log(`\n${pergunta}`)
    const resposta = prompt()

    return resposta
}
