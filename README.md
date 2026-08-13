# EduPath

EduPath — Student Learning & Career Guidance Platform (MERN stack)

This repository contains the starter scaffold for the EduPath project. It includes a minimal backend skeleton and a placeholder frontend folder. Follow the developer roadmap to build features step-by-step.

Next steps:
- Install backend dependencies: `npm install` inside `backend`
- Start dev server: `npm run dev`
- Run auth smoke tests: `npm run test:auth`
- Run endpoints test: `node tests/testEndpoints.js`

How to run locally (quick):
1. Backend
```bash
cd "C:\UOV SUBJECTS\Edu_Path\backend"
npm install
cp .env.example .env   # then edit .env to add your MongoDB Atlas URI and JWT_SECRET
npm run dev
```

2. Frontend (placeholder)
```bash
cd "C:\UOV SUBJECTS\Edu_Path\frontend"
npm install
npm run dev
```

Notes:
- The backend uses an in-memory MongoDB when `MONGO_URI` is not set; for production use, set `MONGO_URI` to a MongoDB Atlas connection.
- I will continue implementing profiles, classes, search, and frontend pages next.

Admin seeding and MongoDB Atlas
- To use MongoDB Atlas, set `MONGO_URI` in `backend/.env` (copy from `.env.example`).
- After setting `MONGO_URI`, you can create an initial admin user with:

```bash
cd "C:\UOV SUBJECTS\Edu_Path\backend"
npm run seed:admin
```

The seed script will create (or update) an admin account using the `SEED_ADMIN_EMAIL` and `SEED_ADMIN_PASSWORD` environment variables if provided, otherwise it uses `admin@edupath.local` / `AdminPass123!`.

