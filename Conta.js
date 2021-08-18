import { Cliente } from './Cliente.js';

export class Conta {
  constructor(saldoInicial, cliente, agencia) {
    if (this.constructor == Conta) {
      throw new Error("Você não deveria instanciar um objeto do tipo Conta diretamente, pois é uma classe abstrata");
    }

    this._saldo = saldoInicial;
    this._cliente = cliente;
    this._agencia = agencia;
  }

  get saldo() {
    return this._saldo;
  }

  get cliente() {
    return this._cliente;
  }

  get agencia() {
    return this._agencia;
  }

  set cliente(cliente) {
    if (cliente instanceof Cliente) {
      this._cliente = cliente;
      return cliente;
    }
  }

  sacar(valor) {
    throw new Error("O método sacar da conta é abstrato");
  }

  _sacar(valor, taxa) {
    const valorSacado = valor * taxa;
    if (this._saldo >= valorSacado) {
      this._saldo -= valorSacado;
      return valorSacado;
    }
    return 0;
  }

  depositar(valor) {
    this._saldo += valor;
  }

  transferir(valor, conta) {
    const valorSacado = this.sacar(valor);
    conta.depositar(valorSacado);
  }

}