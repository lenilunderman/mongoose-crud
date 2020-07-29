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

//* get the elements that will be passed to be updated.
const userInputId = process.argv[2]
const userInputKey = process.argv[3]
const userInputValue = process.argv[4]

// the information will be updated based on the key of that user.
// query example: node user/updateUser.js 5f20d1bb520e06eca31c4e76 'age' 25
//* open the connection to the database

db.once('open', function () {
    User.findById(userInputId)
        .then(person => {
            //* import to compare this *//
            person[userInputKey] = userInputValue
            return person.save()
        })
        .then(console.log)
        .catch(console.error)
        .finally(() => db.close())
})