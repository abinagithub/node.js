// user Model

const mongoose = require('mongoose')
const Joi = require('joi')

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Please enter a email'],
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: [true, 'Please enter a password'],
    minlength: 8,
  },
})

const User = mongoose.model('user', userSchema)

const validateUser = (user) => {
  app.post('/api/courses', (req, res) => {
    const schema = Joi.object({
    // email: Joi.string().email().min(5).max(500).required(),
    // password: Joi.string().min(8).max(1024).required(),
    name: Joi.string().min(3).required(),
  })
  const result = schema.validate(req.body);
  if(result.error) {
    res.status(400).send(result.error.details[0].message);
    return;
}
  res.send(result)
})
}
module.exports = {
  User,
  validateUser,
}