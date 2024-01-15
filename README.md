# Next.js 14 WriteEdge Blog Application with Drizzle ORM and SQLite3

## Description

This is a simple blog application built with Next.js 14, utilizing the Drizzle ORM for database interactions and SQLite3 as the database backend. The application demonstrate how to build simple application. Include API, add page, showing all posts and authorization, to restrict adding post only for registered users.

## How to Get Repository

To get a copy of the repository, you can use the following Git command:

```bash
git clone https://github.com/pszabaciuk/writeedge
```

## How to Compile

Before compiling the application, make sure you have Node.js and npm installed. Then, navigate to the project directory using the command line and install the dependencies:

```bash
cd your-blog-repository
npm install
```

## Database Setup

The application uses SQLite3 as the database. Make sure to create the necessary tables by running the migration script:

```bash
npm run apply-migrate
```

For first time you need some seed data. Make sure to run this only once, after create database.

```bash
npm run seed-db
```

### Environment Variables

Ensure that your environment variables are properly configured. Create a .env.local file in the root of your project and add the following variables:

```
AUTH_SECRET=your_seed_to_secure_authentication
GITHUB_ID=your_github_app_id
GITHUB_SECRET=your_github_app_secret
```

## How to Run

After installing the dependencies, you can run the blog application using the following command:

```bash
npm run dev
```
