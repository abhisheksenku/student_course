const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());

const studentRoute = require('./routes/students');
const courseRoute = require('./routes/course');
app.use((req,res,next)=>{
    console.log(`${req.method} request is made to ${req.url}`);
    
    next();
})
app.get('/', (req, res) => {
    res.send('<h1>Welcome</h1>');
});
app.use('/students',studentRoute);
app.use('/course',courseRoute);
app.use((req,res)=>{
    res.status(404).send('<h1>404 page not found</h1>');
})

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`)
})