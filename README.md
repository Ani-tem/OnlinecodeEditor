# 🧠 Online Code Editor

A full-stack online code editor built with **Node.js**, **Express.js**, **PostgreSQL**, and **JavaScript** that supports user authentication, code saving, and real-time collaboration.

## 🚀 Features

1. **User Authentication**
   - Secure login and registration with bcrypt.
   - Session-based authentication.

2. **Code Editor**
   - Supports HTML, CSS, and JavaScript.
   - Multiple file saving per user with title and description.

3. **Dashboard**
   - View, edit, and manage saved code files.
   - Set code visibility to public or private.

4. **Real-Time Collaboration**
   - Share invite links with others to code together using **Socket.io**.

5. **Backend Structure**
   - Modular backend with ES Module syntax (`import`/`export`).
   - PostgreSQL for storage of user data and code snippets.

## 🛠️ Tech Stack

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: PostgreSQL
- **Authentication**: bcrypt + express-session
- **Real-Time**: Socket.io

## 📂 Setup Instructions

```bash
git clone https://github.com/Ani-tem/OnlinecodeEditor.git
cd OnlinecodeEditor
npm install
```
- Configure `.env` with PostgreSQL credentials and session secret.
- Run the server:

```bash
npm start
```

## 🎯 Future Improvements

- Add support for C++ code execution.
- Implement OAuth login (Google, GitHub).
- Improve UI/UX with a React-based frontend.

## 📄 License

This project is licensed under the MIT License.