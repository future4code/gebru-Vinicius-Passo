1)
 A) Sim, usando os ids do tipo string, faz com que combinamos caractere com letras e número, se fosse só com tipo number, não seria possível fazer essas combinação.

B) prática

2)

A) Ela tipa process.env.JWT_KEY como do tipo string. Força ser do tipo string pra não da error no código, porque as vezes essa variavel vem com o tipo any, e o typescript reclama, pra evitar usamso "as string".

B) Prática