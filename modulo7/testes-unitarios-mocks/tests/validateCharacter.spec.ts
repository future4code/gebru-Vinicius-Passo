import { performAttack } from "../src/performAttack"
import { Character, validateCharacter } from "../src/validateCharacter"

describe("validateCharacter", () => {
    test("verificando se o name da funcão esta vazia", () => {
        const input: Character = {
            name: '',
            life : 25,
            strength: 58,
            defense: 15
        }
        const output = validateCharacter(input)
        expect(output).toBe(false)
    })

    test("verificando a vida do personagem igual a zero", () => {
        const input: Character = {
            name: 'vincius',
            life : 0,
            strength: 58,
            defense: 15
        }
        const output = validateCharacter(input)
        expect(output).toBe(false)
    });

    test("verificando a força do personagem igual a zero", () => {
        const input: Character = {
            name: 'vincius',
            life : 10,
            strength: 0,
            defense: 15
        }
        const output = validateCharacter(input)
        expect(output).toBe(false)
    });

    
    test("verificando a defesa do personagem igual a zero", () => {
        const input: Character = {
            name: 'vincius',
            life : 10,
            strength: 65,
            defense: 0
        }
        const output = validateCharacter(input)
        expect(output).toBe(false)
    });

    
    test("verificando a força do personagem com o valor negativo", () => {
        const input: Character = {
            name: 'vincius',
            life : 10,
            strength: -50,
            defense: 15
        }
        const output = validateCharacter(input)
        expect(output).toBe(false)
    });

    
    test("verificando a força do personagem igual a zero", () => {
        const input: Character = {
            name: 'vincius',
            life : 10,
            strength: 50,
            defense: 15
        }
        const output = validateCharacter(input)
        expect(output).toBe(true)
    });

})

describe("testando função performAttack", () => {
    test("validando a saída da função performAttack igual a true", () => {
        const validatorMock = jest.fn( () => {
            return true
        })
        
        const attacker:Character  = {
            name: "Squirtle",
            life : 100,
            strength: 85,
            defense: 95
        }
        const defense :Character  = {
            name: "Weedle",
            life : 99,
            strength: 75,
            defense: 70
        }

         performAttack(attacker, defense, validatorMock)
         expect(defense.life).toEqual(84)
         expect(validatorMock).toHaveBeenCalled()
         expect(validatorMock).toHaveBeenCalledTimes(2)
         expect(validatorMock).toHaveReturnedTimes(2)

    });

    test("validando a saída da função performAttack igual a false", () => {
        expect.assertions(4);

        const validatorMock = jest.fn( () => {
            return false
        })

        try {
            const attacker:Character  = {
                name: "Squirtle",
                life : 100,
                strength: 85,
                defense: 95
            }
            const defense :Character  = {
                name: "Weedle",
                life : 99,
                strength: 75,
                defense: 70
            }
    
            performAttack(attacker, defense, validatorMock)
            
        } catch (error: any) {
            expect(error.message).toContain("Invalid character")
            expect(validatorMock).toHaveBeenCalled()
            expect(validatorMock).toHaveBeenCalledTimes(1)
            expect(validatorMock).toHaveReturnedTimes(1)
        }
    });

    test("verificando se o valor do ataque está correto", () => {
        expect.assertions(1);
        const validatorMock = jest.fn( () => {
            return true
        });
        try {
            const attacker:Character  = {
                name: "Squirtle",
                life : 100,
                strength: 85,
                defense: 95
            }
            const defense :Character  = {
                name: "Weedle",
                life : 99,
                strength: 75,
                defense: 70
            }

            performAttack(attacker, defense, validatorMock)
            expect(attacker.strength).toBe(85)
    
        } catch (error:any) {} 
    })

    test("verificando se o valor da vida do atacante está correto", () => {
        expect.assertions(1);
        const validatorMock = jest.fn( () => {
            return true
        });
        try {
            const attacker:Character  = {
                name: "Squirtle",
                life : 100,
                strength: 85,
                defense: 95
            }
            const defense :Character  = {
                name: "Weedle",
                life : 99,
                strength: 75,
                defense: 70
            }

            performAttack(attacker, defense, validatorMock)
            expect(attacker.life).toBe(100)
    
        } catch (error:any) {}  
    })

    test("verificando se o nome do defensor existe", () => {
        expect.assertions(1);
        const validatorMock = jest.fn( () => {
            return true
        });
        try {
            const attacker:Character  = {
                name: "Squirtle",
                life : 100,
                strength: 85,
                defense: 95
            }
            const defense :Character  = {
                name: "Weedle",
                life : 99,
                strength: 75,
                defense: 70
            }

            performAttack(attacker, defense, validatorMock)
            expect(defense.name).toContain("Weedle")
    
        } catch (error:any) {}  
    })
})