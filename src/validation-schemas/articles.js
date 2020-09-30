const Joi = require('joi')

exports.list = Joi.object({
  search: Joi.string(),
  sort: Joi.string().valid('newest', 'oldest', 'relevance'),
  page: Joi.number().integer()
})
