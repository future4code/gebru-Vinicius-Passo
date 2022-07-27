import express from 'express'
import cors from 'cors'

export const app = express()

app.use(express.json())
app.use(cors())

console.log("ola mundo")

app.listen(3003, () => {
   console.log('Servidor rodando na porta 3003')
})