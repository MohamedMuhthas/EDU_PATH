const User = require('../models/User');
const ResourcePersonProfile = require('../models/ResourcePersonProfile');

const approveResourcePerson = async (req, res) => {
  const userId = req.params.userId;
  const profile = await ResourcePersonProfile.findOne({ userId });
  if (!profile) return res.status(404).json({ message: 'Resource person profile not found' });
  profile.isPublic = true;
  await profile.save();

  // also mark underlying user as approved
  await User.findByIdAndUpdate(userId, { isApproved: true });

  res.json({ message: 'Approved', profile });
};

module.exports = { approveResourcePerson };
