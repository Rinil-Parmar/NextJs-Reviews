// import { Inter } from "next/font/google";
import Navbar from "../../components/Navbar";
import { exo2, orbitron } from "./font";
import "./globals.css";

export const metadata = {
  title: {
    default: "Indie Gamer",
    template: "%s | Indie Gamer",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${exo2.variable} ${orbitron.variable}`}>
      {/* <body className={inter.className}>{children}</body> */}
      <body
        suppressHydrationWarning={true}
        className="bg-orange-50 flex flex-col px-4 py-2 min-h-screen"
      >
        <header>
          <Navbar />
        </header>

        <main className="grow py-3">{children}</main>

        <footer className="border-t py-3 text-center text-xs">
          Game data and images rights of{" "}
          <a
            href="https://rawg.io/"
            target="_blank"
            className="text-orange-800 hover:underline"
          >
            RAWG
          </a>
        </footer>
      </body>
    </html>
  );
}
