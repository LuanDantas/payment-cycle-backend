/* 
 * Arquivo responsável por toda a configuração do servidor
*/

// Porta do servidor
const port = 3003

// Middlewares
const bodyParser = require('body-parser') // Middleware que fará o tratamento de requisições, para nos entregar o objeto todo pronto
const express = require('express') 
const server = express()
const allowCors = require('./cors')
const queryParser = require('express-query-int')

// Para toda requisição que tivermos, o bodyParser interpretará quando vier no formato urlencoded
server.use( bodyParser.urlencoded( { extended: true } ) )

// Fará o parser quando no corpo da requisição vier um json
server.use( bodyParser.json() )

// Adiciona o CORS (Headers no cabeçalho da requisição) para aceitar requisições externas
server.use( allowCors )

// Responsável pela paginação
server.use( queryParser() )

server.listen(port, function() {
    console.log(`BACKEND is running on port ${ port }.`) // Template string com backtick " `` ".
})

module.exports = server