const mongoose = require('mongoose');

const ClassSchema = new mongoose.Schema({
  title: { type: String, required: true },
  resourcePersonId: { type: mongoose.Schema.Types.ObjectId, ref: 'ResourcePersonProfile', required: true },
  subjects: [String],
  educationLevel: String,
  grade: Number,
  medium: String,
  type: { type: String, enum: ['online','physical'], default: 'online' },
  location: { district: String, city: String },
  schedule: [{ day: String, start: String, end: String }],
  price: Number,
  ratingAvg: { type: Number, default: 0 },
  shortDescription: String
}, { timestamps: true });

ClassSchema.index({ educationLevel: 1, 'location.city': 1 });
module.exports = mongoose.model('Class', ClassSchema);
