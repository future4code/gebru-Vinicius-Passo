
enum SETOR  {
    MARKETING = "marketing",
    VENDAS = "vendas",
    FINANCEIRO = "financeiro",
}
type Arr = {
    nome: string,
    salário: number,
    setor: string,
    presencial: boolean
}

 const array: Array<Arr> = [
	{ nome: "Marcos", salário: 2500, setor: SETOR.MARKETING, presencial: true },
	{ nome: "Maria" ,salário: 1500, setor: SETOR.VENDAS, presencial: false},
	{ nome: "Salete" ,salário: 2200, setor: SETOR.FINANCEIRO, presencial: true},
	{ nome: "João" ,salário: 2800, setor: SETOR.MARKETING, presencial: false},
	{ nome: "Josué" ,salário: 5500, setor: SETOR.FINANCEIRO, presencial: true},
	{ nome: "Natalia" ,salário: 4700, setor: SETOR.VENDAS, presencial: true},
	{ nome: "Paola" ,salário: 3500, setor: SETOR.MARKETING, presencial: true }
]

const buscaPorSetor = (array:Array<Arr> ) => {
    const newArray = array.filter(
        (arr) => {
         return  arr.setor === SETOR.MARKETING && arr.presencial === true
        }
    )
  return newArray
}

console.log(buscaPorSetor(array))