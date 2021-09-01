const express = require('express')

const router = express.Router()

router.get('/add-product',(req,res,next)=>{ 
    res.write("<h1>The 'add-product' page</h1>")    
    res.write("<form action='/product' method='POST'><input type='text' name='title'><button type='submit'>Add Product</button></from>")
})

router.post('/product',(req,res,next)=>{
    console.log(req.body)
    res.redirect('/')
})

module.exports = router