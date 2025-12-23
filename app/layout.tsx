import "./globals.css";

export const metadata = {
  title: "Grocery Shop",
  description: "Online grocery store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        {/* HEADER */}
        <header className="sticky top-0 z-50 bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-4">
            
            {/* LOGO */}
            <div className="flex items-center gap-2 text-xl font-bold">
              🛒 <span>Grocery</span>
            </div>

            {/* SEARCH */}
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full rounded-lg border px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* CART */}
            <button className="relative bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition">
              Cart
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2">
                0
              </span>
            </button>
          </div>
        </header>

        {/* MAIN CONTENT */}
        <main className="max-w-7xl mx-auto px-4 py-6">
          {children}
        </main>

        {/* FOOTER */}
        <footer className="mt-10 border-t bg-white">
          <div className="max-w-7xl mx-auto px-4 py-6 text-sm text-gray-500">
            © {new Date().getFullYear()} Grocery Shop — Fast delivery, fresh products
          </div>
        </footer>
      </body>
    </html>
  );
}
