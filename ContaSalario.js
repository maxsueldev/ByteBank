export class ContaSalario extends Conta {
    constructor(cliente, agencia) {
        super(0, cliente, agencia);
    }

    sacar(valor) {
        let taxa = 1.02;
        return this._sacar(valor, taxa);
    }
}