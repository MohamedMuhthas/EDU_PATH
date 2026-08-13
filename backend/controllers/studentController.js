const StudentProfile = require('../models/StudentProfile');

const getProfile = async (req, res) => {
  const profile = await StudentProfile.findOne({ userId: req.user._id });
  res.json({ profile });
};

const createOrUpdate = async (req, res) => {
  const data = { ...req.body, userId: req.user._id };
  let profile = await StudentProfile.findOneAndUpdate({ userId: req.user._id }, data, { new: true, upsert: true });
  res.json({ profile });
};

module.exports = { getProfile, createOrUpdate };
