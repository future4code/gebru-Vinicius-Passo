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
    
//     console.log('Bem-vindo(a) ao jogo de blackjack');

//     if(confirm('Quer iniciar uma nova rodada?')) {
      
//      const carta = comprarCarta()

//      const carta1 = comprarCarta()

//      const usuario = carta.valor + carta1.valor

//   console.log(`Usuario - cartas ${carta.texto} - ${carta1.texto} pontuação: ${usuario}`)

// const cartas = comprarCarta()

// const cartas1 = comprarCarta()

// const computador = cartas.valor + cartas1.valor

// console.log(`Computador - cartas ${cartas.texto} - ${cartas1.texto} pontuação: ${computador}`)

// if(usuario > 21 && usuario < computador && computador < 21) {
//    console.log('Computador ganhou!')
// } 
// else if(computador > 21 && computador < usuario && usuario < 21) {
// console.log('Usuário ganhou!')
// }
// else if(usuario === computador) {
//    console.log('Empate')
// } 
// else if(usuario > computador) {
// console.log('Usuario ganhou!')
// } 
// else if(usuario < computador) {
// console.log('Computador ganhou!')
// }
    
//     } else {
//        console.log('O jogo acabou.')
//     }