const ServiceError = require('../services/service-error')
const sleep = require('../services/sleep')
const storage = require('../services/create-storage')()

module.exports = {}

module.exports.act = async function deliveryAct (ID, cart) {
  await sleep('3s')

  if (!cart.hasValidAddress) {
    throw new ServiceError('Delivery', ID)
  }

  storage.set(ID, cart.address)
}

module.exports.compensate = async function deliveryCompensate (ID) {
  storage.delete(ID)
}

module.exports.storage = storage
