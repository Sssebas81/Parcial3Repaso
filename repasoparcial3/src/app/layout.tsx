import './globals.css';
import Footer from '@/common/components/Footer';
// app/layout.js
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">

        {/* TODO tu contenido */}
        <main className="flex-1">
          {children}
        </main>

        {/* 👇 Footer global */}
        <Footer />

      </body>
    </html>
  );
}