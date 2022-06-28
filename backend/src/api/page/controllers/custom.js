const { ApplicationError } = require('@strapi/utils').errors
const { transformResponse } = require('../../../utilities/transformResponse')
const _ = require('lodash')

module.exports = {
  findByHandle: async (ctx, next) => {
    try {
      const { handle } = ctx.params
      const entry = await strapi.db
        .query('api::page.page')
        .findOne({
          where: { handle },
          populate: {
            section_items: {
              populate: true
            }
          }
        })

      if(!entry) {
        return ctx.notFound('page.notFound')
      }

      return transformResponse(entry)
    } catch (error) {
      console.log('→ controller.page.custom.findByHandle error', error)
      throw new ApplicationError(error.message)
    }
  }
};
