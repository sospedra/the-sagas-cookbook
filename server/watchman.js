const express = require('express')
const delivery = require('./micros/delivery')
const payment = require('./micros/payment')
const warehouse = require('./micros/warehouse')

const watchman = express.Router()

watchman.get('/v1/watchman', (req, res) => {
  res.send({
    payment: payment.storage.toJSON(),
    delivery: delivery.storage.toJSON(),
    warehouse: warehouse.storage.toJSON(),
  })
})

module.exports = watchman
