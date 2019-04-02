const ServiceError = require('../services/service-error')
const sleep = require('../services/sleep')
const storage = require('../services/create-storage')()

module.exports = {}

module.exports.act = async function paymentAct (ID, cart) {
  await sleep('1s')

  if (cart.price < 0) {
    throw new ServiceError('Payment', ID)
  }

  storage.set(ID, cart.price)
}

module.exports.compensate = async function paymentCompensate (ID) {
  storage.delete(ID)
}

module.exports.storage = storage
