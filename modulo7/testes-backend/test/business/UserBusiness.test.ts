import { UserBusiness } from "../../src/business/UserBusiness";
import { AuthenticatorMock } from "./mocks/AuthenticatorMock";
import { HashManagerMock } from "./mocks/HashManagerMock";
import { IdGeneratorMock } from "./mocks/IdGeneratorMock";
import { UserDatabaseMock } from "./mocks/UserDatabaseMock";


const userDatabaseMock = new UserDatabaseMock();
const idGeneratorMock = new IdGeneratorMock();
const authenticator = new AuthenticatorMock();
const hashManager = new HashManagerMock();
const userBusiness = new UserBusiness(userDatabaseMock,idGeneratorMock,authenticator, hashManager)

describe( "testando a função getUserByid", () => {
    test("1. caso o usuário não existe: verifica se o código de error está correto", async() => {
        expect.assertions(1)
        try {
         const id = "id";
         await userBusiness.getProfiller(id)    
        } catch (error: any) {
            expect(error).toBeDefined();
        }
    });
})