import express, { response } from 'express'

const app = express()

app.get("/",(request, response)=>{
    return response.json({message: "Hello world"})
}) 
app.post("/users", (request, response)=>{
    return response.json({message: "usuário salvo"})
})
app.listen(3333,()=> console.log("Server is running on port 3333"))