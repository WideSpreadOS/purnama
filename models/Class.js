const mongoose = require('mongoose');

const ClassSchema = new mongoose.Schema({
    teacher: {type: mongoose.Schema.Types.ObjectId, ref: 'Teacher'},
    class_name: String,
    type: String,
    description: String,
    max_occupants: Number,
    recurring: Boolean,
    price: {
        type: Number,
        default: 17,
        trial: {
            type: Number,
            default: 10
        }
    },
    starts: Date,
    ends: Date,
    room_temp: Number,
    color: String,
    photo: String,
    tags: [String]
});

const Class = mongoose.model('Class', ClassSchema);

module.exports = Class;