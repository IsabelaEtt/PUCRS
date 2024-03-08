import Piloto from './Piloto.js';
import AeronaveParticular from './AeronaveParticular.js';
import AeronaveComercialPessoas from './AeronaveComercialPessoas.js';
import AeronaveComercialCarga from './AeronaveComercialPessoas copy.js';

const piloto = new Piloto('Isabela Canelas Ett', '1011ICE', true)
console.log(piloto.toString())

const aeronaveParticular = new AeronaveParticular('PV-ICE', 450, 50, 'Ettechnologies')
console.log(aeronaveParticular.toString())

const aeronaveComercialPessoas = new AeronaveComercialPessoas('CP-ICE', 450, 50, 'Companhia Isa', 500)
console.log(aeronaveComercialPessoas.toString())

const aeronaveComercialCarga = new AeronaveComercialCarga('CC-ICE', 450, 50, 'Companhia Isa', 5)
console.log(aeronaveComercialCarga.toString())