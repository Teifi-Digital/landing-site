const { ApplicationError, ValidationError } = require('@strapi/utils').errors
const { transformResponse } = require('../../../utilities/transform-response')
const { getFullPopulateObject } = require('../../../utilities/deep-populate')
const Joi = require('joi')
const { getJoiSchema } = require('../../../utilities/joi')

module.exports = {
  async handleWebhookCustom(ctx, next) {
    try {
      const body = ctx.request.body
      const { model, event, entry } = body

      if (process.env.NODE_ENV === 'development') {
        console.log('───────────── WEBHOOK ────────────────')
        console.log(require('util').inspect(body, false, null, true))
        console.log('─────────────────────────────')
      }

      return { ok: true }

    } catch (error) {
      console.log('→ controller.management.handleWebhookCustom error', error)
      return { ok: false }
    }
  },

  findPageByHandle: async (ctx, next) => {
    try {
      const { handle } = ctx.params

      const populate = getFullPopulateObject('api::page.page', 20).populate
      delete populate.section_items.populate.form.populate.submissions

      const entry = await strapi.db
        .query('api::page.page')
        .findOne({ where: { handle }, populate })

      return transformResponse(entry.section_items)

    } catch (error) {
      console.log('→ controller.management.findPageByHandle error', error)
      throw new ApplicationError(error.message)
    }
  },

  createSubmission: async (ctx, next) => {
    const { formHandle } = ctx.params
    const body = ctx.request.body
    let entryForm

    try {
      const populate = getFullPopulateObject('api::form.form', 20).populate
      delete populate.submissions

      entryForm = await strapi.db
        .query('api::form.form')
        .findOne({ where: { handle: formHandle }, populate })

      if (!entryForm) {
        throw new Error('entryForm.notFound')
      }

      const objJoiSchema = {}
      const entryInputItems = entryForm.input_items
      for (let i = 0; i < entryInputItems.length; i++) {
        const { name, type, required, max_length: maxLength } = entryInputItems[i]
        objJoiSchema[name] = getJoiSchema({ type, required, maxLength })
      }
      await Joi.object(objJoiSchema).validateAsync(body, { allowUnknown: true })

    } catch (error) {
      console.log('→ management.c.createSubmission validate error', error)
      throw new ValidationError(error.message)
    }

    try {
      const inputHandlerItems = entryForm.input_items.map(({ label, name }) => ({ label, value: body[name] }))
      const createData = {
        form: { id: entryForm.id },
        input_handler_items: inputHandlerItems,
      }
      const createResult = await strapi.entityService.create('api::submission.submission', { data: createData })

      return transformResponse(createResult)
    } catch (error) {
      console.log('→ controller.management.createSubmission error', error)
      throw new ApplicationError(error.message)
    }
  }
}
