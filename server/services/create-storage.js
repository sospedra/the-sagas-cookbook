module.exports = function createStorage() {
  const storage = new Map()
  const invalids = new Set()

  return {
    toJSON: () => [...storage],
    delete: (ID) => {
      storage.delete(ID)
      invalids.add(ID)
    },
    set: (ID, data) => {
      !invalids.has(ID) && storage.set(ID, data)
    },
  }
}
