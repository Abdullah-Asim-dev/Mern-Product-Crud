# 🛒 MERN E-commerce Product Management App

A full-stack **MERN E-commerce Product Management application** for managing products through a modern React frontend, Express.js backend, and MongoDB database.

The application demonstrates complete **CRUD (Create, Read, Update, Delete)** functionality, allowing users to add, view, update, and delete products through a responsive web interface.

---

## 📌 Overview

This project was built to practice and demonstrate full-stack development using the **MERN stack**.

The frontend communicates with a REST API built with Node.js and Express.js, while MongoDB is used to store and manage product data.

The application provides a simple product management workflow where users can perform essential e-commerce product operations from the frontend.

---

## ✨ Features

* ➕ Add new products
* 👀 View all products
* ✏️ Update existing products
* 🗑️ Delete products
* 🔄 Complete CRUD functionality
* 🔗 REST API integration
* 🗄️ MongoDB database integration
* ⚡ React-based frontend
* 📱 Responsive user interface
* 🧩 Separate frontend and backend architecture
* 🛡️ Backend API for product management

---

## 🛠️ Tech Stack

### Frontend

| Technology            | Purpose                       |
| --------------------- | ----------------------------- |
| **React.js**          | User interface                |
| **JavaScript (ES6+)** | Application logic             |
| **Tailwind CSS**      | Styling and responsive design |
| **Axios**             | API communication             |
| **React Router**      | Client-side navigation        |

### Backend

| Technology     | Purpose                        |
| -------------- | ------------------------------ |
| **Node.js**    | Server-side runtime            |
| **Express.js** | REST API and backend framework |
| **Mongoose**   | MongoDB object modeling        |
| **Multer**     | Product image/file handling    |

### Database

* **MongoDB** — Product data storage

### Deployment

* **Vercel** — Frontend deployment
* **Railway** — Backend deployment
* **MongoDB** — Database

---

## 🔄 Product Management Flow

```text
User
 │
 ▼
React Frontend
 │
 ▼
Axios API Request
 │
 ▼
Express.js Backend
 │
 ▼
Product API
 │
 ▼
MongoDB
 │
 ▼
Database Response
 │
 ▼
React Frontend
```

---

## 🔁 CRUD Operations

### Create Product

Users can add a new product through the product form.

```text
Product Form
     ↓
POST Request
     ↓
Express API
     ↓
MongoDB
```

### Read Products

The application retrieves product data from MongoDB and displays it in the frontend.

```text
MongoDB
   ↓
GET Request
   ↓
Express API
   ↓
React Product List
```

### Update Product

Existing product information can be edited and updated.

```text
Edit Product
     ↓
PUT/PATCH Request
     ↓
Express API
     ↓
MongoDB
```

### Delete Product

Products can be removed from the database through the delete functionality.

```text
Delete Product
     ↓
DELETE Request
     ↓
Express API
     ↓
MongoDB
```

---

## 🏗️ Application Architecture

```text
MERN-Ecommerce/
│
├── Frontend
│   │
│   ├── React.js
│   ├── Tailwind CSS
│   ├── Product Components
│   └── API Integration
│
└── Backend
    │
    ├── Node.js
    ├── Express.js
    ├── Routes
    ├── Controllers
    ├── Models
    └── MongoDB
```

The application uses a separated frontend and backend architecture. The React frontend communicates with the Express.js backend through REST APIs, while MongoDB handles persistent product storage.

---

## 📂 Project Structure

```text
MERN-Ecommerce/
│
├── Frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── public/
│   ├── package.json
│   └── ...
│
├── Backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── uploads/
│   ├── index.js
│   ├── package.json
│   └── ...
│
└── README.md
```

---

## 💻 Getting Started

### 1. Clone the Repository

```bash
git clone <your-repository-url>
```

### 2. Frontend Setup

```bash
cd Frontend
npm install
npm run dev
```

### 3. Backend Setup

Open a separate terminal:

```bash
cd Backend
npm install
npm start
```

---

## 📡 API Operations

The backend provides API endpoints for managing products.

| Operation | HTTP Method | Purpose                    |
| --------- | ----------- | -------------------------- |
| Create    | `POST`      | Add a new product          |
| Read      | `GET`       | Retrieve products          |
| Update    | `PUT/PATCH` | Update product information |
| Delete    | `DELETE`    | Remove a product           |

---

## 🎯 What This Project Demonstrates

This project demonstrates practical experience with:

* Building a full-stack MERN application
* Creating REST APIs with Express.js
* Connecting Node.js applications with MongoDB
* Implementing CRUD operations
* Managing product data
* Connecting React with backend APIs
* Handling API requests with Axios
* Structuring frontend and backend applications separately
* Working with MongoDB through Mongoose
* Handling product uploads with Multer
* Deploying full-stack applications

---

## 📌 Project Highlights

* Full-stack MERN architecture
* Complete product CRUD functionality
* MongoDB-powered data persistence
* REST API communication
* Responsive React interface
* Separate frontend and backend
* Product image/file handling
* Production deployment setup

---

## 🚀 Deployment

The application can be deployed using:

```text
Frontend
   ↓
Vercel

Backend
   ↓
Railway

Database
   ↓
MongoDB
```

This separation allows the frontend, backend, and database to operate as independent services.

---

## 👨‍💻 Author

**Abdullah Asim**

**MERN Stack Developer | React Developer**

* GitHub: https://github.com/Abdullah-Asim-dev
* LinkedIn: https://www.linkedin.com/in/abdullah-asim-dev/

---

## 📄 License

This project was built for learning, development, and portfolio purposes.

