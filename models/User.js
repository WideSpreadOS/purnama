const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    security_level: {
        type: Number,
        default: 3
    },
    joined_date: {
        type: Date,
        default: Date.now
    },
    allergies: [String],
    emergency_contact: {
        fname: String,
        lname: String,
        relationship: String,
        phone: String,
    },
    waiver_signed: Boolean,
    phone1: String,
    phone2: String,
    dob: Date
});

const User = mongoose.model('User', UserSchema);

module.exports = User;