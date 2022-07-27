const checkBody = (body) => {
  if(body.title.length || body.description.length) {
      return true
  }
  return false
}

module.exports = checkBody