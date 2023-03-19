const config = require('config')
const Routes = require('./routes')
//load up dependencies.
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const Joi = require('joi');
const { joiPasswordExtendCore } = require('joi-password');
const joiPassword = Joi.extend(joiPasswordExtendCore);

// app.set(name,values)
app.set('view engine','pug');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = process.env.NODE_env || 3000;
app.listen(port,() =>{ console.log(`Listening on port ${port}`) } )
app.set("port", port)

// // load our API routes
app.use('/', Routes);

//configuration
// console.log('Application Name: '+ config.get('name'));
// console.log('mail server: '+ config.get('mail.host'));
// console.log('mail server: '+ config.get('mail.password'));
//post validation.
app.post('/api/courses', (req, res) =>{
    const schema = Joi.object({
        name: Joi.string().min(3).required(),
        password: joiPassword
        .string()
        .minOfSpecialCharacters(1)
        .minOfLowercase(1)
        .minOfUppercase(1)
        .minOfNumeric(1)
        .noWhiteSpaces()
        .required(),
    });
  const result = schema.validate(req.body);
  if(result.error) {
    res.status(400).send(result.error.details[0].message);
    return;  
 }
  res.send(result)
})







