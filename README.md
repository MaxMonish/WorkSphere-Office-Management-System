# WorkSphere – Office Management System

WorkSphere is a full-stack **Office Management System** built using the **MERN stack**. It provides a centralized platform for managing employees, attendance, tasks, leave requests, communication, events, and other day-to-day office operations.

## 🚀 Live Demo

**WorkSphere – Office Management System**

## Project Link

**https://bejewelled-cupcake-af9525.netlify.app/**

Live Demo: WorkSphere

## 📌 Project Overview

WorkSphere is designed to simplify office administration by providing separate workflows for **HR and Employees**.

The application includes authentication, role-based access, employee management, attendance tracking, task management, leave management, real-time communication, notifications, and dashboard analytics.

The project follows a full-stack architecture:

**Frontend → React.js**
**Backend → Node.js + Express.js**
**Database → MongoDB**

---

## ✨ Features

### 🔐 Authentication & Authorization

* User registration and login
* Secure authentication
* Role-based access control
* Protected routes
* HR and Employee-specific features

### 👨‍💼 Employee Management

* View employee information
* Manage employee profiles
* Employee-related office information
* HR employee management workflows

### 📊 Dashboard

* Overview of office activities
* Attendance information
* Task statistics
* Leave information
* Important notifications and updates

### 🕐 Attendance Management

* Track employee attendance
* Attendance status and records
* View attendance-related information

### ✅ Task Management

* Create and manage tasks
* Assign tasks
* Track task status
* Monitor pending and completed work

### 📝 Leave Management

* Submit leave requests
* View leave history
* Manage leave requests
* HR approval workflow

### 💬 Communication

* Employee-to-employee communication
* Chat interface
* Real-time messaging support

### 📅 Calendar & Events

* View important events
* Manage office schedules
* Calendar-based event information

### 🔔 Notifications

* Display important system updates
* Inform users about relevant activities and requests

### 👤 Profile Management

* View user profile
* Update profile information
* Manage account-related details

### 📱 Responsive UI

* Desktop-friendly interface
* Mobile and tablet responsive layout
* Responsive navigation and components

---

## 🛠️ Tech Stack

### Frontend

* React.js
* JavaScript
* HTML5
* CSS3
* React Router
* Recharts
* React Icons

### Backend

* Node.js
* Express.js
* REST APIs

### Database

* MongoDB

### Other Technologies

* JWT Authentication
* Socket-based communication
* Git & GitHub
* Netlify for frontend deployment

---

## 📂 Project Structure

```text
WorkSphere/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   │   ├── auth/
│   │   │   ├── common/
│   │   │   ├── employee/
│   │   │   ├── hr/
│   │   │   └── profile/
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── package.json
│   └── index.html
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

# ⚙️ Installation & Setup

## 1. Clone the Repository

```bash
git clone <your-github-repository-url>
cd "WorkSphere - Office Management System"
```

## 2. Install Frontend Dependencies

```bash
cd frontend
npm install
```

## 3. Install Backend Dependencies

Open another terminal:

```bash
cd backend
npm install
```

---

## 🔑 4. Configure Environment Variables

Create a `.env` file inside the backend directory and configure the environment variables required by the project.

Typical configuration may include:

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```

> Use the exact variable names expected by your backend configuration.

Never commit `.env` files or database credentials to GitHub.

---

# ▶️ Running the Project

## Start Backend

From the `backend` directory:

```bash
npm run dev
```

The backend server will start using the project's configured development port.

## Start Frontend

From the `frontend` directory:

```bash
npm run dev
```

Vite will provide the local frontend development URL in the terminal.

---

# 🏗️ Build for Production

To create the production frontend build:

```bash
cd frontend
npm run build
```

To preview the production build locally:

```bash
npm run preview
```
