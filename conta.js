function Conta(agencia,conta,saldo){
    this.agencia = agencia;
    this.conta = conta;
    this._saldo = saldo
}

Conta.prototype.sacar = function (valor){
if (this._saldo <= valor){
    console.log('saldo insuficiente')


}
this.verSaldo()
this._saldo -= valor
}

Conta.prototype.depositar = function (valor){
    this.verSaldo()
    this._saldo += valor;


}

Conta.prototype.verSaldo = function() {
    

}
const conta1 = new Conta(11,22,10)
conta1.depositar(20)
conta1.sacar(35)
console.log(conta1)