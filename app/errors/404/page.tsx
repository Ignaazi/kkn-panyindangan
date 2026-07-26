"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function NotFound() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  // Fungsi untuk pencarian (Mencari berdasarkan rute menu navbar)
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    const query = searchQuery.toLowerCase().trim();
    if (!query) return;

    // Daftar patokan menu Navbar (Tambahkan/sesuaikan kalau ada menu lain)
    const menuRoutes: Record<string, string> = {
      "beranda": "/",
      "home": "/",
      "kategori": "/kategori",
      "privasi": "/kebijakan/privasi",
      "kebijakan privasi": "/kebijakan/privasi",
      "layanan": "/kebijakan/layanan",
      "kebijakan layanan": "/kebijakan/layanan",
      "kontak": "/kontak",
      "hubungi": "/kontak",
      "bantuan": "/kontak"
    };

    // Logika pencocokan kata (kalau kata yang diketik ada di daftar menu)
    let foundRoute = "";
    for (const [key, route] of Object.entries(menuRoutes)) {
      if (key.includes(query) || query.includes(key)) {
        foundRoute = route;
        break;
      }
    }

    // Eksekusi perpindahan halaman
    if (foundRoute) {
      router.push(foundRoute);
    } else {
      alert(`Maaf, halaman untuk "${searchQuery}" tidak ditemukan di menu. Coba kata kunci seperti: "beranda", "privasi", atau "kontak".`);
    }
  };

  return (
    <main 
      className="min-vh-100 d-flex flex-column align-items-center justify-content-center custom-bg py-5"
      style={{ fontFamily: "'Nunito', sans-serif" }}
    >
      <section id="error-404" className="error-404 section w-100">
        <div className="container text-center animate-fade-in-up">
          
          {/* ================= BREADCRUMB (TENGAH ATAS) ================= */}
          <div className="d-flex flex-wrap justify-content-center align-items-center gap-2 mb-5" style={{ fontSize: "15px", fontWeight: "500" }}>
            <Link href="/" className="text-decoration-none text-muted nav-link-hover">
              <i className="bi bi-house-door me-1"></i> Beranda
            </Link>
            <span className="text-muted">/</span>
            <span className="text-muted">Kategori</span>
            <span className="text-muted">/</span>
            <span className="text-green fw-bold">404</span>
          </div>

          {/* ================= 404 CODE ================= */}
          <h1 
            className="error-code mb-4 fw-bold" 
            style={{ 
              fontSize: "clamp(4rem, 8vw, 6rem)", 
              lineHeight: 1, 
              color: "var(--bs-heading-color)",
              letterSpacing: "-2px" 
            }}
          >
            404
          </h1>

          {/* ================= TEXT / PARAGRAF ================= */}
          <p className="error-text mb-5 text-muted mx-auto" style={{ maxWidth: "700px", fontSize: "1.15rem", lineHeight: "1.8" }}>
            Halaman yang Anda cari mungkin telah dihapus, diubah namanya, atau tidak tersedia untuk sementara waktu. Silakan periksa kembali URL Anda atau cari menu yang ada.
          </p>

          {/* ================= ICON EXCLAMATION ================= */}
          <div className="error-icon mb-5 text-green">
            <i className="bi bi-exclamation-circle" style={{ fontSize: "5rem", lineHeight: 1 }}></i>
          </div>

          {/* ================= SEARCH BOX (AKTIF) ================= */}
          <div className="search-box mb-4 mx-auto" style={{ maxWidth: "450px" }}>
            <form onSubmit={handleSearch} className="search-form">
              <div className="input-group shadow-sm overflow-hidden custom-search-group rounded">
                <input 
                  type="text" 
                  className="form-control border-0 px-4 py-3 bg-transparent" 
                  placeholder="Cari (ex: kontak, privasi, layanan)..." 
                  aria-label="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{ outline: "none", boxShadow: "none" }}
                />
                <button 
                  className="btn search-btn px-4 text-white" 
                  type="submit"
                  style={{ backgroundColor: "var(--theme-green)", border: "none" }}
                >
                  <i className="bi bi-search"></i>
                </button>
              </div>
            </form>
          </div>

          {/* ================= ACTION BUTTON (PERSEGI PANJANG) ================= */}
          <div className="error-action mt-4">
            <Link 
              href="/" 
              className="btn d-inline-flex align-items-center gap-2 rounded custom-btn-solid px-4 py-3"
            >
              <i className="bi bi-box-arrow-in-left"></i> Kembali ke Beranda
            </Link>
          </div>

        </div>
      </section>

      {/* ================= INJEKSI CSS ================= */}
      <style jsx global>{`
        /* Tema Warna: Hijau Biasa/Standar (Bukan Stabilo) */
        :root {
          --theme-green: #198754; /* Warna hijau standar (Bootstrap Success) */
          --theme-green-hover: #157347; /* Hijau lebih gelap saat di-hover */
        }

        /* Teks Hijau */
        .text-green {
          color: var(--theme-green) !important;
        }

        /* Hover efek untuk breadcrumb */
        .nav-link-hover {
          transition: color 0.2s ease-in-out;
        }
        .nav-link-hover:hover {
          color: var(--theme-green) !important;
        }

        /* Background & Mode */
        .custom-bg {
          background-color: var(--bs-body-bg);
          color: var(--bs-body-color);
        }

        /* Search Box Form */
        [data-bs-theme="light"] .custom-search-group {
          background-color: #ffffff;
          border: 1px solid #e5e7eb;
        }
        [data-bs-theme="dark"] .custom-search-group {
          background-color: #1f2937;
          border: 1px solid #374151;
        }
        .search-btn:hover {
          background-color: var(--theme-green-hover) !important;
        }

        /* Tombol Persegi Panjang */
        .custom-btn-solid {
          background-color: var(--theme-green);
          color: #ffffff;
          border: 1px solid var(--theme-green);
          font-size: 16px;
          font-weight: 600;
          transition: all 0.3s ease;
        }
        .custom-btn-solid:hover {
          background-color: var(--theme-green-hover);
          border-color: var(--theme-green-hover);
          color: #ffffff;
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(25, 135, 84, 0.2);
        }

        /* Override Tombol untuk Dark Mode */
        [data-bs-theme="dark"] .custom-btn-solid {
          background-color: #198754;
          border-color: #198754;
          color: #ffffff;
        }
        [data-bs-theme="dark"] .custom-btn-solid:hover {
          background-color: #157347;
          border-color: #157347;
          box-shadow: 0 5px 15px rgba(25, 135, 84, 0.3);
        }

        /* Animasi Muncul Halus */
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
          transform: translateY(20px);
        }

        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </main>
  );
}