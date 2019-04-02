const valid = {
  hasValidAddress: true,
  address: 'Calle Falsa 123',
  price: 42,
  products: [{
    price: 42,
  }],
}

const wrongWarehouse = {
  ...valid,
  products: [],
}

const wrongPayment = {
  ...valid,
  price: -1337,
}

const wrongDelivery = {
  ...valid,
  hasValidAddress: false,
}

export default [
  ['Valid cart', valid],
  ['Wrong Payment', wrongPayment],
  ['Wrong warehouse', wrongWarehouse],
  ['Wrong Delivery', wrongDelivery],
]
