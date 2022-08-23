
export interface IuserDTO {
    name: string
    email: string,
    password: string,
    role: string
}
export interface Iuser{
    id: string,
    name: string
    email: string,
    password: string,
    role: string
}

export interface ILoginDTO {
    email: string,
    password: string,
    role: string
}

export enum USER_ROLES {
    ADMIN = "ADMIN", 
    NORMAL = "NORMAL"
}