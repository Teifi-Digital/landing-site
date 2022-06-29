const _ = require('lodash')

/**
 * @param { Any } resource : 
 * @param { Object } meta : { pagination: {} }
 * @param { Array } removeAttributes : ['key1', 'key2']
 * @returns 
 */
const transformResponse = (resource, meta = {}, removeAttributes = []) => {
  if(removeAttributes.length > 0) {
    if(_.isArray(resource)) {
      resource.forEach(item => removeAttributes.forEach(attr => delete item[attr]))
    }
    if(_.isObject(resource)) {
      removeAttributes.forEach(attr => delete resource[attr])
    }
  }
  if (Object.keys(meta).length === 0) {
    return { ok: true, data: resource }
  }
  return { 
    ok: true, 
    data: resource,
    meta 
  }
}

module.exports = {
  transformResponse,
}
