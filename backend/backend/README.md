
# 🛒Farmer-to-Consumer Marketplace – Bridging the Agricultural Gap 🌾

> "Empowering farmers, connecting communities."

🎯 **Domain:** AgriTech | E-Commerce  
🏆 **Hackathon Project – 2025**  
👨‍👩‍👧‍👦 **Team Name:** Strawhats
📍 **Institution:** KPR Institute of Engineering and Technology  

## 🔍 Problem Statement

In most areas, **farmers are unable to obtain fair prices** for their crops because of middlemen and no direct selling to consumers. This results in:
- Less income for farmers
- Food loss in supply chains
- Increased consumer prices

## 💡 Our Solution: Direct Farmer Marketplace

We created a **lightweight web-based marketplace** where:
- 🧑‍🌾**Farmers** can list fresh fruits and vegetables with images, price, and quantity
- 🛍️ **Buyers** can see, browse, and order directly

The system should be:
- Mobile-friendly
- JSON/Firebase-based (no heavyweight backend required)
- Simple for farmers and buyers to use


## 🔑 Key Features

| Feature                    | Description |
|---------------------------|-------------|
| 📝 **Farmer Product Form** | Post crops, vegetables, price, quantity, and add an image
|| 🧺 Consumer View Panel | View available products with images and details ||
|| 🛒  Order Now Button    | Consumers can instantly place an order (basic version) ||
|| 💾 Local JSON Storage  | Lightweight and fast, no external DB setup necessary ||
||🔌 Firebase-Ready      | Easy migration to live cloud database for scaling ||

 
## 🧠 Tech Stack

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js / Express (Optional)
- **Storage**: Local JSON file (can upgrade to Firebase)
- **Image Upload**: Multer (for local backend handling)
- **Hosting Options**: GitHub Pages / Render / Replit


## 📷 UI Screenshots

### 👨‍🌾 Farmer Product Entry
<img width="1920" height="1128" alt="Screenshot 2025-07-25 193603" src="https://github.com/user-attachments/assets/78b58fc3-5e9c-45fa-bc49-23a535ef1c56" />


### 🛍️ Consumer Marketplace View
<img width="1920" height="1128" alt="Screenshot 2025-07-25 193627" src="https://github.com/user-attachments/assets/30589723-813a-402f-aa1e-ca317a74d989" />

### 🛍️ Orders View
<img width="1920" height="1128" alt="Screenshot 2025-07-25 193636" src="https://github.com/user-attachments/assets/cc54d576-13b0-4292-ab07-67d4e82e4956" />


## 🛠️ Setup Instructions

### 1️⃣ Clone the Repository

git clone https://github.com/your-username/farmer-marketplace.git
cd farmer-marketplace

### 2️⃣ Install Dependencies (Backend)

cd backend
npm install

### 3️⃣ Run Backend Server (for file uploads & JSON DB)

node server.js

### 4️⃣ Open Frontend

now go to `frontend/index.html` in your browser.
You will find the product upload form and consumer view.


## 🗂️ Folder Structure

```
farmer-marketplace/
├── backend/
│   ├── server.js
│   ├── uploads/             # Product images
│   └── products.json        # Local JSON database
├── frontend/
│   ├── index.html
│   ├── view.html
│   └── script.js
├── images/                  # Screenshots for README
└── README.md


## 🧪 Sample Use Case

1. Farmer inputs:

   * Crop: Tomatoes
   * Price: ₹20/kg
   * Quantity: 10kg
   * Uploads an image

2. Consumer comes to the view page and views the tomato listing

3. They click **"Order Now"** → (Basic order message or form is created)


## 🔭 Future Scope

* 🔒 User authentication (Login for farmers/consumers)
* 📦 Order tracking and SMS reminders
* 📍Geo-location filtering (display nearest farmers)
* 📊 Admin dashboard for stock monitoring
* 🧾 Payment gateway (UPI, credit card)


## 📄  License

This project is open-source under the **MIT License**.

## 🌟 Acknowledgements

* Developed for **Hackathon 2025**
* Supported by mentors at KPRIET
* Inspired by real agricultural challenges in rural India


## 📬 Contact

📧 23ee069@kpriet.ac.in | 📍 Tamil Nadu, India

