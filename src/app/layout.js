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
        <header className="w-100">
          <nav className="flex justify-center w-100 ">
            <Link
              className="m-1 text-pink-700 hover:text-pink-900"
              href="/"
            >
              Home
            </Link>
            <Link
              className="m-1 text-pink-700 hover:text-pink-900"
              href="/management"
            >
              Management
            </Link>
          </nav>
        </header>
        {children}
        <footer className="text-center text-pink-700">&copy;Panoaramix Design</footer>
      </body>
    </html>
  );
}
