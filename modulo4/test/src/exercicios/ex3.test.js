import { checaItensDuplicados } from "./ex3";

describe("Checa itens duplicados", () => {
    it("retorna true para itens duplicados", () => {
        const ehDuplicado = checaItensDuplicados([1,2,1])
        expect(ehDuplicado).toEqual(true)
    })

    it("retorna true para itens duplicados", () => {
        const ehDuplicado = checaItensDuplicados(["a", "a", "b", "c"]);
        expect(ehDuplicado).toEqual(true)
    })

    it("retorna true para itens duplicados", () => {
        const ehDuplicado = checaItensDuplicados([5, 5, 3, 6, 5, 6]);
        expect(ehDuplicado).toEqual(true);
    })

    it("retorna false para itens não duplicados", () => {
        const naoDuplicado = checaItensDuplicados([]);
        expect(naoDuplicado).toEqual(false);
    })
    it("retorna false para itens não duplicados", () => {
        const naoDuplicado = checaItensDuplicados([1]);
        expect(naoDuplicado).toEqual(false);
    })
    it("retorna false para itens não duplicados", () => {
        const naoDuplicado = checaItensDuplicados([1,2,3]);
        expect(naoDuplicado).toEqual(false);
    })
    it("retorna false para itens não duplicados", () => {
        const naoDuplicado = checaItensDuplicados(["f", "d", "e", "f"]);
        expect(naoDuplicado).toEqual(true);
    })
});
