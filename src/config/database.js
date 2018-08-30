/* 
 * Arquivo responsável pela configuração e conexão do nosso banco de dados (MongoDB)
*/

const mongoose = require('mongoose')
mongoose.Promise = global.Promise

module.exports = mongoose.connect('mongodb://localhost/billingcycle')