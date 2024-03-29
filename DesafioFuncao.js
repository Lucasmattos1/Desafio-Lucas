saldoVitoria(200,5)

function saldoVitoria (qtdVitoria, qtdDerrota){

saldoVitoria = qtdVitoria - qtdDerrota

if (saldoVitoria < 10){
    console.log("O herói tem o saldo de " + (saldoVitoria) + " está no nível de Ferro")
}
else if(saldoVitoria >=11 && saldoVitoria <=20){
    console.log("O herói tem o saldo de " + (saldoVitoria) + " está no nível de Bronze")
}
else if(saldoVitoria >=21 && saldoVitoria <=50){
    console.log("O herói tem o saldo de " + (saldoVitoria) + " está no nível de Prata")
}
else if(saldoVitoria >=51 && saldoVitoria <=80){
    console.log("O herói tem o saldo de " + (saldoVitoria) + " está no nível de Ouro")
}
else if(saldoVitoria >=81 && saldoVitoria <=90){
    console.log("O herói tem o saldo de " + (saldoVitoria) + " está no nível de Diamante")
}
else if(saldoVitoria >=91 && saldoVitoria <=100){
    console.log("O herói tem o saldo de " + (saldoVitoria) + " está no nível de Lendário")
}
else {
    console.log("O herói tem o saldo de " + (saldoVitoria) + " está no nível de Imortal")
}

}