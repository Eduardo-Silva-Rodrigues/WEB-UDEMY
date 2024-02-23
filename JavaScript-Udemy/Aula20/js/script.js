function meuEscopo() { // Criando um escopo reservado para o projeto.
    const form = document.querySelector('.form'); // Capturando o form em uma variável.
    const resultado = document.querySelector('.resultado'); // Capturando o resultado em uma variável.
    const pessoas = []; // Criando um array para armazenar os objetos que serão criados.

    function receberEventoForm (evento) { // Criando função que receberá os dados e os exibirá na tela.
        evento.preventDefault(); // Função para impedir que a página recarregue ao enviar o formulário.
        const nome = form.querySelector('.nome'); // Colocando o dado em uma variável.
        const sobrenome = form.querySelector('.sobrenome'); // Colocando o dado em uma variável.
        const peso = form.querySelector('.peso'); // Colocando o dado em uma variável.
        const altura = form.querySelector('.altura'); // Colocando o dado em uma variável.

        pessoas.push({ // Criando um objeto com os dados e o enviando para o array.
            nome: nome.value, // Atribuindo o dado ao objeto.
            sobrenome: sobrenome.value, // Atribuindo o dado ao objeto.
            peso: peso.value, // Atribuindo o dado ao objeto.
            altura: altura.value // Atribuindo o dado ao objeto.
        });

        console.log(pessoas); // Exibindo os dados do objeto do console.

        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}<p/>` 
        // Exibindo os dados na tela do documento.
    }

    form.addEventListener('submit', receberEventoForm);
    // Função que vigia o evento de submit da página e inicia a função receberEventoForm.
}

meuEscopo();








        // form.onsubmit = function (evento) {
        //     evento.preventDefault();
        //     alert(1);
        //     console.log('Foi enviado.')
        // };