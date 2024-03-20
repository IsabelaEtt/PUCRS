import nReadlines from "n-readlines"

// funcionando igual ao comando cat `cat texto.txt`
const narq = 'texto.txt'
const arq = new nReadlines(narq)

let buf = ''
while (buf = arq.next()) {
    let linha = buf.toString('utf8')
    console.log('LINHA:', linha)
    for (const dado of linha.split(',')) {
        console.log('- ', dado.trim())
    }
}

// Para o projeto, salvar os dados em csv
// Criar uma classe responsável por ler csvs, recebe por param dicionario dos campos as classes de servicos recebem array dos dados lidos e tratam para salvar da forma certa