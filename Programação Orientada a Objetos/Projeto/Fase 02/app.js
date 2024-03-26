import Menu from './Menu/Menu.js'
import Dados from './Dados/Dados.js'
import Prompt from './Prompt/Prompt.js'
import ServicoAeronaves from './Servico/ServicoAeronaves.js'
import ServicoPilotos from './Servico/ServicoPilotos.js'
import ServicoAerovias from './Servico/ServicoAerovias.js'
import promptsync from 'prompt-sync'

const dados = new Dados()

const terminal = promptsync({ sigint: true })
const prompt = new Prompt(terminal)

const servicos = {
    servicoAeronaves: new ServicoAeronaves(dados, prompt),
    servicoPilotos: new ServicoPilotos(dados, prompt),
    servicoAerovias: new ServicoAerovias(dados, prompt)
}

const menu = new Menu(servicos, prompt);

menu.iniciar()