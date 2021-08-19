import { ContaCorrente } from './ContaCorrente.js';
import { ContaPoupanca } from './ContaPoupanca.js';
import { Cliente } from './Cliente.js';

const cliente1 = new Cliente('Maxsuel', 11122233344);
const contaCorrenteMaxsuel = new ContaCorrente(cliente1, 102);
const contaPoupancaMaxsuel = new ContaPoupanca(500, cliente1, 102);

console.log(contaCorrenteMaxsuel);
console.log(contaPoupancaMaxsuel);
