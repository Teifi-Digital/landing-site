const Joi = require("joi")

module.exports.getJoiSchema = ({ type, required, maxLength }) => {
  switch (type) {
    case 'text': {
      if (required) {
        return Joi.string().required()
      } else {
        return Joi.string().allow('')
      }
    }

    case 'textarea': {
      let obj = Joi.string()
      if (required) {
        obj = obj.required()
      }
      if(maxLength) {
        obj = obj.max(maxLength)
      }
      return obj
    }

    case 'number': {
      if (required) {
        return Joi.number().required()
      } else {
        return Joi.number().allow('')
      }
    }

    case 'email': {
      if (required) {
        return Joi.string().email().required()
      } else {
        return Joi.string().email().allow('')
      }
    }

    case 'date': {
      if (required) {
        return Joi.string().isoDate().required()
      } else {
        return Joi.string().isoDate().allow('')
      }
    }

    default:
      if (required) {
        return Joi.string().required()
      } else {
        return Joi.string().allow('')
      }
  }

}