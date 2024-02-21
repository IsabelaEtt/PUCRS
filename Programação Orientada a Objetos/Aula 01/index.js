import promptsync from 'prompt-sync'
const prompt = promptsync({ sigint: true })

const produtos = [
    {
        nome: 'sanduiche',
        custo: 12,
        desconto: {
            qntMin: 10,
            porcentagem: 0.2
        },
        consumo: {
            qnt: 0,
            valor: 0
        }
    },
    {
        nome: 'suco',
        custo: 5.2,
        desconto: {
            qntMin: 10,
            porcentagem: 0.2
        },
        consumo: {
            qnt: 0,
            total: 0
        }
    }
]

let valorTotal = 0

for (const produto of produtos) {
    const qnt = Number(prompt(`Quantos ${produto.nome}s foram consumidos? `))
    
    let total = produto.custo * qnt
    if (produto.desconto.qntMin <= qnt) { total -= total*produto.desconto.porcentagem }

    valorTotal += total

    produto.consumo = {
        qnt,
        total
    }
}


console.log('\nRECIBO')

for (const produto of produtos) {
    console.log(`- ${produto.nome.toUpperCase()} R$${produto.custo} - quantidade: ${produto.consumo.qnt} - total: ${produto.consumo.total}`)

}

console.log(`TOTAL: ${valorTotal}`)
