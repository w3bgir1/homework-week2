const giveItBackLater = (value, callback) => {
    setTimeout(() => callback(value), 10)

}

const addSomePromises = (somePromise) => {
    return somePromise
    .then(
        result => result.repeat(2),
        err => err.repeat(3)
    )
}

const promiseToGiveItBackLater = value => {
    return new Promise((resolve, reject) => {
        giveItBackLater(value, () => resolve(value))
  })
}

module.exports = { giveItBackLater, addSomePromises, promiseToGiveItBackLater }
