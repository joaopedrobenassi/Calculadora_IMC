

const calcular = document.getElementById('calcular') //Selecionando o botão calcular

function imc(){ // inicializando função
    const nome = document.getElementById('nome')
    const altura = document.getElementById('altura')
    const peso = document.getElementById('peso')
    const resultado = document.getElementById('resultado')

    if (nome.value !== '' && altura.value !== '' && peso.value !== ''){

        const valorImc = (peso.value /(altura.value * altura.value)).toFixed(1)

        let classificacao = ''

        if(valorImc < 18.5){

            classificacao = 'Abaixo do peso'
        }

        resultado.textContent = `${nome.value} seu IMC é ${valorImc} e você está ${classificacao}`
    }
}

calcular.addEventListener('click', imc) //Evento de click