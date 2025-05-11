# 💼 Loan Manager (Community)

This project is a full-stack **loan management system** designed to streamline loan application, verification, and approval processes. It supports **role-based login for Users, Verifiers, and Admins**, and dynamically updates financial statistics based on application status.

---

## 🚀 Live Demo

- **Frontend:** [https://your-frontend-link.vercel.app](https://loan-manager-credit-app.vercel.app)
- **Backend:** [https://your-backend-link.onrender.com](https://loan-manager-credit-app-backend.onrender.com)



---

## 🎯 Project Objective

The main goal of this project is to create a transparent and role-based workflow for managing loan applications. Users can apply for loans, verifiers check the applications, and admins make the final approval. Once approved:

✅ **Savings amount decreases**  
✅ **Loan disbursed amount increases**  
✅ **Borrower count increases**  
✅ **Dashboards reflect real-time updates**

---

## 🧑‍💼 User Roles

### 1. **User**
- Can sign up and log in
- Applies for a loan via the application form
- Views their submitted applications and their statuses

### 2. **Verifier**
- Logs in using credentials
- Views applications pending verification
- Approves or rejects and sends them to Admin

### 3. **Admin**
- Logs in using credentials
- Views applications verified by Verifier
- Approves or rejects final applications
- Upon approval, dashboard updates savings, disbursed loans, and borrower count

---

## 🔐 Demo Credentials

Use these to test login flows:

| Role     | Email                   | Password     |
|----------|-------------------------|--------------|
| User     | nagesh@gmail.com        | 123456       |
| Verifier | kishore@gmail.com       | 123456       |
| Admin    | mahesh@gmail.com        | 123456       |

| Role     | Email                   | Password     |
|----------|-------------------------|--------------|
| User     | pavan@gmail.com         | 123456       |
| Verifier | ram@gmail.com           | 123456       |
| Admin    | rahul@gmail.com         | 123456       |

---

## 🧰 Tech Stack

### 🔙 Backend
- Node.js with Express
- JavaScript
- MongoDB (via Mongoose)
- JWT Authentication

### 🌐 Frontend
- React.js with **Vite**
- Zustand (for global state management)
- Axios (API calls)
- React Router DOM

---

## 📈 Features

- 🔐 Secure authentication & role-based access
- 📄 Loan application form (user)
- 📋 Verifier dashboard with verification controls
- 🧾 Admin dashboard for final approval
- 📊 Dynamic dashboard stats: 
  - Total applications
  - Approved loans
  - Disbursed amount
  - Borrower count
  - Remaining savings
  - total users

---

[ User submits loan ]
⬇
[ Verifier reviews & verifies ]
⬇
[ Admin views verified loans ]
⬇
[ Admin approves ]
⬇
[ Dashboard stats update ✅ ]



