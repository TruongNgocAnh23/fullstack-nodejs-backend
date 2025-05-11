const express = require('express');// commonjs
require('dotenv').config(); // khai bao su dung env
const path = require('path');
const app = express() // app express
const port = process.env.PORT || 8888 //  lay tu .env
const hostname = process.env.HOST_NAME // lay tu .env
//config template engine
app.set('views', path.join(__dirname, 'views')) // save address chua template
app.set('views engine', 'ejs')

//config static files: image/css/js
app.use(express.static(path.join(__dirname, 'public')))


//khai bao route
app.get('/', (req, res) => {
    res.render('sample.ejs')
})

//chay server
app.listen(port, hostname, () => {
    console.log(`Example app listening on porttt ${port}`)
})