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
      <body style={{ margin: 0, fontFamily: "system-ui, sans-serif", background: "#f9fafb" }}>
        
        {/* HEADER */}
        <header style={{
          position: "sticky",
          top: 0,
          background: "white",
          borderBottom: "1px solid #e5e7eb",
          padding: "12px 16px",
          display: "flex",
          alignItems: "center",
          gap: "12px",
          zIndex: 50
        }}>
          <strong style={{ fontSize: 20 }}>🛒 Grocery</strong>

          <input
            placeholder="Search products..."
            style={{
              flex: 1,
              padding: "8px 12px",
              borderRadius: 8,
              border: "1px solid #d1d5db"
            }}
          />

          <button style={{
            background: "#16a34a",
            color: "white",
            border: "none",
            borderRadius: 8,
            padding: "8px 12px",
            fontWeight: 600
          }}>
            Cart (0)
          </button>
        </header>

        {/* CONTENT */}
        <main style={{ maxWidth: 1200, margin: "0 auto", padding: 16 }}>
          {children}
        </main>

      </body>
    </html>
  );
}
