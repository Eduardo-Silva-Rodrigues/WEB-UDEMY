const num = Number(prompt('Digite um número:'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = num;
texto.innerHTML = `<p>Raiz quadrada: <strong>${num ** 0.5}<strong/> <br /><p/>`
texto.innerHTML += `<p>${num} é número inteiro: <strong>${Number.isInteger(num)}<strong/> <br /><p/>`
texto.innerHTML += `<p>É NaN: <strong>${Number.isNaN(num)}<strong/> <br /><p/>`
texto.innerHTML += `<p>Arredondado para baixo: <strong>${Math.floor(num)}<strong/><br /><p/>`
texto.innerHTML += `<p>Arredondado para cima: <strong>${Math.round(num)}<strong/><br /><p/>`
texto.innerHTML += `<p>Com duas casas decimais: <strong>${num.toFixed(2)}<strong/><br /><p/>`
