// (Condição) ? 'Valor para verdadeiro' : 'Valor para falso';

const pontuacaoUsuario = 1000;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário Normal'

const corUsuario = null;
const corPadrao = corUsuario || 'Preto';

console.log(nivelUsuario);

