const form = document.querySelector('#form');
const msg = document.querySelector('#resultado')

form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log('Evento previnido.')

    let chestDados = [];
    chestDados = receberDadosForm();

    const altura = chestDados.altura;
    const peso = chestDados.peso;
    
    if (verificarDados(altura, peso) == true) {
        resultado = parseFloat(realizarCalculoIMC(altura, peso));
        console.log(resultado);
        return exibirResultado(resultado);
    } 

    console.log(chestDados);
})

function receberDadosForm() {
    const altura = Number(form.querySelector('#altura').value);
    const peso = Number(form.querySelector('#peso').value);

    return {altura: altura, peso: peso};
}

function criaP() {
    const p = document.createElement('p');
    return p;
}

function verificarDados(altura, peso) {
    msg.innerHTML = '';

    const p = criaP();

    p.classList.add('invalid-msg')
    if (altura == '' && peso == '') {
        p.innerHTML = 'Sem dados suficientes para calculo!';
        msg.appendChild(p);
    }  else if (!altura) {
        p.innerHTML = 'Altura inválida!';
        msg.appendChild(p);
        return false;
    } else if (!peso) { 
        p.innerHTML = 'Peso inválido!';
        msg.appendChild(p);
        return false;
    } else {
        return true;
    }
} 

function realizarCalculoIMC(altura, peso) {
    resultado = peso / altura ** 2;
    return resultado.toFixed(2);
}

function exibirResultado(resultado) {
    msg.innerHTML = '';
    const p = document.createElement('p');
    p.classList.add('check-result');

    if (resultado < 18.5) {
        p.innerHTML = `IMC: ${resultado} | Você está ABAIXO DO PESO!`;
        msg.appendChild(p);
    } else if (resultado >= 18.5 && resultado < 24.9) {
        p.innerHTML = `IMC: ${resultado} | Você está no PESO NORMAL!`;
        msg.appendChild(p);
    } else if (resultado >= 25 && resultado < 29.9) {
        p.innerHTML = `IMC: ${resultado} | Você está em SOBREPESO!`;
        msg.appendChild(p);
    } else if (resultado >= 30 && resultado < 34.9) {
        p.innerHTML = `IMC: ${resultado} | Você está com OBESIDADE GRAU 1!`;
        msg.appendChild(p);
    } else if (resultado >= 35 && resultado < 39.9) {
        p.innerHTML = `IMC: ${resultado} | Você está com OBESIDADE GRAU 2!`;
        msg.appendChild(p);
    } else if (resultado >= 40) {
        p.innerHTML = `IMC: ${resultado} | Você está OBESIDADE GRAU 3!`;
        msg.appendChild(p);
    } else {
        p.innerHTML = `IMC: ${resultado}!`
        msg.appendChild(p);
    }
}