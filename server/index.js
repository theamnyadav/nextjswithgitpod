const express = require('express')
const mysql = require('mysql')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())
const db = mysql.createConnection({
    user:'root',
    host:'localhost:8080',
    password:'',
    database:'login'

});

app.post('/register', (req,res)=>{
    const username = req.body.username;
    const password = req.body.password;

    db.query("INSERT INTO users (username, password) VALUES(?,?)",[username, password],(err,result)=>{
        console.log(err)
    })
})

app.listen(3001,()=>{
    console.log("Connected to database")
})