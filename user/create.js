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

// requiring the scheme model to be used.
const User = require('../models/user')

//* get the inputs to be used in this model
//// argv 0 - node itself  argv 1 - path itself
const firstName = process.argv[2]
const lastName = process.argv[3]
const age = process.argv[4]

// query example: node/user/create.js 'leni' 'lunderman' 30

//* open the connection with the database
db.once('open', function () {
    User.create({
        firstName: firstName,
        lastName: lastName,
        age: age
    })
        .then(console.log)
        .catch(console.error)
        //close the connection with the database
        .finally(() => db.close())
})