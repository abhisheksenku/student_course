const express = require('express');
const router = express.Router();
users=[]
router.get("/",(req,res)=>{
    res.send('Fetching all users')
});
router.get("/:id",(req,res)=>{
    res.send(`Fetching user with ID: ${req.params.id}`);
    // const userID = req.params.id;
    // const user = users.find(u=>u.id===userID)
    // if (user){
    //     res.json(user);
    // }
    // else{
    //     res.send('Fetching user with ID: id')
    // }
})
router.post("/",(req,res)=>{
     res.send('Fetching user with ID: id')
    // const userData = req.body;
    // const{name} = req.body
    // const{name,description}= req.body;
    // const newUser = {id:users.length+1,name,description};
    // if(newUser){
    //     users.push(newUser);
    // }
    // res.status(201).json(newUser);
});
module.exports = router;