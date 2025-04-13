const express = require('express');
const router = express.Router();
router.get("/",(req,res)=>{
    res.send('Fetching all products')
});
router.get('/:id',(req,res)=>{
    res.send(`Fetching product with ID: ${req.params.id}`);
})
router.post("/",(req,res)=>{
    res.send('"Adding a new product"');
});
module.exports = router;
