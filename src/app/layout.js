// layout.js
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import { sedgwickAve } from "./fonts";
import SplineBg from "@/app/components/SplineBg";

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body className="relative text-white">
        <SplineBg />
        <header className="fixed top-16 left-16 z-20">
          <h1 className="text-gray-400 text-4xl">Marcel Woźniak</h1>
          <div className="relative inline-block">
            <h2
              className={`${sedgwickAve.className} text-zinc-300 text-lg py-2`}
            >
              Frontend Developer
            </h2>
          </div>

          <Navbar />
        </header>
        <main className="fixed bottom-16 right-16 z-20 max-w-md text-right">
          {children}
        </main>
      </body>
    </html>
  );
}
