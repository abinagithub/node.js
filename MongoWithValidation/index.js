var express = require('express');
var app = express();
var port = 3000;
const bodyParser = require('body-parser');
const Joi = require('joi');
const { joiPasswordExtendCore } = require('joi-password');
const joiPassword = Joi.extend(joiPasswordExtendCore);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(port, () => {
   console.log('the server is lisining on ' + port)
})

const mongoose = require('mongoose');  
mongoose.connect("mongodb://localhost/node-demo") 
  .then(() =>
   console.log('connected to mongodb...')
  )
  .catch(err => console.log("couldn't connect to mongodb...", err))

var nameSchema = new mongoose.Schema({
   firstName: String,
   lastName: String,
  });

var User = mongoose.model("User", nameSchema);



app.post("/addname", (req, res) => {
   
const myData = new User(req.body);
   myData.save()
   const schema = Joi.object({
      firstName: Joi.string().min(3).required(),
       lastName: joiPassword
       .string()
      //  .minOfSpecialCharacters(1)
      //  .minOfLowercase(1)
      //  .minOfUppercase(1)
      //  .minOfNumeric(1)
      //  .noWhiteSpaces()
      //  .required(),
   });
   const result = schema.validate(req.body);
   if(result.error) {
     res.status(400).send(result.error.details[0].message);
     return;  
  }
   res.send(result)
  });

  