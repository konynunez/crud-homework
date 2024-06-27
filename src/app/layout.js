import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CRUD App",
  description: "Simple To Do App with CRUD",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-gray-900 text-white">
          <nav className="container mx-auto flex items-center justify-between py-4">
            <div className="flex items-center justify-center space-x-6">
              <Link href="/">
                <div className="text-3xl font-bold text-white cursor-pointer hover:text-gray-300">
                  Home
                </div>
              </Link>
              <Link href="/management">
                <div className="text-3xl text-white cursor-pointer hover:text-gray-300">
                  Management
                </div>
              </Link>
            </div>
          </nav>
        </header>
        {children}
        <footer className="text-center text-gray-600 mt-8">&copy; Panoaramix Design</footer>
      </body>
    </html>
  );
}
