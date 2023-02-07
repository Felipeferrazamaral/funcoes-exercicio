//a

function somaNumeros(num1,num2){
    const somaDoisNumeros = num1 + num2
    const frase = `O resultado de ${num1} + ${num2} eh: ${somaDoisNumeros}`
    return frase
}

function subtraiNumeros(num1,num2){
    const subtraiDoisNumeros = num1 - num2
    const frase = `O resultado de ${num1} - ${num2} eh: ${subtraiDoisNumeros}`
    return frase
}

function multiplicaNumeros(num1,num2){
    const multiplicaDoisNumeros = num1 * num2
    const frase = `O resultado de ${num1} x ${num2} eh: ${multiplicaDoisNumeros}`
    return frase
}

function divideNumeros(num1,num2){
    const divideDoisNumeros = num1 / num2
    const frase = `O resultado de ${num1} / ${num2} eh: ${divideDoisNumeros}`
    return frase
}
//b
const numeroUsuario1 = Number(prompt(`Informe o primeiro numero`))
const numeroUsuario2 = Number(prompt(`Informe o segundo numero`))
//c
const operacaoSoma = somaNumeros(numeroUsuario1,numeroUsuario2)
const operacaoSubtrai = subtraiNumeros(numeroUsuario1,numeroUsuario2)
const operacaoMultiplica = multiplicaNumeros(numeroUsuario1,numeroUsuario2)
const operacaoDivide = divideNumeros(numeroUsuario1,numeroUsuario2)

//d
console.log(operacaoSoma,
    operacaoSubtrai,
    operacaoMultiplica,
    operacaoDivide)