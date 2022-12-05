
const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose');
const User = require('./model/userSchema')

mongoose
  .connect('mongodb://127.0.0.1:27017/Project')
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch((err) => {
    console.error('Error connecting to mongo', err.reason)
  })

app.use(express.json());

app.use(require('./routes/users'));  //linking router files

app.get('/', (req, res) => {
    res.send('Home');
  })
  



  


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

