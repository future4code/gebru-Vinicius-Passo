/*if(confirm('Quer iniciar uma nova rodada')){
   console.log('Bem-vindo(a) ao jogo de blackjack')

   function cartasCompradas() {
    const cartas = ['A','2','3','4','5','6','7','8','9','10','J','Q','K']

    const naipes = ['♦️','♥️','♣️','♠️']
    
    const numero = cartas[Math.floor(Math.random() * 13)]

    const naipe = naipes[Math.floor(Math.random() * 4)]

  
    let valor 

    //let valor1

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
    console.log(`Usuário - cartas: ${usuario}: pontuação ${carta.valor}`)
    console.log(`Computador - cartas: ${computador}: pontuação ${computador }`)
    console.log(`O usuário ganhou!`)

} else if(usuario  < computador ) {
    console.log(`Usuário - cartas: ${usuario}: pontuação ${carta.valor}`)
    console.log(`Computador - cartas: ${computador}: pontuação ${carta.valor}`)
    console.log(`O computador venceu!`)
} else if(usuario  === computador ){
    console.log(`Usuário - cartas: ${usuario}: pontuação ${carta.valor }`)
    console.log(`Computador - cartas: ${computador}: pontuação ${carta.valor}`)
    console.log('Empatou!')
}

}

} else{
    console.log('O jogo acabou')
}
console.log(cartasCompradas()) */


/*function verificaNumeroImpar(numero, imprimir) {
    if(numero % 2 !== 0) {
        imprimir()
    }
}
function imprameResultado(resultado) {
    console.log('sim é impar', resultado)
}
verificaNumeroImpar(7, imprameResultado)*/

// const listaDeNumeros = [1,23,5,6,5,5,3]




// const novoArray = listaDeNumeros.map(
//     (valor,index)=> {
//         return `o elemento ${index} é ${valor}`
//     }
// )
// console.log(novoArray)


// const listaDeNumeros = [ 1,2,5,6,8,64,6,4,14,15,16]

// const pegarNumerosMaaioresQue10 = ( numero) =>{
//     return numero > 10
// }
//  const numerosMaaioresQue10 = listaDeNumeros.filter(
//      pegarNumerosMaaioresQue10
//  )
//  console.log(numerosMaaioresQue10)

//  const numerosPares = listaDeNumeros.filter(
//      (numero) => {
//          return numero % 2 ===0
//      }
//  )
//  console.log(numerosPares)

// const produtos = [
//     { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
//     { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
//     { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
//     { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
//     { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
//     { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
//     { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
//     { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
//     { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
//     { nome: "Sabão em Pó", categoria: "Limpeza", preco: 10.80 }
//  ]
 
//  const pegarProdutosLimpeza = (produto) =>{
//      return produto.categoria ==="Limpreza"
//  }
//  const produtosDeLimpreza = produtos.filter(pegarProdutosLimpeza)

 
//  console.log(produtosDeLimpreza)


