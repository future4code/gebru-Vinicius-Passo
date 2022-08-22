
export class CustomError extends Error {
    constructor(
        message: string,
        statusCode: number
    ) {
        super(message)
    }
    
}

export class InvalidName extends CustomError{ 
    constructor(){
        super( "Campo name inválido, é necessário passar ao menos 4 caracteres!", 400)
    }
}

export class InvalidEmail extends CustomError{ 
    constructor(){
        super( "Email inválido", 400)
    }
}

export class InvalidPassword extends CustomError{ 
    constructor(){
        super( "Senha inválida", 400)
    }
}

export class UserNotFound extends CustomError{ 
    constructor(){
        super("Usuário não encontrado", 404)
    }
}

export class Unauthorized extends CustomError{ 
    constructor(){
        super( "Usuário não não authorizado, faça login novamente",401)
    }
} 