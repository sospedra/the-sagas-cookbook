module.exports = class ServiceError extends Error {
  constructor (serviceName, ID) {
    super(`Something failed at ${serviceName} while processing ${ID}`)

    this.transactionID = ID
    this.serviceName = serviceName
  }
}
