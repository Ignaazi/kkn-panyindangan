"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

// =========================================================================
// 1. IMPORT KOMPONEN TENTANG YANG BARU LU BUAT DI FOLDER COMPONENTS
// =========================================================================
import TentangSection from "@/components/tentangSection";

export default function BerandaPage() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      const theme = document.documentElement.getAttribute("data-bs-theme");
      setIsDark(theme === "dark");
    };

    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-bs-theme"] });
    return () => observer.disconnect();
  }, []);

  return (
    <main 
      className="position-relative w-100 min-vh-100"
      style={{
        fontFamily: "'Nunito', sans-serif",
        backgroundColor: isDark ? "#080d09" : "#fdfcf9",
        transition: "background-color 0.4s ease"
      }}
    >
      {/* ================= HERO SECTION DENGAN FULL BACKGROUND JELAS ================= */}
      <div 
        className="position-relative d-flex align-items-center justify-content-center text-center overflow-hidden"
        style={{
          // Menggunakan foto lokal kamu dari folder public/assets/img/bgBernada.png
          backgroundImage: "url('/assets/img/bgBeranda.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "85vh",
          paddingTop: "140px",
          paddingBottom: "140px"
        }}
      >
        {/* LIGHT/SUBTLE OVERLAY (Dibuat tipis agar foto murni tetap dominan & jelas) */}
        <div 
          className="position-absolute top-0 start-0 w-100 h-100" 
          style={{
            background: isDark 
              ? "linear-gradient(180deg, rgba(8,13,9,0.45) 0%, rgba(8,13,9,0.65) 100%)" 
              : "linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.45) 100%)",
            zIndex: 1
          }}
        />

        {/* HERO CONTENT */}
        <div className="container position-relative text-white" style={{ zIndex: 2 }}>
          <div className="row justify-content-center">
            <div className="col-lg-9 col-xl-8">
              
              {/* MAIN TITLE (Ditambahkan text-shadow tipis agar kontras di background terang) */}
              <h1 
                className="display-4 fw-black mb-3 tracking-tight text-white animate__animated animate__fadeIn"
                style={{ 
                  lineHeight: "1.2", 
                  letterSpacing: "-1px",
                  textShadow: "0 2px 10px rgba(0,0,0,0.3)"
                }}
              >
                Shaping Futures, <br />
                <span style={{ color: "#FFA500", textShadow: "0 2px 10px rgba(0,0,0,0.4)" }}>Empowering Desa Panyindangan</span>
              </h1>

              {/* SUBTITLE */}
              <p 
                className="lead mx-auto mb-4 opacity-95 animate__animated animate__fadeIn animate__delay-1s"
                style={{ 
                  maxWidth: "650px", 
                  fontSize: "16px", 
                  fontWeight: 500, 
                  color: "#ffffff",
                  textShadow: "0 1px 6px rgba(0,0,0,0.4)" 
                }}
              >
                Dedikasi nyata mahasiswa Universitas Buana Perjuangan Karawang melalui inovasi program kerja terstruktur demi kemandirian dan kemajuan desa.
              </p>

              {/* BUTTON CTA GANDA */}
              <div className="d-flex flex-wrap align-items-center justify-content-center gap-3 mb-4 animate__animated animate__fadeIn animate__delay-1s">
                <Link 
                  href="/proker" 
                  className="btn fw-bold px-4.5 py-2.5 rounded-pill shadow campus-btn-solid text-white"
                  style={{ backgroundColor: "#d97706", border: "none", fontSize: "14px", letterSpacing: "0.5px" }}
                >
                  APPLY NOW
                </Link>
                <Link 
                  href="https://youtube.com" 
                  target="_blank"
                  className="btn fw-bold px-4.5 py-2.5 rounded-pill border-2 text-white campus-btn-outline"
                  style={{ borderColor: "#ffffff", fontSize: "14px", letterSpacing: "0.5px", backdropFilter: "blur(2px)" }}
                >
                  VILLAGE TOUR
                </Link>
              </div>

              {/* BANNER ANNOUNCEMENT KECIL */}
              <div className="d-inline-flex align-items-center justify-content-center animate__animated animate__fadeIn animate__delay-1s">
                <div 
                  className="px-3 py-2 rounded-2 shadow-sm border d-flex align-items-center gap-2"
                  style={{ 
                    backgroundColor: "rgba(0, 0, 0, 0.4)", 
                    borderColor: "rgba(255,255,255,0.2)",
                    backdropFilter: "blur(8px)"
                  }}
                >
                  <span className="badge bg-warning text-dark fw-bold px-2 py-1" style={{ fontSize: "10px" }}>NEW</span>
                  <span className="text-white opacity-90" style={{ fontSize: "12.5px", fontWeight: 500 }}>
                    Pelaksanaan KKN UBP Periode Juli-Agustus 2026 Resmi Dimulai
                  </span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* ================= CARD METRIK OVERLAPPING (MENUMPUK DI BAWAH) ================= */}
      <div className="container position-relative" style={{ zIndex: 3, marginTop: "-80px", marginBottom: "40px" }}>
        <div className="row g-4 justify-content-center">
          {[
            { 
              title: "Total Anggota", 
              count: "15 Mahasiswa", 
              desc: "Lintas program studi & keahlian sinergis.", 
              icon: "bi-people-fill",
              color: "#22c55e"
            },
            { 
              title: "Program Kerja", 
              count: "8 Inovasi Project", 
              desc: "Fokus pada infrastruktur & ekonomi kreatif.", 
              icon: "bi-kanban-fill",
              color: "#d97706"
            },
            { 
              title: "Kabar Terkini", 
              count: "12 Kabar Blog", 
              desc: "Catatan harian perkembangan program pengabdian.", 
              icon: "bi-journal-richtext",
              color: "#0284c7"
            },
            { 
              title: "Education Center", 
              count: "4 Sektor Utama", 
              desc: "Bimbingan belajar formal dan edukasi kesehatan.", 
              icon: "bi-mortarboard-fill",
              color: "#ec4899"
            }
          ].map((item, idx) => (
            <div key={idx} className="col-md-6 col-lg-3">
              <div 
                className="p-4 bg-card-campus border text-center h-100 shadow-lg campus-metric-card"
                style={{
                  backgroundColor: isDark ? "#121813" : "#ffffff",
                  borderColor: isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.05)",
                  borderRadius: "12px",
                  transition: "all 0.3s ease"
                }}
              >
                {/* Ikon Lingkaran Pas di Tengah Atas Konten */}
                <div 
                  className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
                  style={{ 
                    width: "55px", 
                    height: "55px", 
                    backgroundColor: isDark ? "rgba(255,255,255,0.05)" : "#f3f4f6",
                    color: item.color
                  }}
                >
                  <i className={`bi ${item.icon} fs-4`}></i>
                </div>

                {/* Angka Statistik Utama */}
                <h4 className="fw-black mb-1 tracking-tight" style={{ color: isDark ? "#ffffff" : "#111827", fontSize: "20px" }}>
                  {item.count}
                </h4>

                {/* Judul Kategori */}
                <h6 className="text-uppercase fw-bold text-muted mb-2.5" style={{ fontSize: "11px", letterSpacing: "1px" }}>
                  {item.title}
                </h6>
                
                {/* Garis Pembatas Tipis */}
                <div className="mx-auto my-2" style={{ width: "30px", height: "2px", backgroundColor: item.color, opacity: 0.6 }}></div>

                {/* Deskripsi Singkat */}
                <p className="text-muted mb-0 small" style={{ lineHeight: "1.4" }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* =========================================================================
      2. MANGGIL KOMPONEN TENTANG (Otomatis tampil di bawah kartu metrik pas di-scroll)
      ========================================================================= */}
      <TentangSection />

      {/* ================= CUSTOM HOVER STYLES ================= */}
      <style jsx global>{`
        .fw-black { font-weight: 900 !important; }
        .px-4.5 { padding-left: 1.75rem !important; padding-right: 1.75rem !important; }
        .mb-2.5 { margin-bottom: 0.6rem !important; }

        /* Hover Effect Tombol Solid */
        .campus-btn-solid {
          transition: all 0.2s ease;
        }
        .campus-btn-solid:hover {
          background-color: #b45309 !important;
          transform: translateY(-2px);
          box-shadow: 0 6px 15px rgba(217,119,6,0.4) !important;
        }

        /* Hover Effect Tombol Outline */
        .campus-btn-outline {
          transition: all 0.2s ease;
          background-color: transparent;
        }
        .campus-btn-outline:hover {
          background-color: #ffffff !important;
          color: #103012 !important;
          transform: translateY(-2px);
        }

        /* Hover Effect Kartu Metrik Kampus */
        .campus-metric-card {
          position: relative;
        }
        .campus-metric-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 30px rgba(0, 0, 0, 0.12) !important;
        }
        [data-bs-theme="dark"] .campus-metric-card:hover {
          box-shadow: 0 20px 30px rgba(0, 0, 0, 0.5) !important;
          border-color: rgba(34,197,94,0.3) !important;
        }
      `}</style>
    </main>
  );
}