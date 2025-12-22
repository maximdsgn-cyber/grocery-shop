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
      <body className="bg-gray-100 text-gray-900">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
            <h1 className="text-xl font-bold">🛒 Grocery Shop</h1>
            <nav className="flex gap-6 text-sm font-medium">
              <a href="#" className="hover:text-green-600">Home</a>
              <a href="#" className="hover:text-green-600">Products</a>
              <a href="#" className="hover:text-green-600">Cart</a>
            </nav>
          </div>
        </header>

        {/* Page content */}
        <main className="max-w-7xl mx-auto px-4 py-8">
          {children}
        </main>
      </body>
    </html>
  );
}
