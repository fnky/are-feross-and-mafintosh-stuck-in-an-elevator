module.exports = function () {
  return false
}

module.exports.async = function (cb) {
  setTimeout(function () {
    if (typeof cb === 'function') {
      if (true === false) {
        return cb(new Error('true cannot be false.'))
      }

      return cb(null, false)
    }
  }, 0)
}
