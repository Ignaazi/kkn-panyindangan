"use client";

import { useEffect, useState } from "react";

export default function BlogPage() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");
  
  // State untuk melacak ID kartu mana saja yang sedang di-expand (Selengkapnya)
  const [expandedCards, setExpandedCards] = useState<Record<number, boolean>>({});

  // Sinkronisasi tema otomatis dengan sistem Bootstrap global
  useEffect(() => {
    const theme = document.documentElement.getAttribute("data-bs-theme");
    setIsDarkMode(theme === "dark");
    
    const observer = new MutationObserver(() => {
      const updatedTheme = document.documentElement.getAttribute("data-bs-theme");
      setIsDarkMode(updatedTheme === "dark");
    });
    
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-bs-theme"] });
    return () => observer.disconnect();
  }, []);

  // Variabel Warna Tema KKN Panyindangan
  const forestGreen = "#244d34"; 
  const harvestGold = "#c99827"; 
  const orangeOrange = "#FFA500";
  const warmCream = "#f9f6f0";   
  const darkBg = "#080d09";      
  const cardDarkBg = "#121b15";

  // Data Grid Blog KKN (Icon diseragamkan total dengan menu filter atas)
  const blogData = [
    {
      id: 1,
      kategori: "pendidikan",
      kategoriLabel: "Pendidikan",
      icon: "bi-book-half", // Seragam Pendidikan
      hari: "Minggu",
      tanggal: "26",
      bulan: "Juli",
      tahun: "2026",
      waktu: "10:00 WIB",
      status: "TERBARU", 
      title: "Vibe Coding Bootcamp Anak Desa: Mengubah Mindset Lewat AI",
      desc: "Program akselerasi pengenalan teknologi kecerdasan buatan untuk remaja Desa Panyindangan. Dalam beberapa sesi intensif, peserta diajak membangun logika aplikasi sederhana tanpa harus mahir pemrograman rumit terlebih dahulu, membuka cakrawala digital yang luas.",
      foto: "#", 
    },
    {
      id: 2,
      kategori: "lingkungan",
      kategoriLabel: "Lingkungan",
      icon: "bi-tree-fill", // Seragam Lingkungan
      hari: "Jumat",
      tanggal: "24",
      bulan: "Juli",
      tahun: "2026",
      waktu: "16:30 WIB",
      status: "POPULER",
      title: "GenAI Video Fest: Edukasi Ekologi Berbasis Konten Kreatif",
      desc: "Pemanfaatan media audio visual untuk kampanye pelestarian alam lokal. Warga diajarkan menyusun cerita, mengambil dokumentasi lingkungan sekitar dusun, hingga mengeditnya menjadi konten video kreatif yang siap disebarluaskan di media sosial.",
      foto: "#",
    },
    {
      id: 3,
      kategori: "pendidikan",
      kategoriLabel: "Pendidikan",
      icon: "bi-book-half", // Seragam Pendidikan
      hari: "Rabu",
      tanggal: "22",
      bulan: "Juli",
      tahun: "2026",
      waktu: "09:00 WIB",
      status: "POPULER",
      title: "Revitalisasi Sarana Mengajar Guna Mengatasi Kejenuhan Belajar",
      desc: "Analisis dan implementasi metode fun learning pada bimbingan belajar berkala. Melalui modifikasi alat peraga interaktif, anak-anak tingkat dasar menunjukkan peningkatan fokus dan pemahaman yang signifikan dibanding metode hafalan konvensional.",
      foto: "#",
    },
    {
      id: 4,
      kategori: "lingkungan",
      kategoriLabel: "Lingkungan",
      icon: "bi-tree-fill", // Seragam Lingkungan
      hari: "Senin",
      tanggal: "20",
      bulan: "Juli",
      tahun: "2026",
      waktu: "11:15 WIB",
      status: "TERBARU",
      title: "Gerakan Penanaman Pohon dan Penataan Area Hijau Dusun",
      desc: "Aksi nyata penghijauan kawasan rawan erosi di perbatasan desa. Melibatkan kolaborasi aktif perangkat desa beserta karang taruna dalam mendistribusikan ratusan bibit pohon produktif yang bernilai ekologis sekaligus ekonomis jangka panjang.",
      foto: "#",
    },
  ];

  // Fungsi Toggle Expand
  const toggleExpand = (id: number) => {
    setExpandedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Fungsi Filter
  const filteredBlog = activeFilter === "all" 
    ? blogData 
    : blogData.filter(item => item.kategori === activeFilter);

  return (
    <div 
      style={{ 
        paddingTop: "100px", 
        minHeight: "100vh", 
        fontFamily: "'Nunito', sans-serif",
        backgroundColor: isDarkMode ? darkBg : warmCream,
        color: isDarkMode ? "#e2e8f0" : "#2b3c30",
        transition: "all 0.3s ease"
      }}
    >
      <div className="container-fluid px-3 px-md-5 py-4">
        
        {/* ================= HEADER SECTION ================= */}
        <div className="text-center mb-5">
          <h1 className="fw-black mb-2 text-capitalize" style={{ fontSize: "38px", color: isDarkMode ? "#ffffff" : forestGreen }}>
            Blog & Artikel KKN
          </h1>
          <p className="mx-auto text-muted" style={{ maxWidth: "680px", fontSize: "14.5px" }}>
            Informasi edukatif, kabar terbaru, dan dokumentasi mendalam seputar program Pendidikan dan Lingkungan di Desa Panyindangan.
          </p>
        </div>

        {/* ================= FILTER BUTTONS BLOG ================= */}
        <div 
          className="d-flex flex-nowrap overflow-x-auto justify-content-start justify-content-md-center gap-2 mb-5 border-bottom pb-3 mobile-scroll-fix" 
          style={{ borderColor: isDarkMode ? "#222" : "#e5e7eb", paddingLeft: "10px", paddingRight: "10px" }}
        >
          {[
            { id: "all", label: "Semua Tulisan", icon: "bi-grid-fill" },
            { id: "pendidikan", label: "Pendidikan", icon: "bi-book-half" },
            { id: "lingkungan", label: "Lingkungan", icon: "bi-tree-fill" }
          ].map((btn) => (
            <button 
              key={btn.id}
              onClick={() => setActiveFilter(btn.id)}
              className="btn fw-bold d-flex align-items-center gap-2 px-3 py-2 text-nowrap transition-all"
              style={{
                fontSize: "13.5px",
                borderRadius: "8px",
                backgroundColor: activeFilter === btn.id ? forestGreen : (isDarkMode ? "#121b15" : "#ffffff"),
                color: activeFilter === btn.id ? "#ffffff" : (isDarkMode ? "#9ca3af" : "#4b5563"),
                border: `1px solid ${activeFilter === btn.id ? forestGreen : (isDarkMode ? "#2d3c31" : "#e5e7eb")}`
              }}
            >
              <i className={`bi ${btn.icon}`}></i> {btn.label}
            </button>
          ))}
        </div>

        {/* ================= 2 COLUMNS LANDSCAPE GRID ================= */}
        <div className="row g-4 justify-content-center">
          {filteredBlog.map((item) => {
            const isExpanded = !!expandedCards[item.id];
            
            return (
              <div key={item.id} className="col-12 col-xl-6">
                <div 
                  className="card h-100 border-0 shadow-sm blog-landscape-card d-flex flex-column justify-content-between overflow-hidden"
                  style={{
                    backgroundColor: isDarkMode ? cardDarkBg : "#ffffff",
                    borderRadius: "10px", // Kotak ujung melengkung sedikit (clean look)
                    border: `1px solid ${isDarkMode ? "#1d2720" : "#e5e7eb"}`,
                    transition: "all 0.3s ease"
                  }}
                >
                  {/* ATAS: AREA UTAMA (FOTO KIRI, KONTEN KANAN) */}
                  <div className="d-flex flex-column flex-sm-row p-3.5 gap-3" style={{ padding: "20px" }}>
                    
                    {/* FOTO DI SEBELAH KIRI KOTAK */}
                    <div 
                      className="position-relative bg-secondary-subtle flex-shrink-0 mx-auto mx-sm-0" 
                      style={{ 
                        width: "145px", 
                        height: "145px", 
                        borderRadius: "12px", 
                        overflow: "hidden" 
                      }}
                    >
                      <img 
                        src={item.foto} 
                        alt={item.title} 
                        className="w-100 h-100 object-cover"
                        style={{ objectFit: "cover", display: item.foto === "#" ? "none" : "block" }}
                      />
                      {item.foto === "#" && (
                        <div className="w-100 h-100 d-flex flex-column align-items-center justify-content-center text-muted p-2 text-center">
                          <i className="bi bi-image fs-3 mb-1"></i>
                          <span style={{ fontSize: "10px" }}>[ Thumbnail ]</span>
                        </div>
                      )}
                    </div>

                    {/* KONTEN TEKS DI SEBELAH KANAN */}
                    <div className="flex-grow-1 d-flex flex-column justify-content-between">
                      <div>
                        {/* JUDUL UTAMA */}
                        <h5 className="fw-bold mb-2 lh-sm" style={{ fontSize: "16px", color: isDarkMode ? "#ffffff" : forestGreen }}>
                          {item.title}
                        </h5>
                        
                        {/* DESKRIPSI (DIATAS BUTTON) */}
                        <div className="position-relative mb-2">
                          <p 
                            className={`text-muted mb-0 ${!isExpanded ? "clamp-3-lines" : ""}`} 
                            style={{ 
                              fontSize: "12.5px", 
                              lineHeight: "1.5",
                              transition: "all 0.3s ease"
                            }}
                          >
                            {item.desc}
                          </p>
                          <span 
                            onClick={() => toggleExpand(item.id)}
                            className="text-success fw-bold d-inline-block mt-1 custom-toggle-link"
                            style={{ cursor: "pointer", fontSize: "11.5px" }}
                          >
                            {isExpanded ? "Sembunyikan ↑" : "Selengkapnya... ↓"}
                          </span>
                        </div>
                      </div>

                      {/* BARIS TOMBOL PREVIEW ORANGE & STATUS BADGE 3D */}
                      <div className="d-flex align-items-center gap-3 mt-2">
                        {/* Preview Button Orange */}
                        <a 
                          href="#" 
                          className="btn btn-sm text-white fw-bold d-inline-flex align-items-center gap-1 shadow-sm text-solid-fix transition-all"
                          style={{
                            backgroundColor: orangeOrange,
                            borderRadius: "20px",
                            fontSize: "11.5px",
                            padding: "4px 14px",
                            border: "none"
                          }}
                        >
                          Preview <i className="bi bi-arrow-right-circle-fill"></i>
                        </a>

                        {/* Status Kotak Mini Efek 3D Nyata */}
                        {item.status === "POPULER" ? (
                          /* BADGE 3D POPULER (API BERGERAK MERAH-ORANGE) */
                          <div 
                            className="status-badge-3d status-populer position-relative d-inline-flex align-items-center fw-bold text-white"
                            style={{
                              fontSize: "10.5px",
                              padding: "4px 9px",
                              gap: "4px",
                              borderRadius: "6px",
                              background: "linear-gradient(180deg, #ff5e3a 0%, #ef4444 100%)",
                              boxShadow: "inset 0 1.5px 0px rgba(255, 255, 255, 0.4), 0 3px 4px rgba(239, 68, 68, 0.35), 0 1px 0px #b91c1c",
                              border: "1px solid #dc2626",
                              textShadow: "0 1px 1px rgba(0,0,0,0.2)"
                            }}
                          >
                            <i className="bi bi-fire fire-anim-premium" style={{ color: "#fffeb3" }}></i>
                            <span>Populer</span>
                          </div>
                        ) : (
                          /* BADGE 3D TERBARU (ES BATU BIRU + EFEK UAP) */
                          <div 
                            className="status-badge-3d status-terbaru position-relative d-inline-flex align-items-center fw-bold text-white"
                            style={{
                              fontSize: "10.5px",
                              padding: "4px 9px",
                              gap: "4px",
                              borderRadius: "6px",
                              background: "linear-gradient(180deg, #67e8f9 0%, #0284c7 100%)",
                              boxShadow: "inset 0 1.5px 0px rgba(255, 255, 255, 0.5), 0 3px 4px rgba(2, 132, 199, 0.35), 0 1px 0px #0369a1",
                              border: "1px solid #0284c7",
                              textShadow: "0 1px 1px rgba(0,0,0,0.2)"
                            }}
                          >
                            {/* Efek Uap/Asap Melayang Keluar Dari Kotak Es */}
                            <span className="vapor-particle vp-1"></span>
                            <span className="vapor-particle vp-2"></span>
                            <span className="vapor-particle vp-3"></span>
                            
                            <i className="bi bi-snowflake-fill" style={{ color: "#e0f2fe", fontSize: "11px" }}></i>
                            <span>Terbaru</span>
                          </div>
                        )}
                      </div>
                    </div>

                  </div>

                  {/* TENGAH: GARIS PEMBATAS FULL HORIZONTAL */}
                  <div style={{ borderTop: `1px solid ${isDarkMode ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)"}` }}></div>

                  {/* BAWAH: FOOTER JADWAL & JENIS KATEGORI (Alibaba Cloud Style - Seragam Total) */}
                  <div 
                    className="px-3.5 py-2.5 d-flex flex-wrap align-items-center justify-content-between gap-2"
                    style={{ 
                      padding: "10px 20px",
                      backgroundColor: isDarkMode ? "rgba(255,255,255,0.01)" : "rgba(0,0,0,0.01)"
                    }}
                  >
                    {/* Kiri: Jenis Kategori (Icon 100% Selaras Atas Bawah) */}
                    <div className="d-flex align-items-center gap-1.5 flex-shrink-0">
                      <i className={`bi ${item.icon}`} style={{ color: isDarkMode ? harvestGold : forestGreen, fontSize: "13px" }}></i>
                      <span className="fw-black" style={{ fontSize: "11px", color: isDarkMode ? harvestGold : forestGreen, letterSpacing: "0.5px" }}>
                        {item.kategoriLabel.toUpperCase()}
                      </span>
                    </div>

                    {/* Kanan: Detail Waktu Pelaksanaan */}
                    <div className="d-flex align-items-center flex-wrap gap-3 text-muted" style={{ fontSize: "11.5px" }}>
                      <div className="d-flex align-items-center gap-1">
                        <i className="bi bi-calendar3 text-success"></i>
                        <span>{item.hari}, {item.tanggal} {item.bulan} {item.tahun}</span>
                      </div>
                      <div className="d-flex align-items-center gap-1">
                        <i className="bi bi-clock text-success"></i>
                        <span>{item.waktu}</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* CSS CUSTOM CONTROL ANIMASI & 3D ENGINE */}
      <style jsx global>{`
        .blog-landscape-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.06) !important;
        }

        .clamp-3-lines {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .custom-toggle-link:hover {
          text-decoration: underline;
          opacity: 0.85;
        }

        .text-solid-fix {
          opacity: 1 !important;
        }

        /* ----- ANIMASI 3D API (POPULER) ----- */
        @keyframes firePremium {
          0% { transform: scale(1) translateY(0) rotate(0deg); opacity: 0.9; }
          30% { transform: scale(1.15) translateY(-0.5px) rotate(-4deg); }
          50% { opacity: 1; }
          70% { transform: scale(1.05) translateY(0) rotate(4deg); }
          100% { transform: scale(1) translateY(0) rotate(0deg); opacity: 0.9; }
        }
        .fire-anim-premium {
          display: inline-block;
          animation: firePremium 0.45s infinite linear;
        }

        /* ----- ANIMASI UAP/ASAP ES BALU (TERBARU) ----- */
        @keyframes vaporRise {
          0% { transform: translateY(2px) scale(0.6); opacity: 0; filter: blur(0.5px); }
          30% { opacity: 0.6; }
          80% { opacity: 0.3; filter: blur(1.5px); }
          100% { transform: translateY(-10px) scale(1.4); opacity: 0; filter: blur(2px); }
        }

        .vapor-particle {
          position: absolute;
          background: rgba(255, 255, 255, 0.65);
          border-radius: 50%;
          pointer-events: none;
          bottom: 80%;
          width: 5px;
          height: 5px;
        }
        .vp-1 { left: 20%; animation: vaporRise 1.4s infinite ease-out; }
        .vp-2 { left: 50%; animation: vaporRise 1.8s infinite ease-out 0.4s; width: 6px; height: 6px; }
        .vp-3 { left: 75%; animation: vaporRise 1.5s infinite ease-out 0.8s; }

        .mobile-scroll-fix::-webkit-scrollbar {
          display: none;
        }
        .mobile-scroll-fix {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}