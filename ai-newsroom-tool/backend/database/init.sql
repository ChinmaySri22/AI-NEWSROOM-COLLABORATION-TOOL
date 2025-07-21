-- AI Newsroom Database Schema
-- This script creates the initial database structure for the AI Newsroom Collaboration Tool

-- Create users table
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    role VARCHAR(20) NOT NULL DEFAULT 'writer' CHECK (role IN ('writer', 'editor', 'admin')),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create articles table
CREATE TABLE IF NOT EXISTS articles (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    brief TEXT,
    author_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    status VARCHAR(20) NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'review', 'published')),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create index on author_id for better performance
CREATE INDEX IF NOT EXISTS idx_articles_author_id ON articles(author_id);

-- Create index on status for filtering
CREATE INDEX IF NOT EXISTS idx_articles_status ON articles(status);

-- Insert initial users
INSERT INTO users (username, email, password_hash, role) VALUES
    ('admin', 'admin@example.com', 'placeholder_admin_hash', 'admin'),
    ('writer', 'writer@example.com', 'placeholder_writer_hash', 'writer')
ON CONFLICT (username) DO NOTHING;

-- Display confirmation message
SELECT 'Database schema created successfully!' as message; 