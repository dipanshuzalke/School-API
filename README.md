# 🏫 School Management API

A RESTful API built using **Node.js**, **Express.js**, and **PostgreSQL** to manage school data.
This system allows users to add new schools and retrieve a list of schools sorted by proximity to a given location.

---

## ⚠️ Note on Database Choice

> Due to cloud hosting limitations with MySQL, this project uses **PostgreSQL (hosted on Render)** for deployment.

* The **API design remains unchanged**
* The database layer is **fully interchangeable**
* The same implementation can easily be adapted to MySQL with minimal query changes

---

## 🚀 Features

*  Add a new school with name, address, latitude, and longitude
*  Retrieve schools sorted by proximity to user location
*  Input validation for all fields
*  RESTful API design
*  Database integration (PostgreSQL)

---

## 🛠️ Tech Stack

* **Backend:** Node.js, Express.js
* **Database:** PostgreSQL
* **Testing Tool:** Postman
* **Environment Management:** dotenv

---

## 📁 Project Structure

```
school-management-api/
│── controllers/
│     └── schoolController.js
│── routes/
│     └── schoolRoutes.js
│── utils/
│     └── distance.js
│── db.js
│── server.js
│── .env
│── package.json
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/school-management-api.git
cd school-management-api
```

---

### 2️⃣ Install Dependencies

```bash
npm install
```

---

### 3️⃣ Setup Environment Variables

Create a `.env` file in the root directory:

```env
DATABASE_URL=postgresql://schoodb_y8j9_user:m3QfMbofEu0diI8uq6BROGNnqSJYKx92@dpg-d7amrj450q8c73bt0sc0-a.oregon-postgres.render.com/schoodb_y8j9
```

---

### 5️⃣ Start the Server

```bash
npm run dev
```

Server will run on:

```
http://localhost:5000
```

---

## 📌 API Endpoints

---

### ➕ Add School

* **Endpoint:** `/addSchool`
* **Method:** `POST`

#### Request Body:

```json
{
  "name": "ABC School",
  "address": "Nagpur",
  "latitude": 21.1458,
  "longitude": 79.0882
}
```

#### Response:

```json
{
  "message": "School added successfully"
}
```

---

### 📍 List Schools (Sorted by Distance)

* **Endpoint:** `/listSchools`
* **Method:** `GET`

#### Query Params:

```
latitude=21.1458&longitude=79.0882
```

#### Example Request:

```
http://localhost:5000/listSchools?latitude=21.1458&longitude=79.0882
```

#### Response:

```json
[
  {
    "id": 1,
    "name": "ABC School",
    "address": "Nagpur",
    "latitude": 21.1458,
    "longitude": 79.0882,
    "distance": 0
  }
]
```

---

## 📐 Distance Calculation

The API uses the **Haversine Formula** to calculate the geographical distance between two coordinates:

* Ensures accurate distance measurement
* Results are sorted in ascending order (nearest first)

---

## ☁️ Deployment

Deployed using **Render with PostgreSQL database**.

---

## 👨‍💻 Author

Developed by **Dipanshu Zalke**

---
