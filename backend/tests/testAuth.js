const axios = require('axios');

const BASE = 'http://localhost:5000';

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function run() {
  console.log('Waiting 1s for server...');
  await sleep(1000);

  try {
    console.log('Testing /api/health');
    const health = await axios.get(`${BASE}/api/health`);
    console.log('Health:', health.data);
  } catch (err) {
    console.error('Health check failed:', err.message);
    return process.exit(1);
  }

  const testUser = { name: 'Test Student', email: 'test.student@example.com', password: 'Password123!' };

  try {
    console.log('Registering user...');
    const reg = await axios.post(`${BASE}/api/auth/register`, { ...testUser, role: 'student' });
    console.log('Register response:', reg.data.user.email, 'token length:', (reg.data.token || '').length);
  } catch (err) {
    if (err.response) console.error('Register failed:', err.response.data);
    else console.error('Register error:', err.message);
  }

  try {
    console.log('Logging in user...');
    const login = await axios.post(`${BASE}/api/auth/login`, { email: testUser.email, password: testUser.password });
    console.log('Login response:', login.data.user.email, 'token length:', (login.data.token || '').length);
  } catch (err) {
    if (err.response) console.error('Login failed:', err.response.data);
    else console.error('Login error:', err.message);
    return process.exit(1);
  }

  console.log('Auth tests completed.');
  process.exit(0);
}

run();
