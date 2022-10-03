import {ordemCrescente} from "./desafio1";

describe("checa ordem crescente de um array", () => {
    it("retorna true caso a ordem do array for crescente", () => {
        const ehCrescente = ordemCrescente([5,3,1,2])
        expect(ehCrescente).toEqual(true);
    })
})
