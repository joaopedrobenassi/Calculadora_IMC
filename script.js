

const calcular = document.getElementById('calcular') //Selecionando o botão calcular

function imc(){ // inicializando função
    const nome = document.getElementById('nome') //Selecionando elementos no DOM
    const altura = document.getElementById('altura')
    const peso = document.getElementById('peso')
    const resultado = document.getElementById('resultado')

    if (nome.value !== '' && altura.value !== '' && peso.value !== ''){ //Validação/ preenchimento dos campos obrigatótios

        const valorImc = (peso.value /(altura.value * altura.value)).toFixed(1) // toFixed() neste caso arredonda o valor para até uma casa decimal

        let classificacao = ''

        if(valorImc < 18.5){
            classificacao = 'abaixo do peso'
        } else if (valorImc < 25){
            classificacao = 'com o peso ideal. Parabéns!'
        } else if (valorImc < 30){
            classificacao = 'um pouco acima do peso'
        } else if (valorImc < 35){
            classificacao = ' com obesidade grau I'
        } else if (valorImc < 40){
            classificacao = 'com obesidade grau II'
        } else{
            classificacao = 'com obesidade grau III. Cuidado!'
        }

        resultado.textContent = `${nome.value} seu IMC é ${valorImc} e você está ${classificacao}`
    }
}

calcular.addEventListener('click', imc) //Evento de click