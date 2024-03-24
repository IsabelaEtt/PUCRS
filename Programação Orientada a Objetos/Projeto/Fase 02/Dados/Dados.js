import nReadlines from 'n-readlines'
import fs from 'fs'
import { tiposDados } from '../Utils/constantes.js'
import * as Erros from '../Erros/ErroDados.js'

export default class Dados {
    lerDados (nomeDado) {
        if (!tiposDados.has(nomeDado)) { throw new Erros.TipoInvalido(nomeDado, tiposDados.keys()) }
        const info = tiposDados.get(nomeDado)
        const arquivo = new nReadlines(info.nome)

        const headersEsperados = info.headers.join(',')
        const headersArquivo = arquivo.next()
        if (headersArquivo != headersEsperados) { throw new Erros.HeadersInvalido(headersArquivo, headersEsperados) }

        let buf = arquivo.next()
        const dadosRecuperados = []

        while(buf = arquivo.next()) {
            const linha = buf.toString('utf8');
            const campos = linha.split(',');

            const novoItem = {}
            for (let i = 0; i < campos.length; i++) {
                const header = info.headers[i]
                novoItem[header] = campos[i]
            }

            dadosRecuperados.push(novoItem)
        }

        return dadosRecuperados
    }

    gravarDados (nomeDado, dados) {
        if (!tiposDados.has(nomeDado)) { throw new Erros.TipoInvalido(nomeDado, tiposDados.keys()) }
        const info = tiposDados.get(nomeDado)
        const headers = info.headers

        let novoArquivo = headers.join(',') + '\n'

        for (const item of dados) {
            let novaLinha = ''
            for (let i = 0; i < headers.length; i++) {
                novaLinha += item[headers[i]] === undefined ? '' : item[headers[i]]
                if (i < headers.length - 1) { novaLinha += ',' }
            }

            novaLinha += '\n'
            novoArquivo += novaLinha
        }

        fs.writeFileSync(info.nome, novoArquivo)
    }
}