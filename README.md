Here are the complete steps to run AI Newsroom tool from scratch:

---

## 1. **Start the Database**

**a. Make sure PostgreSQL is installed and running.**  
If not installed, download from: https://www.postgresql.org/download/windows/

**b. Create the database and user (if not already done):**
```sql
-- Open psql (PostgreSQL shell) as the postgres user:
psql -U postgres

-- In the psql prompt, run:
CREATE DATABASE newsroom_db;
-- (Optional) Create a user if you want (or use 'postgres'):
CREATE USER testuser WITH PASSWORD 'password';
GRANT ALL PRIVILEGES ON DATABASE newsroom_db TO testuser;
\q
```

**c. Run the schema/init script:**
```bash
# From your backend directory:
psql -U postgres -d newsroom_db -f database/init.sql
```
*(Replace `postgres` with your DB user if different.)*

---

## 2. **Configure Environment Variables**

**a. Edit `ai-newsroom-tool/backend/.env` to match your DB credentials:**
```
PORT=5000
DB_USER=postgres         # or your DB user
DB_HOST=localhost
DB_NAME=newsroom_db
DB_PASSWORD=your_password_here
DB_PORT=5432
JWT_SECRET=supersecretjwtkey
```

---

## 3. **Install Backend Dependencies**

```bash
cd ai-newsroom-tool/backend
npm install
```

---

## 4. **Start the Backend Server**

```bash
node server.js
```
You should see:  
`Server is running on port 5000`

---

## 5. **Install Frontend Dependencies**

```bash
cd ../frontend
npm install
```

---

## 6. **Start the Frontend Development Server**

```bash
npm run dev
```
You should see a local address like:  
`http://localhost:5173`

---

## 7. **Use the App**

- Open your browser to `http://localhost:5173`
- Register a new user, log in, create articles, and view the dashboard.

---

## 8. **(Optional) Test API Endpoints Directly**

You can use Postman or curl to test endpoints like:
- `POST http://localhost:5000/api/auth/register`
- `POST http://localhost:5000/api/auth/login`
- `GET http://localhost:5000/api/articles` (with Bearer token)
- `POST http://localhost:5000/api/articles` (with Bearer token)

---

## **Summary Checklist**

- [ ] PostgreSQL running, DB and tables created
- [ ] `.env` configured in backend
- [ ] Backend: `npm install` + `node server.js`
- [ ] Frontend: `npm install` + `npm run dev`
- [ ] App accessible at `http://localhost:5173`

---

If you follow these steps, AI Newsroom tool will be fully up and running!  
