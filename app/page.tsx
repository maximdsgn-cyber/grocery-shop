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

export default function Home() {
  return (
    <>
      <h2 className="text-2xl font-bold mb-6">Products</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col items-center text-center"
          >
            <div className="text-5xl mb-3">{product.image}</div>
            <h3 className="font-semibold">{product.name}</h3>
            <p className="text-green-600 font-bold mt-1">
              {product.price}
            </p>
            <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
