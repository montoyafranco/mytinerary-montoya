const joi = require('joi')

const validator = (req, res, next) => {
  const schema = joi.object({
    firstName: joi.string().max(20).min(2).trim().pattern(new RegExp('[a-zA-Z]')).required().messages({
      'string.min': 'The name most contain more than 2 characters',
      'string.max': "The name most contain less than 20 characters"
    }),
    lastName: joi.string().max(20).min(2).trim().pattern(new RegExp('[a-zA-Z]')).required().messages({
      'string.min': 'The name most contain more than 2 characters',
      'string.max': "The name most contain less than 20 characters"
    }),

    email: joi.string().email({ minDomainSegments: 2 }).required().messages({
      'string.email': 'Incorrect Mail format'
    }),
    password: joi.string().pattern(new RegExp('[a-zA-Z0-9]')).required().trim().min(4).max(30).messages({
      'string.min': 'The password most contain more than 4 characters and less than 30',
      'string.pattern': "The password most contain numbers and letters"
    }),
    photoURL: joi.string().min(2).trim().pattern(new RegExp('[a-zA-Z]')).required().messages({
      'string.min': 'The photo most contain more than 2 letters',
      
    }),
    chooseCountry: joi.string(),

    from: joi.string()
  })

  const validation = schema.validate(req.body.userData, { abortEarly: false })

  if (validation.error) {

    return res.json({ success: false, from: "validator", message: validation.error.details })
  }

  next()


}

module.exports = validator