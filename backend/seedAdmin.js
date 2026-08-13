const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const connectDB = require('./config/db');
const User = require('./models/User');

dotenv.config();

async function seed() {
  await connectDB();
  const email = process.env.SEED_ADMIN_EMAIL || 'admin@edupath.local';
  const password = process.env.SEED_ADMIN_PASSWORD || 'AdminPass123!';

  const existing = await User.findOne({ email });
  const salt = await bcrypt.genSalt(10);
  const passwordHash = await bcrypt.hash(password, salt);

  if (existing) {
    existing.passwordHash = passwordHash;
    existing.role = 'admin';
    existing.isApproved = true;
    await existing.save();
    console.log('Updated existing admin user:', email);
  } else {
    await User.create({ name: 'Admin', email, passwordHash, role: 'admin', isApproved: true });
    console.log('Created admin user:', email);
  }
  process.exit(0);
}

seed().catch(err => { console.error(err); process.exit(1); });
