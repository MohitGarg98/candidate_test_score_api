const express = require('express')
const mongoose = require('mongoose')
const app = express();

mongoose.connect("mongodb://localhost:27017/studentsmarksdb", {useNewUrlParser: true});

app.use(express.json())

const candidateRouter = require('./routes/candidate')
app.use('/candidate',candidateRouter);

app.listen(3000, () => {
    console.log('Server started');
})