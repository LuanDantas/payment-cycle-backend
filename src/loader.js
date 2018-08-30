/* 
 * Arquivo principal, é o arquivo que será disparado ao iniciar a aplicação
*/
const server = require('./config/server')
require('./config/database')
require('./config/routes')(server)