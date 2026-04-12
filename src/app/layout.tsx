import "./globals.css";
import Navbar from "@/app/components/Navbar";
import { sedgwickAve } from "./fonts";
import SplineBg from "@/app/components/SplineBg";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body className="relative text-white">
        <SplineBg />
        <div
          aria-hidden
          className="fixed bottom-0 right-0 w-[420px] h-[220px] bg-[radial-gradient(ellipse_at_bottom_right,_#0a0a0a_0%,_#0a0a0a_25%,_rgba(10,10,10,0.7)_55%,_transparent_85%)] z-10 pointer-events-none"
        />
        <header className="fixed top-16 left-16 z-20">
          <h1 className="text-gray-400 text-4xl">Marcel Woźniak</h1>
          <div className="relative inline-block">
            <h2
              className={`${sedgwickAve.className} text-zinc-300 text-lg py-2`}
            >
              Web Developer
            </h2>
          </div>

          <Navbar />
        </header>
        <main className="relative z-20">{children}</main>
      </body>
    </html>
  );
}
