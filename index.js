import express from 'express'
import cors from 'cors'
const app = express()
const port = process.env.PORT||3000
app.use(cors())

app.get("/ping",(req,res)=>{
    res.send("pong")
})

app.get("/data",(req,res)=>{
    res.json([{
        name:"Aditya More",
        username:"AdityaMore7000",
        Pro:"Yes"
    },
    {
        name:"Tarun Santani",
        username:"Tarun1369",
        Pro:"Yes"
    },
    {
        name:"Mihir Deshpande",
        username:"MihirDesh",
        Pro:"Yes"
    }
])
})

app.listen(port,()=>{
    console.log(`Listening on port http://localhost:${port}`)
})