const express = require('express');
const router = express.Router();
const students = [

    { id: 1, name: "Alice" },
    
    { id: 2, name: "Bob" },
    
    { id: 3, name: "Charlie" }
    
    ];
router.get('/',(req,res)=>{
    
    res.json(students);
})
router.get('/:id', (req, res) => {
    const studentId = parseInt(req.params.id, 10);
    const student = students.find(s => s.id === studentId);
    
    if (student) {
        res.json(student);
    } else {
        res.status(404).send('Student not found');
    }
});
router.post('/',(req,res)=>{
    const {name} = req.body;
    const newStudent = {id:students.length+1,name};
    students.push(newStudent);
    res.status(201).json(newStudent);
})
module.exports = router;