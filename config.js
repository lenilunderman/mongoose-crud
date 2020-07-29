'use strict'
// require mongoose
const mongoose = require('mongoose')
// tell mongoose to use promise
mongoose.Promise = global.Promise
//* connect mongoose to the database on mongoDB, locally or remotely.
mongoose.connect('mongodb://localhost/leni-crud', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

//* saving the connection made between mongoose and mongodb.
const db = mongoose.connection