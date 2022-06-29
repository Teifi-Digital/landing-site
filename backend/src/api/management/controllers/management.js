const { ApplicationError } = require('@strapi/utils').errors
const { transformResponse } = require("../../../utilities/transform-response")

module.exports = {
  findPageByHandle: async (ctx, next) => {
    try {
      const { handle } = ctx.params
      const entry = await strapi.db
        .query('api::page.page')
        .findOne({
          where: { handle },
          populate: true
        })
        
        return transformResponse(entry.section_items)
    } catch (error) {
      console.log('→ controller.management.findPageByHandle error', error)
      throw new ApplicationError(error.message)
    }
  }
};
