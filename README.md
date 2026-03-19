# 🚀 Chinmay Test App (Simple Web Auth)

A lightweight, Dockerized web application with **Login & Registration functionality**, built using **Node.js, Express, MongoDB, and Bootstrap UI**.

🔗 **Repository:** https://github.com/bgcena/simple-webapp

---

## 🧱 Tech Stack

* ⚙️ **Backend:** Node.js (Express)
* 🗄️ **Database:** MongoDB (Mongoose)
* 🎨 **Frontend:** HTML + Bootstrap (CDN)
* 🐳 **Containerization:** Docker & Docker Compose

---

## ✨ Features

* 👤 User Registration
* 🔐 Secure Password Hashing (bcrypt)
* 🔑 Login Authentication
* 🧭 Responsive Navbar UI
* 📱 Mobile-friendly design
* 🐳 Fully Dockerized setup

---

## 📁 Project Structure

```
simple-webapp/
├── docker-compose.yml
├── Dockerfile
├── package.json
├── server.js
├── .env.example
├── public/
│   ├── index.html
│   ├── login.html
│   └── register.html
```

---

## ⚡ Quick Start

### 1️⃣ Clone the repo

```bash
git clone https://github.com/bgcena/simple-webapp.git
cd simple-webapp
```

---

### 2️⃣ Setup environment

```bash
cp .env.example .env
```

---

### 3️⃣ Run with Docker

```bash
docker compose up --build
```

---

## 🌐 Access the App

* App: http://localhost:3000
* MongoDB: localhost:27017

---

## 🧪 Use Cases

This project is ideal for:

* 🔧 Learning Docker + Node.js integration
* 🧪 Testing authentication flows
* 🛡️ Simulating login traffic (useful for WAF / Bot Manager testing)
* 🚀 Quick prototyping of web apps

---

## ⚠️ Disclaimer

This is a **demo / learning project** and not production-ready.

---

## 🔮 Future Improvements

* ✅ JWT-based authentication
* ✅ Session handling & logout
* ✅ Rate limiting (brute-force protection)
* ✅ User dashboard
* ✅ Logging & monitoring

---

## 👨‍💻 Author

**Chinmay Bhat**

---

## ⭐ Support

If you find this useful, consider giving it a ⭐ on GitHub!
