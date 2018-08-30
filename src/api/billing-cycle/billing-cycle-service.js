/* 
 * Neste arquivo, definiremos os nossos serviços REST
*/

const BillingCycle = require('./billing-cycle')

// Define os métodos que iremos trabalhar
BillingCycle.methods(['get', 'post', 'put', 'delete'])
BillingCycle.updateOptions( { new: true, runValidators: true } )

module.exports = BillingCycle