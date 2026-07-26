"use client";

import { useEffect, useState } from "react";

export default function KegiatanPage() {
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

  // Data 4 Grid Dokumentasi Kegiatan KKN (Berdasarkan Kategori Pendidikan & Kesehatan)
  const kegiatanData = [
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
      title: "Penyuluhan Literasi Digital & Pembagian Buku",
      desc: "Dokumentasi pelaksanaan kelas mengajar interaktif dan penyerahan donasi buku bacaan gratis untuk anak-anak di Balai Desa Panyindangan. Kegiatan berjalan kondusif dengan antusiasme tinggi dari para siswa sekolah dasar setempat.",
      foto: "#", // Input foto dokumentasi kegiatan di sini
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
      title: "Aksi Bersih Dusun & Pembuatan Tempat Kompos",
      desc: "Gotong royong berkala bersama warga RW 02 dalam membersihkan saluran air serta mempraktikkan langsung pembuatan tong komposter skala rumah tangga untuk menekan volume pembuangan sampah organik basah.",
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
      status: "PROSES", // Otomatis berstatus On Going (Biru)
      title: "Pengecatan dan Penataan Ruang Pojok Baca",
      desc: "Proses pengerjaan fisik revitalisasi pojok baca masyarakat. Mahasiswa KKN bersama pemuda setempat sedang melakukan pengecatan dinding mural edukatif dan merakit rak buku tambahan agar ruangan terasa lebih hidup.",
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
      title: "Pemeriksaan Kesehatan Gratis & Posyandu Balita",
      desc: "Pendampingan penuh kader kesehatan dalam pelaksanaan penimbangan berat badan balita, pemberian vitamin A, serta pemeriksaan tekanan darah gratis bagi warga lanjut usia guna mendeteksi dini risiko penyakit degeneratif.",
      foto: "#",
    },
  ];

  // Fungsi Toggle Expand deskripsi
  const toggleExpand = (id: number) => {
    setExpandedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Fungsi Filter Berdasarkan Kategori Pendidikan / Kesehatan
  const filteredKegiatan = activeFilter === "all" 
    ? kegiatanData 
    : kegiatanData.filter(item => item.kategori === activeFilter);

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
            Kegiatan KKN
          </h1>
          <p className="mx-auto text-muted" style={{ maxWidth: "680px", fontSize: "14.5px" }}>
            Dokumentasi aksi nyata dan realisasi program kerja harian yang dilaksanakan oleh mahasiswa KKN di Desa Panyindangan.
          </p>
        </div>

        {/* ================= FILTER BUTTONS (PENDIDIKAN & KESEHATAN) ================= */}
        <div 
          className="d-flex flex-nowrap overflow-x-auto justify-content-start justify-content-md-center gap-2 mb-5 border-bottom pb-3 mobile-scroll-fix" 
          style={{ borderColor: isDarkMode ? "#222" : "#e5e7eb", paddingLeft: "10px", paddingRight: "10px" }}
        >
          {[
            { id: "all", label: "Semua Kegiatan", icon: "bi-grid-fill" },
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
          {filteredKegiatan.map((item) => {
            const isExpanded = !!expandedCards[item.id];
            
            return (
              <div key={item.id} className="col-12 col-md-6 col-xl-3">
                <div 
                  className="card h-100 border-0 shadow-sm kegiatan-card position-relative d-flex flex-column justify-content-between overflow-hidden"
                  style={{
                    backgroundColor: isDarkMode ? cardDarkBg : "#ffffff",
                    borderRadius: "14px",
                    border: `1px solid ${isDarkMode ? "#1d2720" : "#e5e7eb"}`,
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                  }}
                >
                  {/* FOTO DOKUMENTASI */}
                  <div className="position-relative w-100 bg-secondary-subtle" style={{ height: "165px" }}>
                    <img 
                      src={item.foto} 
                      alt={item.title} 
                      className="w-100 h-100 object-cover"
                      style={{ objectFit: "cover", display: item.foto === "#" ? "none" : "block" }}
                    />
                    {item.foto === "#" && (
                      <div className="w-100 h-100 d-flex flex-column align-items-center justify-content-center text-muted p-2">
                        <i className="bi bi-camera fs-2 mb-1"></i>
                        <span style={{ fontSize: "11px" }}>[ Input Dokumentasi # ]</span>
                      </div>
                    )}
                  </div>

                  {/* CONTENT BODY */}
                  <div className="p-3.5 d-flex flex-column flex-grow-1" style={{ padding: "18px" }}>
                    
                    {/* BARIS JADWAL WAKTU & STATUS (SWEET SPOT PAD & MARGIN) */}
                    <div 
                      className="d-flex align-items-center justify-content-between border-bottom pb-2.5 mb-3 gap-2" 
                      style={{ borderColor: isDarkMode ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)" }}
                    >
                      {/* Kiri: Detail Waktu */}
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
                      
                      {/* Kanan: Badge Status Premium (Sesuai Ukuran Pas Gak Mepet) */}
                      <div 
                        className="d-flex align-items-center fw-bold flex-shrink-0"
                        style={{
                          fontSize: "10.5px",
                          padding: "3px 8px", 
                          gap: "5px",
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

                    {/* LABEL KATEGORI + ICON */}
                    <div className="d-flex align-items-center gap-1.5 mb-2">
                      <i className={`bi ${item.icon}`} style={{ color: isDarkMode ? harvestGold : forestGreen, fontSize: "13px" }}></i>
                      <span className="fw-extrabold" style={{ fontSize: "11px", color: isDarkMode ? harvestGold : forestGreen, letterSpacing: "0.4px" }}>
                        {item.kategoriLabel.toUpperCase()}
                      </span>
                    </div>
                    
                    {/* JUDUL UTAMA */}
                    <h5 className="fw-bold mb-2 lh-base" style={{ fontSize: "15px", color: isDarkMode ? "#ffffff" : forestGreen }}>
                      {item.title}
                    </h5>
                    
                    {/* DESKRIPSI + 5 LINES MAX EXPANDER */}
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

                    {/* BUTTON PREVIEW / BACA DETAIL */}
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
                        Baca Detail <i className="bi bi-arrow-right-short fs-6"></i>
                      </a>
                    </div>

                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* CSS CUSTOM STYLE */}
      <style jsx global>{`
        .kegiatan-card:hover {
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