
export class CustonError extends Error {
    constructor(
        statusCode: number,
        message: string
    ) {
        super(message)
    }
}

export class InvalidName extends CustonError{ 
    constructor(){
        super(400, "Campo name inválido, é necessário passar ao menos 4 caracteres!s")
    }
}

export class InvalidEmail extends CustonError{ 
    constructor(){
        super(400, "Email inválido")
    }
}

export class InvalidPassword extends CustonError{ 
    constructor(){
        super(400, "Senha inválida")
    }
}

export class UserNotFound extends CustonError{ 
    constructor(){
        super(404, "Usuário não encontrado")
    }
}


export class Unauthorized extends CustonError{ 
    constructor(){
        super(401, "Usuário não não authorizado, faça login novamente")
    }
}