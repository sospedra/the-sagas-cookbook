const uuid = require('uuid/v4')
const delivery = require('./micros/delivery')
const payment = require('./micros/payment')
const warehouse = require('./micros/warehouse')

module.exports = async function SEC (cart, onSuccess, onError) {
  try {
    const transactionID = uuid()

    await Promise.all([
      delivery.act(transactionID, cart),
      warehouse.act(transactionID, cart),
    ])
    await payment.act(transactionID, cart)

    onSuccess()
  } catch (ex) {
    console.log(ex)
    switch (ex.serviceName.toLowerCase()) {
      case 'payment': payment.compensate(ex.transactionID)
      case 'delivery':
      case 'warehouse': {
        delivery.compensate(ex.transactionID)
        warehouse.compensate(ex.transactionID)
      }
      default: onError(ex)
    }
  }
}
