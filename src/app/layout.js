import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "List Management App",
  description:
    "Our wonderful list management system that manages our Shows.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="w-100 bg-indigo-800">
          <nav className="flex justify-center w-100 ">
            <Link
              className="m-1 text-indigo-200 hover:text-indigo-400"
              href="/"
            >
              Home
            </Link>
            <Link
              className="m-1 text-indigo-200 hover:text-indigo-400"
              href="/management"
            >
              Manage Library
            </Link>
            <Link
              className="m-1 text-indigo-200 hover:text-indigo-400"
              href="/about"
            >
              About
            </Link>
          </nav>
        </header>
        {children}
        <footer className="text-center">&copy; Panoramix</footer>
      </body>
    </html>
  );
}