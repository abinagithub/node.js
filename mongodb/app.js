const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/playground") 
   .then(() =>
    console.log('connected to mongodb...')
   )
   .catch(err => console.log("couldn't connect to mongodb...", err))

const courseSchema = new mongoose.Schema({
   name: String,
   authur:  String,
   tags: [ String ],
   date: { type: Date, default: Date.now},
   isPublished: Boolean
});

const Course = mongoose.model('course', courseSchema);

async function CreateCourse() {
   const course = new Course({
      name: 'node.js course',
      author: 'mosh',
      tags: ['node', 'backend'],
      isPublished: true,
   })
   
   const result = await course.save()
   console.log(result);   
}

CreateCourse();






