const Joi = require('joi')
const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const { urlencoded } = require('express');


// courses= [
//     { id: 1, name:'course1'},
//     // { id: 1, name:'course1'},
//     // { id: 1, name:'course1'}
// ]

app.use(bodyParser.urlencoded({ extended: true }));


// app.post('/api/courses', (req, res) => {
//     res.send(courses)
// })


app.post('/api/courses',(req, res) =>{
    const schema = {
        name: Joi.string().min(3).required()
    }

    const result = Joi.validation(req.body, schema);
    console.log(result);

    if (!req.body.name) {
        res.status(400).send('this is invalid input');
        return;
    }
    
    
    // const course = {
    //     id: courses.length + 1,
    //     name: req.body.name,
    // }
    // course.push(course)
    // res.send(course)
});

app.listen(3000, console.log('Listening on port 3000...'))