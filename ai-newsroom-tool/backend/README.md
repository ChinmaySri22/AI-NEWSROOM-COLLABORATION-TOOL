# AI Newsroom Backend

This is the backend server for the AI Newsroom Collaboration Tool, built with Node.js and Express.

## Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn
- PostgreSQL database

### Installation

1. Install dependencies:
```bash
npm install
```

2. Set up the database:
```bash
# Create the database (if not exists)
createdb newsroom_db

# Run the initialization script
psql -U your_user -d newsroom_db -f database/init.sql
```

3. Start the server:
```bash
node server.js
```

4. The server will start on `http://localhost:5000`

### Available Scripts

- `node server.js` - Start the development server
- `npm test` - Run tests (not configured yet)

### Environment Variables

Create a `.env` file in the backend directory with:
```
PORT=5000
DB_USER=your_username
DB_HOST=localhost
DB_NAME=newsroom_db
DB_PASSWORD=your_password
DB_PORT=5432
```

### Database Setup

The application uses PostgreSQL with the following tables:

#### Users Table
- `id` - Primary key
- `username` - Unique username
- `email` - Unique email address
- `password_hash` - Hashed password
- `role` - User role (writer, editor, admin)
- `created_at` - Timestamp

#### Articles Table
- `id` - Primary key
- `title` - Article title
- `content` - Article content
- `brief` - AI input brief
- `author_id` - Foreign key to users table
- `status` - Article status (draft, review, published)
- `created_at` - Creation timestamp
- `updated_at` - Last update timestamp

### API Endpoints

- `GET /` - Returns a welcome message confirming the server is running
- `GET /api/test-db` - Test database connection

## Project Structure

```
backend/
├── config/
│   └── db.js         # Database connection module
├── database/
│   └── init.sql      # Database schema initialization
├── server.js         # Main server file
├── package.json      # Dependencies and scripts
├── .env             # Environment variables
└── README.md        # This file
```

## Technologies Used

- Node.js
- Express.js
- CORS middleware
- dotenv for environment variables
- pg (PostgreSQL client) 