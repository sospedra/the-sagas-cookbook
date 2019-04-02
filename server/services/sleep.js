const ms = require('ms')

module.exports = function sleep (s) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms(s))
  })
}
