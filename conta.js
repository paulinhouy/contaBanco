function Conta(agencia,conta,saldo){
    this.agencia = agencia;
    this.conta = conta;
    this._saldo = saldo
}

Conta.prototype.sacar= (valor) =>{
if (this.saldo <= valor){
    console.log('saldo insuficiente')
this.verSaldo()
return;

}
this.verSaldo()
this.saldo -= valor
}

Conta.prototype.depositar = (valor) =>{

}

Conta.prototype.verSaldo = () =>{

}