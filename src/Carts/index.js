import React, { useState, useEffect } from 'react'
import Box from 'components/Box'
import Row from 'components/Row'
import Status from 'components/Status'
import * as api from 'services/api'
import carts from './carts'

const Cart = (props) => {
  const [status, setStatus] = useState('idle')

  useEffect(() => {
    if (status === 'fetching') {
      api.checkout(props.query)
        .then(() => setStatus('success'))
        .catch(() => setStatus('error'))
    }
  }, [status])

  return (
    <Box
      onClick={() => setStatus('fetching')}
      isFetching={status === 'fetching'}
    >
      <h3>{props.name}</h3>
      <pre>{JSON.stringify(props.query, null, 2)}</pre>
      <Status status={status} />
    </Box>
  )
}

const CartList = () => (
  <Row>
    {carts.map(([name, query]) => (
      <Cart key={name} name={name} query={query} />
    ))}
  </Row>
)

export default CartList
