const express = require('express');
const router = express.Router();
router.get("/",(req,res)=>{
    res.send(`Fetching cart for user with ID: ${req.params.id}`)
});
router.post("/",(req,res)=>{
    res.send('Adding product to cart for user with ID: userId');
});
module.exports = router;