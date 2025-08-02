const express = require("express");
const multer = require("multer");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors({
  origin: "http://127.0.0.1:5500",
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type"],
}));
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// File paths
const PRODUCTS_FILE = path.join(__dirname, "products.json");
const ORDERS_FILE = path.join(__dirname, "orders.json");

// Helpers
function readJSON(file) {
  if (!fs.existsSync(file)) return [];
  try {
    return JSON.parse(fs.readFileSync(file, "utf8") || "[]");
  } catch {
    return [];
  }
}
function writeJSON(file, data) {
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
}

// Multer setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dir = path.join(__dirname, "uploads");
    if (!fs.existsSync(dir)) fs.mkdirSync(dir);
    cb(null, dir);
  },
  filename: (req, file, cb) => {
    const safe = file.originalname.replace(/[^a-zA-Z0-9.\-_]/g, "_");
    cb(null, `${Date.now()}-${safe}`);
  }
});
const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    cb(null, file.mimetype.startsWith("image/"));
  }
});

// Routes

// ✅ Add Product (if you're using file uploads)
app.post("/api/products", upload.single("image"), (req, res) => {
  const { name, price, description } = req.body;
  const products = readJSON(PRODUCTS_FILE);

  const newProduct = {
    id: Date.now(),
    name,
    price: Number(price),
    description,
    imageUrl: req.file ? `/uploads/${req.file.filename}` : null,
  };

  products.push(newProduct);
  writeJSON(PRODUCTS_FILE, products);
  res.status(201).json(newProduct);
});

// ✅ Get all products
app.get("/api/products", (req, res) => {
  res.json(readJSON(PRODUCTS_FILE));
});

// ✅ Place order
app.post("/api/orders", (req, res) => {
  const { productId, quantity, customerName, customerPhone, address } = req.body;

  if (!productId || !quantity || !address) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const products = readJSON(PRODUCTS_FILE);
  if (!products.find(p => p.id === Number(productId))) {
    return res.status(404).json({ error: "Product not found" });
  }

  const newOrder = {
    id: Date.now(),
    productId: Number(productId),
    quantity: Number(quantity),
    customerName: customerName?.trim() || "",
    customerPhone: customerPhone?.trim() || "",
    address: address.trim(),
    createdAt: new Date().toISOString(),
  };

  const orders = readJSON(ORDERS_FILE);
  orders.push(newOrder);
  writeJSON(ORDERS_FILE, orders);

  res.status(201).json(newOrder);
});

// ✅ Get all orders
app.get("/api/orders", (req, res) => {
  res.json(readJSON(ORDERS_FILE));
});

// Multer error handler
app.use((err, req, res, next) => {
  if (err) return res.status(400).json({ error: err.message });
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
