export type Users = {
    id : string,
    name: string,
    nickname: string,
    email : string
}

export type UsersUpdate = {
    name: string,
    nickname: string,
    email ?: string
}

export type Task = {
    id: string
    title : string,
    description: string,
    status?: string,
    limit_date: Date,
    creator_user_id: string
}

export type UserTask = {
    id: string
    name: string,
    nickname: string,
    email ?: string
    title : string,
    description: string,
    status?: string,
    limit_date: Date,
    creator_user_id: string
}



