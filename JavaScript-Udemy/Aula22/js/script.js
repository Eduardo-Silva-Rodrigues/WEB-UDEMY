function escopoReservado() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    const resultadoConsole = [];

    function receberDados(evento) {
        evento.preventDefault();
        const numeroUmIgual = form.querySelector('.numero-um-igual');
        const numeroDoisIgual = form.querySelector('.numero-dois-igual');
        const numeroUmMaior = form.querySelector('.numero-um-maior');
        const numeroDoisMaior = form.querySelector('.numero-dois-maior');
        const numeroUmMenor = form.querySelector('.numero-um-menor');
        const numeroDoisMenor = form.querySelector('.numero-dois-menor');

        const resultadoIgual = numeroUmIgual === numeroDoisIgual;
        const resultadoMaior = numeroUmMaior === numeroDoisMaior;
        const resultadoMenor = numeroUmMenor === numeroDoisMenor;

        resultado.innerHTML += `Igualdade: <strong>${resultadoIgual}</strong> <br/>`
        resultado.innerHTML += `Maior: <strong>${resultadoMaior}</strong> <br/>`
        resultado.innerHTML += `Menor: <strong>${resultadoMenor}</strong> <br/>`
    
        resultadoConsole.push({resultadoIgual, resultadoMaior, resultadoMenor});
        console.log(resultadoConsole);
    }
     
    form.addEventListener('submit', receberDados);
}

escopoReservado();