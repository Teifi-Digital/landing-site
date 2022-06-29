const { getFullPopulateObject } = require("../../../../utilities/deep-populate")

module.exports = {
  beforeFindOne: (event) => {
    const populate = event.params?.populate
    const depth = populate[1] ?? 10
    const modelObject = getFullPopulateObject(event.model.uid, depth)
    event.params.populate = modelObject.populate
  }
}
