const express = require('express')
const server = express()

server.get('/',function(req,res,next){
    console.log('Inicio...')
    next()
    console.log('Fim...')
})


server.get('/', function(req,res){
    console.log('resposta...')
    res.send('<h1>Respota...Index!</h1>')
})

server.all('/teste',function(req,res){
    res.send('<h1>Teste!</h1>')
})

// Regular expression
server.get(/api/,function(req,res){
    res.send('<h1>API!</h1')
})

server.listen(process.env.PORT,()=>console.log('Executando...'))

