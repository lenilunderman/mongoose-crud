'use strict'
const mongoose = require('mongoose')
// tell mongoose to use promises
mongoose.Promise = global.Promise
//* connect mongoose to mongoDB
mongoose.connect('mongodb://localhost/leni-crud', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

//* save the connection between mongoose and mongoDB
const db = mongoose.connection

// require the schema to be used.
const User = require('../models/user')

//* get the values to be passed for the query
const userID = process.argv[2]

//* open the connection to the database
db.once('open', function () {
    // inside the query pass the argument
    User.findById(userID)
        .then(person => {
            console.log(person.toJSON())
        })
        .catch(console.error)
        .finally(() => db.close())
})