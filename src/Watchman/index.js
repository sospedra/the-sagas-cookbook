import React from 'react'
import { connect } from 'react-redux'
import Aside from 'components/Aside'
import Log from 'components/Log'
import { slice } from './slice'

const Watchman = (props) => (
  <Aside>
    <Log>
      <h3>ID</h3>
      {props.latest.map(([ID]) => (
        <p key={ID}>{ID}</p>
      ))}
    </Log>

    <Log>
      <h3>Payment</h3>
      {props.payment.map(([ID, price]) => (
        <p key={ID}>{ID} with price {price}</p>
      ))}
    </Log>

    <Log>
      <h3>Warehouse</h3>
      {props.warehouse.map(([ID, products]) => (
        <p key={ID}>{ID} with products size {products.length}</p>
      ))}
    </Log>

    <Log>
      <h3>Delivery</h3>
      {props.delivery.map(([ID, address]) => (
        <p key={ID}>{ID} with address {address.slice(0, 5)}...</p>
      ))}
    </Log>
  </Aside>
)

export default connect(
  (state) => slice.selectors.getWatchman(state),
)(Watchman)
