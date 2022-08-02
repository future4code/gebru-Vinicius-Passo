
export type authenticationData = {
    id: string
 }
 
 export type user = {
    id: string,
    name: string,
    email: string,
    password: string
 }
 export type userCB = {
    name: string,
    email: string,
    password: string
 }
 
 export enum POST_TYPES {
    NORMAL = "normal",
    EVENT = "event"
 }
 
 export type post = {
    id: string,
    photo: string,
    description: string,
    type: POST_TYPES,
    authorId: string
 }
 export type postCB = {
    photo: string,
    description: string,
    type: POST_TYPES,
    authorId: string
 }