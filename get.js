const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(express.json());


const courses = [
    { id: 1, name: 'course1'},
    { id: 2, name: 'course2'},
    { id: 3, name: 'course3'}, 
]


app.get('/', (req,res) => {
    res.send('hello world!')
})

// app.use(bodyParser.json())
app.get('/api/courses', (req, res) =>{
    res.send(courses);
})

app.get('/api/courses/:id', (req, res) => {
    const course = courses.find( c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('the course in a given id was not found...')
    else res.send(course);
})

app.listen(3000 ,console.log('Listening in port 3000...'))