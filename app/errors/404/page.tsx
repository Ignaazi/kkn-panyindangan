"use client";

import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Custom404() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Mencegah hydration error
  if (!mounted) return null;

  return (
    <>
      <Head>
        <title>Halaman Tidak Ditemukan | KKN Desa Panyindangan</title>
      </Head>

      <div 
        className="min-vh-100 d-flex align-items-center justify-content-center pt-5"
        style={{ 
          backgroundColor: "var(--bs-body-bg)", 
          color: "var(--bs-body-color)", 
          fontFamily: "'Nunito', sans-serif" 
        }}
      >
        <div className="container text-center px-4">
          
          {/* Ikon 404 dengan Animasi Mengambang */}
          <div className="mb-4 position-relative mx-auto" style={{ width: "200px", height: "200px" }}>
             <div 
                className="d-flex align-items-center justify-content-center h-100 w-100 rounded-circle" 
                style={{ backgroundColor: "rgba(25, 135, 84, 0.1)" }}
             >
                <i className="bi bi-exclamation-triangle-fill floating-icon" style={{ fontSize: "100px", color: "#198754" }}></i>
             </div>
          </div>

          {/* Pesan Error */}
          <h1 className="display-1 fw-bold mb-3" style={{ color: "#198754", letterSpacing: "-2px" }}>
            404
          </h1>
          <h3 className="fw-bold mb-3 text-dark">Waduh, Halaman Tidak Ditemukan!</h3>
          <p className="text-muted mb-5 mx-auto" style={{ maxWidth: "500px", lineHeight: "1.6", fontSize: "16px" }}>
            Maaf ya, halaman yang kamu cari sepertinya sudah dipindahkan, dihapus, atau mungkin URL-nya salah ketik. Yuk kembali ke jalan yang benar!
          </p>

          {/* Tombol Aksi */}
          <div className="d-flex gap-3 justify-content-center flex-wrap">
            <Link 
              href="/" 
              className="btn btn-success fw-bold px-4 py-3 rounded-pill shadow-sm d-flex align-items-center gap-2 btn-hover-lift"
            >
              <i className="bi bi-house-door-fill"></i> Kembali ke Beranda
            </Link>
            <button 
              onClick={() => window.history.back()}
              className="btn btn-outline-secondary fw-bold px-4 py-3 rounded-pill d-flex align-items-center gap-2 btn-hover-lift"
            >
              <i className="bi bi-arrow-left"></i> Halaman Sebelumnya
            </button>
          </div>
          
        </div>
      </div>

      {/* Injeksi CSS untuk Animasi */}
      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
          100% { transform: translateY(0px); }
        }
        .floating-icon {
          animation: float 4s ease-in-out infinite;
        }
        .btn-hover-lift {
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .btn-hover-lift:hover {
          transform: translateY(-3px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.15) !important;
        }
      `}</style>
    </>
  );
}