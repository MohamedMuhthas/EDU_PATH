const mongoose = require('mongoose');

const ResourcePersonProfileSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
  title: String,
  qualifications: [String],
  experienceYears: Number,
  subjects: [String],
  educationLevels: [String],
  mediums: [String],
  location: { district: String, city: String },
  online: { type: Boolean, default: false },
  priceRange: { min: Number, max: Number },
  availability: [{ day: String, from: String, to: String }],
  about: String,
  isPublic: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model('ResourcePersonProfile', ResourcePersonProfileSchema);
