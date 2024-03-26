export default class Prompt {
    #terminal

    constructor (terminal) {
        this.#terminal = terminal
    }

    perguntar (pergunta) {
        console.log(`\n${pergunta}`)
        return this.#terminal()
    }

    pedirNumero (pergunta, valorMin, valorMax, precisaSerInteiro, erroPersonalizado) {
        const resposta = Number(this.perguntar(pergunta))

        let respostaValida = !isNaN(resposta)
        if (valorMin !== undefined) { respostaValida = respostaValida && resposta >= valorMin }
        if (valorMax !== undefined) { respostaValida = respostaValida && resposta <= valorMax }
        if (precisaSerInteiro) { respostaValida = respostaValida && Number.isInteger(resposta) }

        if (respostaValida) { return resposta }

        const mensagemDeErro = erroPersonalizado || `Por favor informe um número válido...`
        console.log(mensagemDeErro)
        
        return this.pedirNumero(pergunta, valorMin, valorMax, precisaSerInteiro, erroPersonalizado)
    }

    menuDeOpcoes (titulo, opcoes) {
        let pergunta = titulo
        for (let i = 0; i < opcoes.length; i ++) {
            pergunta += `\n${i+1}) ${opcoes[i]}`
        }

        const valorMin = 1
        const valorMax = opcoes.length
        const precisaSerInteiro = true
        const erroPersonalizado = 'Por favor selecione uma opção válida...'

        return this.pedirNumero(pergunta, valorMin, valorMax, precisaSerInteiro, erroPersonalizado)
    }
}
