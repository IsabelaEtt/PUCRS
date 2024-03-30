import Menu from './Menu/Menu.js'
import Dados from './Dados/Dados.js'
import Prompt from './Prompt/Prompt.js'
import ServicoAeronaves from './Servico/ServicoAeronaves.js'
import ServicoPilotos from './Servico/ServicoPilotos.js'
import ServicoAerovias from './Servico/ServicoAerovias.js'
import ServicoPlanosDeVoo from './Servico/ServicoPlanosDeVoo.js'
import promptsync from 'prompt-sync'

const dados = new Dados()

const terminal = promptsync({ sigint: true })
const prompt = new Prompt(terminal)

const servicoAeronaves = new ServicoAeronaves(dados, prompt)

const servicoPilotos = new ServicoPilotos(dados, prompt)

const servicoAerovias = new ServicoAerovias(dados, prompt)

const servicoPlanosDeVoo = new ServicoPlanosDeVoo(dados, prompt, { servicoAeronaves, servicoPilotos, servicoAerovias })

const menu = new Menu(prompt, { servicoAeronaves, servicoPilotos, servicoAerovias, servicoPlanosDeVoo });
menu.iniciar()