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
];

export default function HomePage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl border shadow-sm hover:shadow-md transition p-4 flex flex-col"
          >
            {/* IMAGE */}
            <div className="text-5xl mb-4 text-center">
              {product.image}
            </div>

            {/* NAME */}
            <h2 className="font-semibold text-lg mb-1">
              {product.name}
            </h2>

            {/* PRICE */}
            <p className="text-green-600 font-bold mb-4">
              {product.price}
            </p>

            {/* BUTTON */}
            <button className="mt-auto bg-green-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition">
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
