const contaBancaria ={
    titular: "Bernardo",
    saldo: 100,
    depositar: function(valor){
        this.saldo += valor;
    },
    sacar: function(valor){
        this.saldo -= valor;
    },
    verSaldo : function(){
        return console.log(this.saldo);
    }
}

contaBancaria.verSaldo();
contaBancaria.depositar(200);
contaBancaria.verSaldo();
contaBancaria.sacar(100);
contaBancaria.verSaldo();