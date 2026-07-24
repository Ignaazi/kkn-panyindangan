// app/layout.tsx
import BootstrapJS from "@/components/BootstrapJS";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import type { Metadata } from "next";
import { Nunito } from "next/font/google"; // <-- 1. Import font resmi Next.js
import "./main.css";

// 2. Konfigurasi Font Nunito secara global
const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title: "KKN Desa Panyindangan",
  description: "Website Resmi KKN Desa Panyindangan - Universitas Buana Perjuangan Karawang",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={nunito.variable}>
      <head>
        {/* Vendor Stylesheets */}
        <link rel="stylesheet" href="/assets/vendor/bootstrap-icons/bootstrap-icons.css" />
        <link rel="stylesheet" href="/assets/vendor/aos/aos.css" />
        
        {/* 3. Library Animasi untuk efek transparan & Dropdown Smooth */}
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" 
        />
      </head>
      
      {/* 4. Menggunakan Flexbox Bootstrap agar posisi footer selalu terkunci di bawah */}
      <body 
        className="index-page d-flex flex-column min-vh-100" 
        style={{ fontFamily: "var(--font-nunito), sans-serif" }}
      > 
        {/* Navbar akan selalu ada di paling atas setiap halaman */}
        <Navbar />
        
        {/* 5. Tag pembungkus konten utama (Bagus untuk SEO & Struktur Web) */}
        <main className="flex-grow-1">
          {children}
        </main>
        
        {/* Footer akan selalu ada di paling bawah setiap halaman */}
        <Footer />
        
        {/* Script Bootstrap JS */}
        <BootstrapJS />
      </body>
    </html>
  );
}