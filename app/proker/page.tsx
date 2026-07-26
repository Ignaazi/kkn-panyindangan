"use client";

import { useEffect, useState } from "react";

export default function ProkerPage() {
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

  // Data 4 Grid Program Kerja KKN
  const prokerData = [
    {
      id: 1,
      kategori: "pendidikan",
      kategoriLabel: "Pendidikan",
      icon: "bi-book-half",
      hari: "Senin",
      tanggal: "03",
      bulan: "Agustus",
      tahun: "2026",
      waktu: "08:00 - 12:00",
      status: "SELESAI", // Pilihan: SELESAI / PROSES
      title: "Digitalisasi & Edukasi Literasi Anak Desa",
      desc: "Program bimbingan belajar interaktif mengenai pemanfaatan perangkat digital secara sehat serta gerakan peningkatan minat baca untuk anak-anak usia sekolah dasar di lingkungan Desa Panyindangan. Kegiatan ini dirancang secara berkelanjutan guna membangun fondasi kebiasaan membaca sejak dini serta memberikan wawasan dasar mengenai teknologi informasi yang bermanfaat untuk masa depan mereka.",
      foto: "#", // Input foto di sini
    },
    {
      id: 2,
      kategori: "kesehatan",
      kategoriLabel: "Kesehatan",
      icon: "bi-heart-pulse-fill",
      hari: "Rabu",
      tanggal: "05",
      bulan: "Agustus",
      tahun: "2026",
      waktu: "09:00 - 13:00",
      status: "SELESAI",
      title: "Optimalisasi Pemilahan Sampah Organik",
      desc: "Penyusunan sistem tata ruang tempat pembuangan sampah sementara yang terintegrasi di tingkat RW, dibarengi dengan penyuluhan langsung mengenai teknik pemisahan sampah organik dan anorganik. Selain itu, warga juga diajarkan cara mengolah limbah dapur menjadi pupuk kompos alami bernilai guna tinggi bagi pertanian lokal.",
      foto: "#",
    },
    {
      id: 3,
      kategori: "pendidikan",
      kategoriLabel: "Pendidikan",
      icon: "bi-pencil-square",
      hari: "Kamis",
      tanggal: "13",
      bulan: "Agustus",
      tahun: "2026",
      waktu: "13:30 - 16:00",
      status: "PROSES", // Akan otomatis berubah jadi biru stabilo "On Going"
      title: "Revitalisasi Fasilitas Pojok Baca Masyarakat",
      desc: "Pengadaan rak buku baru, klasifikasi kategori bahan bacaan, serta pengerjaan dekorasi ulang ruang baca umum agar terlihat jauh lebih menarik dan nyaman bagi warga. Langkah ini bertujuan untuk merangsang budaya literasi mandiri serta menyediakan sarana belajar non-formal yang inklusif untuk seluruh lapisan masyarakat desa.",
      foto: "#",
    },
    {
      id: 4,
      kategori: "kesehatan",
      kategoriLabel: "Kesehatan",
      icon: "bi-capsule",
      hari: "Sabtu",
      tanggal: "15",
      bulan: "Agustus",
      tahun: "2026",
      waktu: "07:30 - Selesai",
      status: "SELESAI",
      title: "Pemeriksaan Gizi Balita & Cegah Stunting",
      desc: "Bekerja sama dengan kader posyandu dan puskesmas setempat untuk menyelenggarakan cek kesehatan gratis bagi lansia dan balita. Fokus utama agenda ini mencakup peningkatan tinggi-berat badan anak, pembagian paket makanan tambahan tinggi kalori, serta edukasi intensif pencegahan stunting kepada para ibu hamil.",
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

  // Fungsi Filter Data
  const filteredProker = activeFilter === "all" 
    ? prokerData 
    : prokerData.filter(item => item.kategori === activeFilter);

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
            Program Kerja KKN
          </h1>
          <p className="mx-auto text-muted" style={{ maxWidth: "680px", fontSize: "14.5px" }}>
            Rencana aksi nyata dan program berkelanjutan yang dirancang untuk mendukung perkembangan Desa Panyindangan di berbagai sektor utama.
          </p>
        </div>

        {/* ================= FILTER BUTTONS KOTAK & JAJAR HORIZONTAL ================= */}
        <div 
          className="d-flex flex-nowrap overflow-x-auto justify-content-start justify-content-md-center gap-2 mb-5 border-bottom pb-3 mobile-scroll-fix" 
          style={{ borderColor: isDarkMode ? "#222" : "#e5e7eb", paddingLeft: "10px", paddingRight: "10px" }}
        >
          {[
            { id: "all", label: "Semua", icon: "bi-grid-fill" },
            { id: "pendidikan", label: "Pendidikan", icon: "bi-book-half" },
            { id: "kesehatan", label: "Kesehatan", icon: "bi-heart-pulse-fill" }
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

        {/* ================= 4 RESPONSIVE GRID BOXES ================= */}
        <div className="row g-4 justify-content-center">
          {filteredProker.map((item) => {
            const isExpanded = !!expandedCards[item.id];
            
            return (
              <div key={item.id} className="col-12 col-md-6 col-xl-3">
                <div 
                  className="card h-100 border-0 shadow-sm proker-card position-relative d-flex flex-column justify-content-between overflow-hidden"
                  style={{
                    backgroundColor: isDarkMode ? cardDarkBg : "#ffffff",
                    borderRadius: "14px",
                    border: `1px solid ${isDarkMode ? "#1d2720" : "#e5e7eb"}`,
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                  }}
                >
                  {/* FOTO WORK / DOCUMENTATION PLACEHOLDER */}
                  <div className="position-relative w-100 bg-secondary-subtle" style={{ height: "165px" }}>
                    <img 
                      src={item.foto} 
                      alt={item.title} 
                      className="w-100 h-100 object-cover"
                      style={{ objectFit: "cover", display: item.foto === "#" ? "none" : "block" }}
                    />
                    {item.foto === "#" && (
                      <div className="w-100 h-100 d-flex flex-column align-items-center justify-content-center text-muted p-2">
                        <i className="bi bi-image fs-2 mb-1"></i>
                        <span style={{ fontSize: "11px" }}>[ Input Foto # ]</span>
                      </div>
                    )}
                  </div>

                  {/* CONTENT BODY */}
                  <div className="p-3.5 d-flex flex-column flex-grow-1" style={{ padding: "18px" }}>
                    
                    {/* BARIS JADWAL WAKTU & STATUS (BERJAJAR KANAN-KIRI) */}
                    <div 
                      className="d-flex align-items-center justify-content-between border-bottom pb-2.5 mb-3 gap-2" 
                      style={{ borderColor: isDarkMode ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)" }}
                    >
                      {/* Kiri: Detail Kalender & Jam */}
                      <div className="text-muted" style={{ fontSize: "11.5px", lineHeight: "1.4" }}>
                        <div className="d-flex align-items-center gap-1 mb-1">
                          <i className="bi bi-calendar3 text-success"></i>
                          <span className="fw-medium">{item.hari}, {item.tanggal} {item.bulan} {item.tahun}</span>
                        </div>
                        <div className="d-flex align-items-center gap-1">
                          <i className="bi bi-clock text-success"></i>
                          <span className="fw-medium">{item.waktu}</span>
                        </div>
                      </div>
                      
                      {/* Kanan: Badge Status Mini Premium & Tidak Mepet (Diperbarui) */}
                      <div 
                        className="d-flex align-items-center fw-bold flex-shrink-0"
                        style={{
                          fontSize: "10.5px", // Ukuran teks proporsional & kecil
                          padding: "3px 8px",  // Padding pas: berjarak aman dari border tapi tidak kegedean
                          gap: "5px",          // Jarak ikon dan tulisan disesuaikan
                          backgroundColor: item.status === "SELESAI" 
                            ? (isDarkMode ? "#2a210d" : "#fffbeb") 
                            : (isDarkMode ? "#081c24" : "#f0fdfa"),
                          color: item.status === "SELESAI" ? harvestGold : "#06b6d4",
                          border: `1px solid ${
                            item.status === "SELESAI" 
                              ? (isDarkMode ? "#52431d" : "#fef08a") 
                              : (isDarkMode ? "#0e3f4e" : "#99f6e4")
                          }`,
                          borderRadius: "5px"
                        }}
                      >
                        {item.status === "SELESAI" ? (
                          <>
                            <i className="bi bi-star-fill" style={{ color: orangeOrange }}></i>
                            <span>Selesai</span>
                          </>
                        ) : (
                          <>
                            <i className="bi bi-clock-history text-info"></i>
                            <span style={{ color: "#00b4d8" }}>On Going</span>
                          </>
                        )}
                      </div>
                    </div>

                    {/* JENIS PROGRAM KERJA + ICON */}
                    <div className="d-flex align-items-center gap-1.5 mb-2">
                      <i className={`bi ${item.icon}`} style={{ color: isDarkMode ? harvestGold : forestGreen, fontSize: "13px" }}></i>
                      <span className="fw-extrabold" style={{ fontSize: "11px", color: isDarkMode ? harvestGold : forestGreen, letterSpacing: "0.4px" }}>
                        {item.kategoriLabel.toUpperCase()}
                      </span>
                    </div>
                    
                    {/* JUDUL PROKER */}
                    <h5 className="fw-bold mb-2 lh-base" style={{ fontSize: "15px", color: isDarkMode ? "#ffffff" : forestGreen }}>
                      {item.title}
                    </h5>
                    
                    {/* DESKRIPSI + DYNAMIC 5 LINE EXPANDER */}
                    <div className="position-relative">
                      <p 
                        className={`text-muted mb-0 ${!isExpanded ? "clamp-5-lines" : ""}`} 
                        style={{ 
                          fontSize: "13px", 
                          lineHeight: "1.55",
                          transition: "all 0.3s ease"
                        }}
                      >
                        {item.desc}
                      </p>
                      
                      <span 
                        onClick={() => toggleExpand(item.id)}
                        className="text-success fw-bold d-inline-block mt-1.5 custom-toggle-link"
                        style={{ cursor: "pointer", fontSize: "12.5px" }}
                      >
                        {isExpanded ? "Sembunyikan ↑" : "Selengkapnya... ↓"}
                      </span>
                    </div>

                    {/* BOTTOM RIGHT: MINI ORANGE PREVIEW BUTTON */}
                    <div className="d-flex justify-content-end align-items-center mt-4 pt-1">
                      <a 
                        href="#" 
                        className="btn btn-sm text-white fw-bold d-flex align-items-center gap-0.5 shadow-sm text-solid-fix"
                        style={{
                          backgroundColor: orangeOrange,
                          borderRadius: "6px",
                          fontSize: "11px",
                          padding: "5px 10px",
                          border: "none"
                        }}
                      >
                        Preview <i className="bi bi-arrow-right-short fs-6"></i>
                      </a>
                    </div>

                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* CSS CUSTOM CONTROLS */}
      <style jsx global>{`
        .proker-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 22px rgba(0,0,0,0.08) !important;
        }

        .clamp-5-lines {
          display: -webkit-box;
          -webkit-line-clamp: 5;
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