export function ordemCrescente(array) {
    const arr = array.sort( (a, b) => {
       return a - b;
    })
  return arr ? true : false
  }