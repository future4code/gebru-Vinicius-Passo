/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */


const comprandoCartaUsuario = comprarCarta()

const maisUmaProUsuario = comprarCarta()

const usuario = Number(comprandoCartaUsuario.valor + maisUmaProUsuario.valor)
console.log(usuario)

const comprandoCartaPc = comprarCarta()

const maisUmaProPc = comprarCarta()

const computador = Number(comprandoCartaPc.valor + maisUmaProPc.valor)
console.log(computador)

let adicionado = [];
adicionado.push(comprarCarta());
console.log(adicionado)


if (confirm('Bem-vindo ao jogo de Blackjack!' + '\n' + 'Quer iniciar uma nova rodada?')) {

   alert(`Suas cartas são ${comprandoCartaUsuario.texto} - ${maisUmaProUsuario.texto}. A carta revelada do computadoor é ${comprandoCartaPc.texto} `
      + '\n' + 'Deseja comprar mais uma carta?')
} else {
   alert('Usuario - cartas:')
}
