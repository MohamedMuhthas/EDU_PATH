const Class = require('../models/Class');

const list = async (req, res) => {
  const filter = {};
  // Support basic filters via query params
  if (req.query.educationLevel) filter.educationLevel = req.query.educationLevel;
  if (req.query.subject) filter.subjects = { $in: [req.query.subject] };
  if (req.query.city) filter['location.city'] = req.query.city;

  const classes = await Class.find(filter).limit(50);
  res.json({ classes });
};

const create = async (req, res) => {
  const data = req.body;
  data.resourcePersonId = req.body.resourcePersonId || req.user._id; // allow creating tied to resource person
  const cls = await Class.create(data);
  res.status(201).json({ class: cls });
};

module.exports = { list, create };
