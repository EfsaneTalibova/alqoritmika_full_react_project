const express = require('express');
const app = express();
app.use('/product/:id', (req,res) =>{
 
    res.send('product details' + " " +  req.params.id)
})
app.use('/product', (_,res) =>{
    res.send('product page')
})
app.use('/', (req,res)=>{
    res.send('home page')
})


app.listen(3000, () =>{
    console.log('server on port 3000');
})

console.log('hello');