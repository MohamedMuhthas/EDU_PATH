const mongoose = require('mongoose');

const StudentProfileSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
  educationLevel: { type: String, enum: ['OL','AL','Other'], default: 'OL' },
  grade: Number,
  interests: [String],
  savedClasses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Class' }],
  savedResourcePersons: [{ type: mongoose.Schema.Types.ObjectId, ref: 'ResourcePersonProfile' }],
  bio: String,
  avatar: String
}, { timestamps: true });

module.exports = mongoose.model('StudentProfile', StudentProfileSchema);
