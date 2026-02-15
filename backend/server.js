import express from 'express'

const app = express()
const PORT = process.env.PORT || 3000


app.get('/',(req, res)=>{
    res.send('wohooo we are live')
})

app.listen(PORT, ()=>{
    console.log(`Server is live on Port ${PORT}`)
})