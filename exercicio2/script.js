//A
function somaNum(numero1,numero2){
    const soma = numero1 + numero2

    console.log(`${soma}`)

}

somaNum(10,20)
somaNum(11,50)


//B
function primeiroNumero(num1,num2){
    const teste = num1 >= num2
    console.log(`${teste}`)

}
primeiroNumero(50,80)
primeiroNumero(88,90)

// C

function verificaParidade(numeroUm){
    const testeC = numeroUm % 2 === 0
    
    console.log(`O numero eh par ? ${testeC}`)


}
verificaParidade(10)
verificaParidade(15)

// D

function calculaSalario(salario){
    const desconto = salario * 0.1
    const salarioLiquido = salario - desconto
console.log(`${salarioLiquido}`)
    return salarioLiquido

}
 calculaSalario(1500)
 calculaSalario(7000)