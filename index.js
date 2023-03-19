const express = require('express');
const bodyParser = require("body-parser")
const app = express(); 
const course = require('course')
const course = new course()

// app.use(bodyParser.json())

// app.post('/api/courses',(req,res) => {
//     res.send(courses)
// })

app.post('/api/courses' , (req,res) => {
    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
})

// app.listen(3000, () => {
//     console.log('Listening port on 3000...')
// })

// const port = process.env.PORT || 3000
// app.listen(port, console.log(`Listening on port ${port}`));

app.put('/api/courses/:id', (req,res) =>{
    const course= courses.find(c => c.id === parseInt(req.params.id));
    if (!course) res.status(404).send('The course was the given ID was.')

    const { error } = validationCourse(req.body);
     if (erorr) {
        res.status(400).send(error.details[0].message);
        return;
     }
     course.name = req.body.name;
     res.send(course);
})

app.delete('/api/courses/:id',(req, res) =>{
    //get course 
    const course= courses.find(c => c.id === parseInt(req.params.id));
    //not existing return 404
    if (!course) res.status(404).send('The course was the given ID was not found.')
    //delete
    const index = course.indexOf(course)
    course.splice(index, 1)
    //return the same course 
    res.send(course);
})

