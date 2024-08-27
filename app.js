const express = require(`express`)
const app = express()

app.get("/",(req,res)=>{
    res.send(`Hello World`)

})

app.get("/:anmimals/:animal",(req,res)=>{
    res.send(req.params.animal)

})

app.get("/page",(req,res)=>{
    res.sendFile(`${__dirname}/index.html`)
    
})

app.get("/data",(req,res)=>{
    res.sendFile(`${__dirname}/data.json`)
    
})

app.listen(3000, (e) => {
    console.log(`Running on localhost:3000`)
})