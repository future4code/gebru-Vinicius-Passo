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
// {
//     "id": "5e3e5867-8158-4c00-a4c5-9a454b5633d2",
//     "name": "Benjamin duarte",
//     "nickname": "benjamin",
//     "email": "benjamin730@gmail.com",
//     "title": "Limpar a casa",
//     "description": "Deve limpar os quartos e sala de estar",
//     "status": "to_do",
//     "limit_date": "2022-06-26T03:00:00.000Z",
//     "creator_user_id": "554888-afs-58445"
//   },


