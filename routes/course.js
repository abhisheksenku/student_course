const express = require('express');
const router = express.Router();
const courses = [

    { id: 1, name: "Frontend", description: "HTML, CSS, JS, React" },
    
    { id: 2, name: "Backend", description: "Node.js, Express, MongoDB" }
    
    ];
router.get('/',(req,res)=>{
    
    res.json(courses);
})
router.get('/:id', (req, res) => {
    const courseId = parseInt(req.params.id, 10);
    const course = courses.find(c => c.id === courseId);
    
    if (course) {
        res.json(course);
    } else {
        res.status(404).send('Course not found');
    }
});
router.post('/',(req,res)=>{
    const {name, description } = req.body;
    const newCourse = {id:courses.length+1,name,description};
    courses.push(newCourse);
    res.status(201).json(newCourse);
})
module.exports = router;