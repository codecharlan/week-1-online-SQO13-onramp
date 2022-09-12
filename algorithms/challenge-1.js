function countTruthy(arr) {
  truty = arr.filter( fil = (x) => Boolean(x) === true)
  return truty.length

}
module.exports = countTruthy