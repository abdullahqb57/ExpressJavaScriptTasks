const express = require('express');
const app = express();
const Joi = require('joi')
const port = process.env.PORT || 3000;
app.use(express.json());
const courses = [
    {id: 1, name: 'NOde'},
    {id: 2, name: 'Express'},
    {id: 3, name: 'React'}
]

app.get('/ths', (req, res) => {
    console.log('123');
    console.log('abc');
    res.send('Hello world');
})
app.get('/api/courses', (req, res) => {
    res.send(courses);
})
app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) res.status(404).send('course given ID was not there..')
    res.send(course);
})
app.get('/api/post/:year/:month', (req, res) => {
    res.send(req.params);
})
app.post('/api/courses',(req, res) => {
    const schema = {
        name: Joi.string().min(3).required()
    }
    const result =Joi.validate(req.body, schema);
    console.log(result);
    
    // if(!req.body.name || req.body.name.length <3){
    //     res.status(400).send('Name is req and should be minimum 3 char');
    //     return;
    // }
    if(result.error){
        res.status(400).send(result.error.details[0].message);
        return;
    }
    
    const course = {
        id: courses.length + 1,
        name: req.body.name
    }
    courses.push(course);
    res.send(course);
})

app.put('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) res.status(404).send('course given ID was not there..')
    
   const { error} = validateCourse(req.body);

    if(error){
        res.status(400).send(result.error.details[0].message);
        return;
    }

    course.name = req.body.name;
    res.send(course);
})

function validateCourse(course){
    const schema = {
        name: Joi.string().min(3).required()
    }
    return Joi.validate(course, schema);
    
}

app.delete('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) res.status(404).send('course with given id was not present');

    const index = courses.indexOf(course);
    courses.splice(index, 1);
    res.send(course);
})



app.listen(port, (err) => {
    if(err){
        throw err
    } else {
        console.log(`running on port number ${port}..`)
    }
});
