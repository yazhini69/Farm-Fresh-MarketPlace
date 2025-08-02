async function loadProducts() {
  const container = document.getElementById("productContainer");
  container.innerHTML = "Loading...";

  try {
    const res = await fetch("http://localhost:5000/api/products");
    const products = await res.json();

    container.innerHTML = "";

    if (!products.length) {
      container.textContent = "No products available.";
      return;
    }

    products.forEach(product => {
      const name = product.name || 'Unnamed Product';
      const price = product.price !== undefined ? product.price : 'N/A';
      const description = product.description || 'No description available';
      const imageUrl = product.imageUrl
        ? `http://localhost:5000${product.imageUrl}`
        : 'https://via.placeholder.com/200x150?text=No+Image';
      const productId = product.id;

      const card = document.createElement("div");
      card.className = "product-card";

      card.innerHTML = `
        <h2>${name}</h2>
        <img src="${imageUrl}" alt="Image of ${name}" />
        <p><strong>Price per Kg:</strong> ₹${price}</p>
        <p>${description}</p>
        <label for="qty-${productId}">Quantity:</label>
        <input type="number" id="qty-${productId}" min="1" value="1" style="width: 60px; margin-right: 8px;" />
        <button onclick="orderProduct(${productId})">🛒 Order Now</button>
      `;

      container.appendChild(card);
    });
  } catch (error) {
    container.textContent = "Failed to load products.";
    console.error("Error loading products:", error);
  }
}

async function orderProduct(productId) {
  const qtyInput = document.getElementById(`qty-${productId}`);
  const quantity = parseInt(qtyInput.value);

  if (!quantity || quantity < 1) {
    alert("Please enter a valid quantity.");
    return;
  }

  const customerName = prompt("Enter your name (optional):")?.trim();
  const customerPhone = prompt("Enter your phone number (optional):")?.trim();
  const address = prompt("Enter your delivery address:")?.trim();

  if (!address) {
    alert("Address is required.");
    return;
  }

  try {
    const response = await fetch("http://localhost:5000/api/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        productId,
        quantity,
        customerName,
        customerPhone,
        address  // ✅ include address here
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || "Failed to place order");
    }

    alert("✅ Order placed successfully!");
  } catch (error) {
    alert("❌ Order failed: " + error.message);
  }
}

// Run on load
window.addEventListener("DOMContentLoaded", loadProducts);
