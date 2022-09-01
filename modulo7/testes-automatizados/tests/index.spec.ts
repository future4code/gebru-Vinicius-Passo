import { performPurchase } from "../src"
import {User} from "../src"
import { Casino, LOCATION, NACIONALITY, Users, verifyAge } from "../src/desafio"



describe("teste na função performPurchase", () => {
    const user: User = {
        name: "vinicus",
        balance: 57
    }

    test("testando se o saldo do usuário é maior do que o valor da compra", () => {
        const result = performPurchase(user, 55)
        expect(result).toEqual({
            name: "vinicus",
            balance: 2
        })
    })

    test("testando se o saldo do usuário é igual o valor da compra", () => {
        const user: User = {
            name: "vinicus",
            balance: 55
        }
        const result = performPurchase(user, 55)
        expect(result).toEqual({
            name: "vinicus",
            balance: 0
        })
    })

    test("tstando se o saldo do usuário é menor do que o valor da compra", () => {
        const user: User = {
            name: "vinicus",
            balance: 41
        }
        const result = performPurchase(user, 58)
        expect(result).not.toBeDefined()
    })
})

describe("testando função verifyAge", () => {
    test("usuário brasileiro que pode entrar no estabelecimento no brasil", () => {
        const user: Users =  {
            name: "vinicius",
            age: 26,
            nacionality: NACIONALITY.BRAZILIAN
        }

        const casino: Casino = {
            name: "Balada Estelar",
            location: LOCATION.BRAZIL
        }
        const result = verifyAge(casino, [user])
        expect(result.brazilians.allowed).toEqual(["vinicius"])
    })

    test("americano que pode entrar no brasil", () => {

        const user: Users =  {
            name: "vitor",
            age: 18,
            nacionality: NACIONALITY.AMERICAN
        }

        const casino: Casino = {
            name: "Balada Estelar",
            location: LOCATION.BRAZIL
        }

        const result = verifyAge(casino, [user])
        expect(result.americans.allowed).toEqual(["vitor"])
    })

    test("Usuário sem permissão", () => {
        const brasilerio: Users =  {
            name: "simone BR",
            age: 19,
            nacionality: NACIONALITY.BRAZILIAN
        }
      
        const americano: Users =  {
            name: "kevin EUA",
            age: 19,
            nacionality: NACIONALITY.AMERICAN
        }
      

        const casino: Casino = {
            name: "Balada gay",
            location: LOCATION.EUA
        }

        const result = verifyAge(casino, [
            brasilerio,
            brasilerio,
            americano,
            americano
        ])
        expect(result.brazilians.unallowed).toEqual(["simone BR", "simone BR"])
        expect(result.americans.unallowed).toEqual(["kevin EUA", "kevin EUA"])
    })

    test("um brasileiro permitido", () => {
        const brasileiro: Users =  {
            name: "vinicius",
            age: 26,
            nacionality: NACIONALITY.BRAZILIAN
        }
        const casino: Casino = {
            name: "Balada Estelar",
            location: LOCATION.BRAZIL
        }

        const result = verifyAge(casino, [brasileiro])
        expect(result.brazilians.allowed.length).toBeGreaterThan(0)
        expect(result.brazilians.allowed.length).toBeLessThan(2)
    })

    test("1 americano com permissão", () => {
        const americano: Users =  {
            name: "vinicius",
            age: 26,
            nacionality: NACIONALITY.AMERICAN
        }
        const casino: Casino = {
            name: "Balada Estelar",
            location: LOCATION.BRAZIL
        }

        const result = verifyAge(casino, [americano] )
        expect(result.americans.unallowed.length).toBe(0)
    })

    test("verifica se existe algum usuário sem permissão", () => {
        const brasileiro: Users =  {
            name: "vinicius BR",
            age: 19,
            nacionality: NACIONALITY.BRAZILIAN
        }
        const americano: Users =  {
            name: "kenvin EUA",
            age: 19,
            nacionality: NACIONALITY.AMERICAN
        }
        const casino: Casino = {
            name: "Balada Estelar",
            location: LOCATION.EUA
        }

        const result = verifyAge(casino,[
            brasileiro,
            brasileiro,
            americano,
            americano
        ])
        expect(result.brazilians.unallowed).toContain("vinicius BR")
        expect(result.americans.unallowed).toContain("kenvin EUA")
    })

    test("propriedade de brazilian unallowed seja maior do que 1; propriedade americans.unallowed seja menor do que 1", () => {
        const brasileiro: Users =  {
            name: "vinicius BR",
            age: 19,
            nacionality: NACIONALITY.BRAZILIAN
        }
        const americano: Users =  {
            name: "kenvin EUA",
            age: 21,
            nacionality: NACIONALITY.AMERICAN
        }
        const casino: Casino = {
            name: "Balada Estelar",
            location: LOCATION.EUA
        }

        const result = verifyAge(casino,[
            brasileiro,
            brasileiro,
            americano,
            americano
        ])
        expect(result.brazilians.unallowed.length).toBeGreaterThan(1)
        expect(result.americans.unallowed.length).toBeLessThan(1)
        expect(result.americans.allowed.length).toBe(2)
    })
})