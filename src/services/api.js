const ROOT = '/v1'

export const checkout = async (query) => {
  const response = await fetch(`${ROOT}/checkout`, {
    method: 'POST',
    body: JSON.stringify(query),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  })

  if (!response.ok) {
    throw new Error()
  }
}

const transform = watcher => watcher.map(([ID, datum]) => [ID.slice(-5), datum])
const selectLatest = ({ payment, warehouse, delivery }) => {
  const [latest] = [payment, warehouse, delivery].sort((a, b) => b.length - a.length)
  return latest
}

export const watchman = async () => {
  const response = await fetch(`${ROOT}/watchman`)
  const payload = await response.json()

  return {
    latest: transform(selectLatest(payload)),
    payment: transform(payload.payment),
    warehouse: transform(payload.warehouse),
    delivery: transform(payload.delivery),
  }
}
