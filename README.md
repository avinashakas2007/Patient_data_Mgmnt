🎉 **Patient Medical Record System** 🏥

---

## 📌 **Project Overview**
The **Patient Medical Record System** is a web-based application that allows users to securely store and retrieve medical records. It features user authentication, patient data management, and a clean dashboard interface.

---

## 🚀 **Features**
✅ Secure **User Authentication** (Login & Registration) 🔑  
✅ **Store & Retrieve** Patient Data 📂  
✅ **Unique ID-Based Search** for Medical Records 🔍  
✅ **Responsive UI** for seamless experience 📱  
✅ **Encryption** for storing passwords 🛡️  

---

## 🛠️ **Tech Stack**
🔹 **Backend:** Node.js, Express.js  
🔹 **Database:** MongoDB (Mongoose ORM)  
🔹 **Frontend:** HTML, CSS, EJS  
🔹 **Security:** bcrypt for password hashing  
🔹 **Environment Variables:** dotenv  

---

## 📂 **Project Structure**
```
📁 Patient-Medical-Record-System
│-- 📁 views
│   ├── list.ejs          # Displays patient details
│   ├── Dashboard.html    # User dashboard
│   ├── login.html        # Login page
│-- 📁 public
│   ├── styles.css        # Styling files
│-- 📁 models
│   ├── User.js           # User schema
│   ├── Data.js           # Patient data schema
│-- 📁 routes
│   ├── authRoutes.js     # Authentication routes
│-- 📁 controllers
│   ├── authController.js # Handles login & register
│-- server.js             # Main server file
│-- .env                  # Environment variables
│-- package.json          # Dependencies & scripts
```

---

## 🔧 **Installation & Setup**
### 1️⃣ Clone the Repository
```bash
 git clone https://github.com/avinashakas2007/Patient_data_Mgmnt.git
```
### 2️⃣ Navigate to the Directory
```bash
 cd Patient-Medical-Record-System
```
### 3️⃣ Install Dependencies
```bash
 npm install
```
### 4️⃣ Configure Environment Variables
Create a `.env` file and add:
```
url=mongodb+srv://yourUsername:yourPassword@cluster.mongodb.net/yourDatabase
```
### 5️⃣ Run the Server
```bash
 node app.js
```
**🚀 The system is now running on `http://localhost:3000/`** 🎯

---

## 🛡️ **Security Enhancements**
🔐 **Uses bcrypt** for password hashing (instead of MD5).  
🔐 **Validations** for input fields to prevent errors.  
🔐 **Try-Catch Handling** to avoid crashes.  

---

## 🎯 **Future Enhancements**
🚀 Add **JWT Authentication** for better security.  
🚀 Implement **Role-Based Access Control (RBAC)**.  
🚀 Improve **UI with Bootstrap or TailwindCSS**.  

---

## 💡 **Contributing**
Contributions are always welcome! Feel free to **fork, clone, and submit a pull request**. 🚀  

---



💻 Made with ❤️ by **Avinash**

