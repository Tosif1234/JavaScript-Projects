# 📊 ResultBoard – API CRUD Project  

A modern **CRUD-based web app** built using **HTML, CSS, JavaScript, and Bootstrap**, integrated with a **MockAPI backend**.  
This app lets users **sign up, log in, and manage student results** — including **add, edit, delete, sort, search, and filter** results in real time.

---

## 🚀 Features  

✅ **User Authentication** – Secure Signup & Login using MockAPI  
✅ **CRUD Operations** – Add, Edit, Delete student results dynamically  
✅ **Real-time Data Handling** – Fully synced with MockAPI backend  
✅ **Search & Filter** – Instantly search by name/subject or filter by subject  
✅ **Sorting System** – Sort results by score (ascending/descending)  
✅ **Responsive Design** – Works seamlessly on all devices  
✅ **Persistent Login** – Saves session using `localStorage`  

---

## 🧠 Tech Stack  

| Layer | Technology Used |
|:------|:----------------|
| 🌐 Frontend | HTML5, CSS3, Bootstrap 5 |
| 🧩 Logic | JavaScript (Vanilla JS) |
| ☁️ API / Backend | [MockAPI.io](https://mockapi.io/) |
| 💾 Storage | LocalStorage (for user session) |

---

## 🏗️ Project Structure  

```

ResultBoard/
│
├── index.html # Main HTML file
│
├── assets/
│ ├── css/
│ │ └── style.css # Custom styling
│ │
│ └── js/
│ └── script.js # Main logic & API CRUD operations
│
└── README.md # Project documentation
```

---

## ⚙️ Setup Instructions  

### 1️⃣ Clone the Repository  
```bash
git clone https://github.com/your-username/ResultBoard.git
cd ResultBoard

```
## 📁 API Schema
## 👤 Users Endpoint (/users)

| Field    | Type   | Description       |
| -------- | ------ | ----------------- |
| id       | string | Auto-generated ID |
| uName    | string | Username          |
| email    | string | User email        |
| password | string | User password     |

## 🧾 Results Endpoint (/results)

| Field   | Type   | Description             |
| ------- | ------ | ----------------------- |
| id      | string | Auto-generated ID       |
| user    | string | Email of logged-in user |
| name    | string | Student’s name          |
| subject | string | Subject name            |
| score   | number | Score/marks             |
| date    | string | ISO timestamp           |

## 💡 Key Functionalities

- Signup/Login System – Users can register and securely log in.

- Dashboard Access – Personalized dashboard per logged-in user.

- CRUD System – Add, edit, delete results linked to their account.

- Smart Filters – Search results, filter by subject, and sort by score.

- Persistent Data – All data synced with MockAPI in real-time.

## 👨‍💻 Author

- Tosif Kureshi
- Built with ❤️ using HTML, CSS, JS, and Bootstrap.
- 📍 India

## 📸 Sample Output Screenshot

Below is an actual run of the program in the terminal:

## Dashboard

![Program Output](/Reasult-Board-API/assets/images/1.png)

## All Countries

![Program Output](/Reasult-Board-API/assets/images/2.png)

## Error Hanndling...

![Program Output](/Reasult-Board-API/assets/images/3.png)

![Program Output](/Reasult-Board-API/assets/images/4.png)

![Program Output](/Reasult-Board-API/assets/images/5.png)

![Program Output](/Reasult-Board-API/assets/images/6.png)

![Program Output](/Reasult-Board-API/assets/images/7.png)

![Program Output](/Reasult-Board-API/assets/images/8.png)
# 📸 Screenshots


