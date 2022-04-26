    class contaBancaria {
        constructor(agencia, numero, tipo) {
            this.agencia = agencia
            this.numero = numero
            this.tipo = tipo
            this.saldo = 0
        }

        depositar(valor) {
            this._saldo = this._saldo + valor;
            return this._saldo;
        }

        get saldo(){
            return this._saldo
        }

        set saldo(valor) {
            this._saldo = valor
        }

        sacar(valor) {
            if(valor > this._saldo) {
                return 'Operação Negada'
            }
            this._saldo = this._saldo - valor

            return this._saldo
        }
    }

    class contaCorrente extends contaBancaria {
        constructor(agencia, numero, cartaoCredito) {
            super(agencia, numero)
            this.tipo = 'corrente'
            this.cartaoCredito = cartaoCredito
        }

        get cartaoCredito() {
            return this._cartaocredito
        }

        set cartaoCredito(valor) {
            this._cartaocredito = valor
        }
    }

    class contaPoupanca extends contaBancaria{
        constructor(agencia, numero) {
            super(agencia, numero)
            this.tipo = 'poupanca'
           
        }
    }

    class contaUniversitaria extends contaBancaria{
        constructor(agencia, numero) {
            super(agencia, numero)
            this.tipo = 'univesitaria'
           
        }

        sacar(valor) {
            if(valor < 500) {
                return 'operação negada'
            }
            this._saldo = this._saldo - valor
        }
     }