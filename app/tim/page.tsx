"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface AnggotaTim {
  id: number;
  jabatan: string;
  src: string;
  icon: string;
}

export default function ProfilTimGrid5Kolom() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Data Anggota - Hanya Jabatan, Icon, dan Source Foto Poster
  const timData: AnggotaTim[] = [
    { id: 1, jabatan: "Ketua", src: "/assets/img/ketua.png", icon: "bi-person-badge-fill" },
    { id: 2, jabatan: "Wakil Ketua", src: "/assets/img/wketua.png", icon: "bi-people-fill" },
    { id: 3, jabatan: "Korlap", src: "/assets/img/korlap.png", icon: "bi-signpost-2-fill" },
    { id: 4, jabatan: "Sekretaris", src: "/assets/img/sekretaris.png", icon: "bi-card-list" },
    { id: 5, jabatan: "Bendahara", src: "/assets/img/bendahara.png", icon: "bi-cash-coin" },
    { id: 6, jabatan: "Divisi Acara", src: "/assets/img/acara.png", icon: "bi-calendar-event" },
    { id: 7, jabatan: "Divisi Humas", src: "/assets/img/humas.png", icon: "bi-megaphone" },
    { id: 8, jabatan: "Divisi PJJ", src: "/assets/img/pjj.png", icon: "bi-camera-video" },
    { id: 9, jabatan: "Divisi Konsumsi", src: "/assets/img/konsumsi.png", icon: "bi-egg-fried" },
    { id: 10, jabatan: "Divisi Kesehatan", src: "/assets/img/kesehatan.png", icon: "bi-heart-pulse" },
  ];

  // Sinkronisasi pendeteksi tema dark/light mode
  useEffect(() => {
    const theme = document.documentElement.getAttribute("data-bs-theme");
    setIsDarkMode(theme === "dark");

    const observer = new MutationObserver(() => {
      const currentTheme = document.documentElement.getAttribute("data-bs-theme");
      setIsDarkMode(currentTheme === "dark");
    });

    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-bs-theme"] });
    return () => observer.disconnect();
  }, []);

  // Fungsi menggeser deretan kartu slider
  const jalanScroll = (direction: "kiri" | "kanan") => {
    if (scrollRef.current) {
      const kontainer = scrollRef.current;
      const kartuPertama = kontainer.firstChild as HTMLElement;
      if (kartuPertama) {
        const lebarKartu = kartuPertama.offsetWidth + 16; // Lebar kartu + jarak gap
        const totalGeser = direction === "kiri" ? -lebarKartu : lebarKartu;
        kontainer.scrollBy({ left: totalGeser, behavior: "smooth" });
      }
    }
  };

  return (
    <main 
      style={{
        backgroundColor: isDarkMode ? "#0a0a0a" : "#fdfbf7",
        minHeight: "100vh",
        paddingTop: "140px",
        paddingBottom: "80px",
        fontFamily: "'Nunito', sans-serif",
        transition: "background-color 0.3s ease",
        overflowX: "hidden"
      }}
    >
      <div className="container-fluid px-4 px-md-5 position-relative">
        
        {/* ================= HEADER HALAMAN (LOGOS CENTERED, NAV AMAN DI KANAN) ================= */}
        <div className="position-relative w-100 mb-5 pb-4 border-bottom" style={{ borderColor: isDarkMode ? "#2d2d2d" : "#e5e7eb" }}>
          
          {/* Blok Tengah: Judul & Logo */}
          <div className="text-center mx-auto" style={{ maxWidth: "600px" }}>
            {/* Logo Diperbesar Proporsional (85px) */}
            <div className="d-flex justify-content-center align-items-center gap-3 mb-3">
              <div className="position-relative" style={{ width: "85px", height: "85px" }}>
                <Image src="/assets/img/logoUbp.png" alt="Logo UBP" fill style={{ objectFit: "contain" }} />
              </div>
              <div className="position-relative" style={{ width: "85px", height: "85px" }}>
                <Image src="/assets/img/logoDesa.png" alt="Logo Desa" fill style={{ objectFit: "contain" }} />
              </div>
            </div>
            {/* Judul Utama */}
            <h1 className="fw-black m-0 display-6" style={{ color: isDarkMode ? "#ffffff" : "#1e293b", letterSpacing: "-1.5px" }}>
              Daftar Organisasi KKN
            </h1>
          </div>

          {/* TOMBOL NAVIGASI < > (Diturunin di atas garis, anti-nabrak) */}
          <div className="position-absolute end-0 d-flex gap-2 wadah-tombol-atas" style={{ bottom: "20px" }}>
            <button 
              onClick={() => jalanScroll("kiri")}
              className="btn d-flex align-items-center justify-content-center shadow-sm tombol-nav-ijo"
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "4px",
                backgroundColor: "#22c55e",
                border: "none",
                color: "#ffffff"
              }}
            >
              <i className="bi bi-chevron-left fw-bold"></i>
            </button>
            <button 
              onClick={() => jalanScroll("kanan")}
              className="btn d-flex align-items-center justify-content-center shadow-sm tombol-nav-ijo"
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "4px",
                backgroundColor: "#22c55e",
                border: "none",
                color: "#ffffff"
              }}
            >
              <i className="bi bi-chevron-right fw-bold"></i>
            </button>
          </div>

        </div>

        {/* ================= AREA SLIDER MINI KARTU (PAS 5 KOLOM SEJAJAR DI DESKTOP) ================= */}
        <div 
          ref={scrollRef}
          className="d-flex gap-3 pb-4 snap-inline-container"
          style={{
            overflowX: "auto",
            scrollBehavior: "smooth",
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none"
          }}
        >
          {timData.map((anggota) => (
            <div key={anggota.id} className="flex-shrink-0 item-kartu-tim" style={{ scrollSnapAlign: "start" }}>
              <div 
                className="card border-0 shadow-sm h-100 overflow-hidden"
                style={{
                  borderRadius: "6px", // Struktur kotak lengkung minimalis tipis
                  backgroundColor: isDarkMode ? "#161616" : "#ffffff",
                  border: `1px solid ${isDarkMode ? "#2d2d2d" : "#e5e7eb"}`
                }}
              >
                {/* Visual Image Frame */}
                <div className="position-relative w-100" style={{ aspectRatio: "4 / 5" }}>
                  <Image
                    src={anggota.src}
                    alt={`Poster ${anggota.jabatan}`}
                    fill
                    sizes="(max-width: 576px) 75vw, 280px"
                    style={{ objectFit: "cover" }}
                  />
                </div>

                {/* Footer Data: Jabatan + Tombol Orange Preview Pojok Kanan Bawah */}
                <div className="card-body p-3 d-flex align-items-center justify-content-between position-relative" style={{ minHeight: "60px" }}>
                  
                  {/* Jabatan Teks Hitam Murni / Putih di Dark Mode */}
                  <div className="d-flex align-items-center gap-2 text-truncate" style={{ maxWidth: "60%" }}>
                    <i className={`bi ${anggota.icon}`} style={{ fontSize: "15px", color: isDarkMode ? "#ffffff" : "#000000" }}></i>
                    <h6 
                      className="fw-black mb-0 text-truncate text-uppercase tracking-wide" 
                      style={{ fontSize: "12px", color: isDarkMode ? "#ffffff" : "#000000" }}
                    >
                      {anggota.jabatan}
                    </h6>
                  </div>

                  {/* Tombol Klik Kanan Bawah */}
                  <button
                    onClick={() => setPreviewImage(anggota.src)}
                    className="btn shadow-sm fw-bold tombol-preview-orange"
                    style={{
                      backgroundColor: "#ff7a00",
                      color: "#ffffff",
                      borderRadius: "4px",
                      fontSize: "11px",
                      padding: "5px 12px",
                      border: "none"
                    }}
                  >
                    Preview
                  </button>

                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* ================= MODAL PRATINJAU GRID BARU (ABU-ABU BLUR + LAYOUT ANTI-NABRAK) ================= */}
      {previewImage && (
        <div 
          className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center p-3 p-md-4"
          style={{
            backgroundColor: isDarkMode ? "rgba(28, 28, 30, 0.75)" : "rgba(225, 230, 235, 0.8)", // Abu-abu premium mewah bray
            zIndex: 9999, // Z-index tertinggi mutlak melewati semua elemen navbar
            backdropFilter: "blur(16px)", // Efek blur latar belakang mantap
            WebkitBackdropFilter: "blur(16px)"
          }}
          onClick={() => setPreviewImage(null)} // Klik luar otomatis nutup modal
        >
          {/* Wadah Kotak Grid Pratinjau Terstruktur Rapi */}
          <div 
            className="d-flex flex-column shadow-lg overflow-hidden style-grid-modal"
            style={{ 
              maxWidth: "440px", 
              width: "100%",
              borderRadius: "8px",
              backgroundColor: isDarkMode ? "#1c1c1e" : "#ffffff",
              border: `1px solid ${isDarkMode ? "#3a3a3c" : "#e5e7eb"}`
            }}
            onClick={(e) => e.stopPropagation()} // Mencegah modal tertutup saat area dalam diklik
          >
            {/* Top Grid Kontrol: Download & Silang dikunci dalam baris internal */}
            <div 
              className="d-flex align-items-center justify-content-between p-3 border-bottom" 
              style={{ borderColor: isDarkMode ? "#2d2d2d" : "#f3f4f6" }}
            >
              <span className="fw-bold text-muted text-uppercase tracking-wider" style={{ fontSize: "11px" }}>
                Pratinjau Poster
              </span>
              
              {/* Tombol Aksi Sejajar Grid */}
              <div className="d-flex align-items-center gap-2">
                {/* Unduh File Fungsional */}
                <a 
                  href={previewImage} 
                  download={`KKN_Panyindangan_${previewImage.split('/').pop()}`}
                  className="btn d-flex align-items-center gap-2 text-white fw-bold shadow-sm"
                  style={{ backgroundColor: "#ff7a00", borderRadius: "4px", fontSize: "12px", padding: "6px 14px" }}
                >
                  <i className="bi bi-download"></i> Download
                </a>
                
                {/* Close Silang Kotak */}
                <button 
                  onClick={() => setPreviewImage(null)}
                  className="btn btn-light border d-flex align-items-center justify-content-center shadow-sm"
                  style={{ width: "32px", height: "32px", borderRadius: "4px", padding: 0 }}
                >
                  <i className="bi bi-x-lg" style={{ fontSize: "13px" }}></i>
                </button>
              </div>
            </div>
            
            {/* Wadah Frame Gambar Utama */}
            <div className="p-2" style={{ backgroundColor: isDarkMode ? "#121212" : "#f9fafb" }}>
              <div className="position-relative w-100 overflow-hidden" style={{ aspectRatio: "4 / 5", borderRadius: "4px" }}>
                <Image
                  src={previewImage}
                  alt="Pratinjau Gambar Penuh"
                  fill
                  style={{ objectFit: "contain" }}
                  unoptimized
                />
              </div>
            </div>

          </div>
        </div>
      )}

      {/* ================= REKAYASA CSS RESPONSIVE & FONT STYLE ================= */}
      <style jsx global>{`
        /* Ikat Font Style Nunito di Semua Elemen Penting */
        body, main, h1, h6, button, a, span {
          font-family: 'Nunito', sans-serif !important;
        }

        .fw-black { font-weight: 900 !important; }
        
        /* Layout Grid Desktop Utama: Pas 5 Kolom Sejajar Bersih */
        .item-kartu-tim {
          width: calc((100% - (4 * 16px)) / 5);
        }

        /* Resolusi Screen Laptop (Max 4 Kolom) */
        @media (max-width: 1300px) {
          .item-kartu-tim {
            width: calc((100% - (3 * 16px)) / 4);
          }
        }

        /* Resolusi Tablet Menengah (Max 3 Kolom) */
        @media (max-width: 992px) {
          .item-kartu-tim {
            width: calc((100% - (2 * 16px)) / 3);
          }
        }

        /* Resolusi HP Ukuran Lebar (Max 2 Kolom) */
        @media (max-width: 768px) {
          .item-kartu-tim {
            width: calc((100% - (1 * 16px)) / 2);
          }
        }

        /* Mobile HP KKN Viewport Setup */
        @media (max-width: 520px) {
          .item-kartu-tim {
            width: 80%; /* Intipan kartu kanan tetap terjaga */
          }
          /* Posisikan tombol navigasi sejajar di bawah judul khusus mobile screen */
          .wadah-tombol-atas {
            position: relative !important;
            bottom: 0 !important;
            margin-top: 15px;
            justify-content: center !important;
            width: 100%;
          }
        }

        /* Hilangkan batang scrollbar bawaan system */
        .snap-inline-container::-webkit-scrollbar {
          display: none;
        }

        .tombol-nav-ijo:active, .tombol-preview-orange:active {
          transform: scale(0.96);
        }

        .tombol-nav-ijo:hover {
          background-color: #16a34a !important;
        }

        .tombol-preview-orange:hover {
          background-color: #e06c00 !important;
        }
      `}</style>
    </main>
  );
}