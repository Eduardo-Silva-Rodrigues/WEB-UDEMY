/* Um objeto pode portar uma função em seu interior, adjunto a outros valores. 
   No entanto, esta função está reservada no escopo do objeto, e não pode ser usado fora dela.*/
const objeto = {x: 42, getX: function () {return console.log(this.x)}};

// A função então é atribuída a uma variável no escopo global, como visto abaixo.
/* Mas, essa função não pode ser utilizada no escopo global, visto que o valor
que ela quer retornar ainda está presente dentro do "objeto".*/
const unboundGetX = objeto.getX;

/* Então essa variável é vinculada ao objeto por meio do método bind (trad: "vincular")
   e atribuida a outra variável diferente*/
const boundGetX = unboundGetX.bind(objeto);

/* E agora sim, esta segunda variável se transformou em uma função vinculada ao escopo 
   de um objeto, de forma em que permite a tal utilizar os valores dentro do tal objeto.*/
boundGetX();