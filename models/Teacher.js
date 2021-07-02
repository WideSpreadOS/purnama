const mongoose = require('mongoose');

const TeacherSchema = new mongoose.Schema({
    user_id: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    bio: {
        type: String,
        required: true
    },
    teaches: [String],
    employee_id: String,
    hired_date: {
        type: Date,
        default: Date.now
    }
});

const Teacher = mongoose.model('Teacher', TeacherSchema);

module.exports = Teacher;