if(confirm('Quer iniciar uma nova rodada')){
   console.log('Bem-vindo(a) ao jogo de blackjack')

   function cartasCompradas() {
    const cartas = ['A','2','3','4','5','6','7','8','9','10','J','Q','K']

    const naipes = ['♦️','♥️','♣️','♠️']
    
    const numero = cartas[Math.floor(Math.random() * 13)]

    const naipe = naipes[Math.floor(Math.random() * 4)]

  
    let valor 

    if(numero === "A") {
        valor = 11
    }  else if(numero === "J" || numero === "Q" || numero === "K") {
        valor = 10
    } else {
        valor = Number(numero)
    }
    const carta = {
        texto: numero + naipe,
        valor: valor
    }
 const usuario = carta.texto + carta.valor

const computador = carta.texto + carta.valor

if(usuario  > computador ) {
    console.log(`Usuário - cartas: ${carta.texto}: pontuação ${carta.valor }`)
    console.log(`Computador - cartas: ${carta.texto}: pontuação ${carta.valor }`)
    console.log(`O usuário ganhou!`)

} else if(usuario  < computador ) {
    console.log(`Usuário - cartas: ${carta.texto}: pontuação ${carta.valor}`)
    console.log(`Computador - cartas: ${carta.texto}: pontuação ${carta.valor}`)
    console.log(`O computador venceu!`)
} else if(usuario  === computador ){
    console.log(`Usuário - cartas: ${carta.texto}: pontuação ${carta.valor }`)
    console.log(`Computador - cartas: ${carta.texto}: pontuação ${carta.valor}`)
    console.log('Empatou!')
}

}

} else{
    console.log('O jogo acabou')
}
console.log(cartasCompradas())


