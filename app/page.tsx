const products = [
  {
    id: 1,
    name: "Fresh Apples",
    price: "$3.99",
    image: "🍎",
  },
  {
    id: 2,
    name: "Bananas",
    price: "$2.49",
    image: "🍌",
  },
  {
    id: 3,
    name: "Milk",
    price: "$1.99",
    image: "🥛",
  },
  {
    id: 4,
    name: "Bread",
    price: "$2.29",
    image: "🍞",
  },
  {
    id: 5,
    name: "Eggs",
    price: "$3.49",
    image: "🥚",
  },
  {
    id: 6,
    name: "Cheese",
    price: "$4.99",
    image: "🧀",
  },
];

export default function HomePage() {
  return (
    <>
      <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 16 }}>
        Products
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
          gap: 16,
        }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              background: "white",
              borderRadius: 16,
              padding: 16,
              boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              transition: "transform 0.15s ease, box-shadow 0.15s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow =
                "0 8px 20px rgba(0,0,0,0.08)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "none";
              e.currentTarget.style.boxShadow =
                "0 4px 12px rgba(0,0,0,0.06)";
            }}
          >
            <div style={{ fontSize: 48, textAlign: "center" }}>
              {product.image}
            </div>

            <div>
              <h3 style={{ margin: "12px 0 4px", fontSize: 16 }}>
                {product.name}
              </h3>
              <strong style={{ fontSize: 16 }}>{product.price}</strong>
            </div>

            <button
              style={{
                marginTop: 12,
                background: "#16a34a",
                color: "white",
                border: "none",
                borderRadius: 10,
                padding: "10px 0",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
