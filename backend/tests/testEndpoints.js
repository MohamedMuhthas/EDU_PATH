const axios = require('axios');

const BASE = 'http://localhost:5000';

async function run() {
  try {
    console.log('GET /api/classes');
    const res = await axios.get(`${BASE}/api/classes`);
    console.log('classes count:', (res.data.classes || []).length);
  } catch (err) {
    console.error('Error calling /api/classes', err.message);
    process.exit(1);
  }
  process.exit(0);
}

run();
