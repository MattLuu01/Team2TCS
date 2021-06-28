const express = require('express')
const app = express()
const mongoose = require('mongoose');
const addNews = require('./routes/addNews')
mongoose.connect(
    //'mongodb://mongo-db:27017/taskManager',
    'mongodb://localhost:27017/MediaApp',
    {
        useNewUrlParser:true,
        useUnifiedTopology:true
    },
    (err) => err ? console.log('Something got wrong', err) : console.log('DB Connected')
)


let port = 3300

let apiRoutes = require('./routes/routes')

app.use('/api',apiRoutes)
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use('/news', addNews)
module.exports = app