'use strict'
//require mongoose
const mongoose = require('mongoose')
//tell mongoose to use schema
const Schema = mongoose.Schema

// create the schema for user
const userSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: false
    }
}, {
    timestamps: true,
    // to object and to json, allow the database to read that type of date for the user
    toObject: { virtuals: true },
    toJSON: { virtuals: true }
})

// use virtuals to create a full name
userSchema.virtual('fullName').get(function () {
    return this.firstName + ' ' + this.lastName
})

//create the model to the schema
const User = mongoose.model('User', userSchema)

// export the module, so it can be used elsewhere.
module.exports = User