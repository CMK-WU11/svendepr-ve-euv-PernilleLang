import "./globals.css";

export const metadata = {
  title: {
    default: "Landrup Dans",
    template: "%s | Landrup Dans"
  },
  description: "Landrup Dans",
}

export default function RootLayout({ children }) {
  return (
    <html lang="da">
      <body className={`antialiased`}>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
