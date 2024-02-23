// elementos = [{tag: 'p', texto: 'Frase 1'},
//              {tag: 'div', texto: 'Frase 2'},
//              {tag: 'section', texto: 'Frase 3'},
//              {tag: 'footer', texto: 'Frase 4'}];

// const container = document.querySelector('.container');
// const div = document.createElement('div');

// for (let i = 0; i < elementos.length; i++) {
//     const {tag, texto} = elementos[i];
//     const tagCriada = document.createElement(tag);
//     tagCriada.innerText += texto;
//     div.appendChild(tagCriada);
// }

// container.appendChild(div);


elementos = [{tag: 'p', texto: 'Frase 1'},
             {tag: 'div', texto: 'Frase 2'},
             {tag: 'section', texto: 'Frase 3'},
             {tag: 'footer', texto: 'Frase 4'}];

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++) {
    const {tag, texto} = elementos[i];
    const tagCriada = document.createElement(tag);
    const textoCriado = document.createTextNode(texto);
    tagCriada.appendChild(textoCriado);
    div.appendChild(tagCriada);
}

container.appendChild(div);