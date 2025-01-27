import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation";

export const metadata = {
  title: "Landrup Dans",
  description: "Landrup Dans",
};

export default function RootLayout({ children }) {
  return (
    <html lang="da">
      <body className={`antialiased`}>
        <main>
          {children}
        </main>
        <Navigation />
      </body>
    </html>
  );
}
