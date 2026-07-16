import type { ReactNode } from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen min-w-[1280px] flex-col bg-white">
      <Header />
      <Navbar />
      <main className="mx-auto w-full max-w-[1280px] flex-1 px-4 py-6">
        {children}
      </main>
      <Footer />
    </div>
  );
}
