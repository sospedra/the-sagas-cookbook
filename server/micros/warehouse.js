const len = require('@sospedra/len')
const ServiceError = require('../services/service-error')
const sleep = require('../services/sleep')
const storage = require('../services/create-storage')()

module.exports = {}

module.exports.act = async function warehouseAct (ID, cart) {
  await sleep('2s')

  if (len(cart.products) <= 0) {
    throw new ServiceError('Warehouse', ID)
  }

  storage.set(ID, cart.products)
}

module.exports.compensate = async function warehouseCompensate (ID) {
  storage.delete(ID)
}

module.exports.storage = storage
