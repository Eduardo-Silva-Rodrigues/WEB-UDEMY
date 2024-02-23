function escopoReservado() {
    const form = document.querySelector('.form');
    const surpresa = document.querySelector('.surpresa');
    
    function recebendoNumero(evento) {
        evento.preventDefault();
        const numero = Number(form.querySelector('.numero').value); 
        surpresa.innerHTML += `<p>${numero || 'Surpresa!'}</p>`;
    }

    form.addEventListener('submit', recebendoNumero);
}

escopoReservado();