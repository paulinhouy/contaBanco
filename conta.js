function Conta(agencia,conta,saldo){
    this.agencia = agencia;
    this.conta = conta;
    this._saldo = saldo
}

Conta.prototype.sacar= fuunction (valor){
if (this.saldo <= valor){
    console.log('saldo insuficiente')
this.verSaldo()
return;

}
this.verSaldo()
this.saldo -= valor
}

Conta.prototype.depositar = function (valor){
    this.verSaldo()
    this.saldo += valor;


}

Conta.prototype.verSaldo = () {
    return saldo

}
const conta1 = new Conta(11,22,10)
conta1.depositar(10)
console.log(conta1)