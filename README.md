# 📘 Notes API

A simple RESTful API built using **Node.js, Express, and MongoDB** to manage notes with full CRUD functionality.

---

## 🚀 Features

- Create a single note
- Create multiple notes (bulk insert)
- Get all notes
- Get note by ID
- Update full note (PUT)
- Update partial fields (PATCH)
- Delete single note
- Delete multiple notes (bulk delete)

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB (Mongoose)

---

## 📂 API Endpoints

### 🔹 Create Note
`POST /api/notes`

### 🔹 Create Multiple Notes
`POST /api/notes/bulk`

### 🔹 Get All Notes
`GET /api/notes`

### 🔹 Get Note By ID
`GET /api/notes/:id`

### 🔹 Replace Note
`PUT /api/notes/:id`

### 🔹 Update Note
`PATCH /api/notes/:id`

### 🔹 Delete Note
`DELETE /api/notes/:id`

### 🔹 Delete Multiple Notes
`DELETE /api/notes/bulk`

---

## 📌 Note Structure

```json
{
  "title": "string",
  "content": "string",
  "category": "work | personal | study",
  "isPinned": true
}
