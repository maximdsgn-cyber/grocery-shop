"use client";

import { useState } from "react";

const products = [
  { id: 1, name: "Fresh Apples", price: 3.99, image: "🍎" },
  { id: 2, name: "Bananas", price: 2.49, image: "🍌" },
  { id: 3, name: "Milk", price: 1.99, image: "🥛" },
  { id: 4, name: "Bread", price: 2.29, image: "🍞" },
];

export default function HomePage() {
  const [cart, setCart] = useState<typeof products>([]);

  function addToCart(product: (typeof products)[0]) {
    setCart((prev) => [...prev, product]);
  }

  return (
    <div style={{ padding: 20 }}>
      <header style={{ display: "flex", justifyContent: "space-between" }}>
        <h1>🛒 Grocery</h1>
        <button>Cart ({cart.length})</button>
      </header>

      <h2>Products</h2>

      {products.map((product) => (
        <div
          key={product.id}
          style={{
            border: "1px solid #ddd",
            padding: 12,
            marginBottom: 10,
            borderRadius: 8,
          }}
        >
          <div style={{ fontSize: 24 }}>{product.image}</div>
          <strong>{product.name}</strong>
          <div>${product.price}</div>
          <button onClick={() => addToCart(product)}>
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
}
