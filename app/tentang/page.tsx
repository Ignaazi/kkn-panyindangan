// app/tentang/page.tsx
"use client";

import { useEffect, useState } from "react";

export default function TentangPage() {
  const [isDarkMode, setIsDarkMode] = useState(false);

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

  // Kode Warna Berdasarkan Logo & Poster Resmi KKN Panyindangan
  const forestGreen = "#244d34"; // Hijau tua alam
  const harvestGold = "#c99827"; // Kuning emas padi
  const warmCream = "#f9f6f0";   // Krem estetik latar poster
  const darkBg = "#121b15";      // Latar gelap khusus dark mode

  return (
    <section 
      className="py-5 flex-grow-1" 
      style={{ 
        fontFamily: "'Nunito', sans-serif", 
        marginTop: '55px',
        backgroundColor: isDarkMode ? darkBg : warmCream,
        color: isDarkMode ? "#e2e8f0" : "#2b3c30",
        transition: "all 0.3s ease"
      }}
    >
      <div className="container py-4">
        
        {/* ================= HEADER SECTION ================= */}
        <div className="text-center mb-5 animate__animated animate__fadeIn">
          <span 
            className="fw-bold px-3 py-1 rounded-pill" 
            style={{ 
              backgroundColor: isDarkMode ? "rgba(255,255,255,0.05)" : "rgba(36, 77, 52, 0.08)", 
              color: isDarkMode ? harvestGold : forestGreen, 
              fontSize: "13px",
              letterSpacing: "0.5px"
            }}
          >
            Mengenal Kami
          </span>
          <h2 className="fw-black mt-3 mb-3" style={{ fontSize: "36px", letterSpacing: "-0.5px", color: isDarkMode ? "#ffffff" : forestGreen }}>
            Tentang KKN Desa Panyindangan
          </h2>
          <p className="mx-auto text-muted" style={{ maxWidth: "620px", fontSize: "14.5px", lineHeight: "1.6" }}>
            Sinergi nyata mahasiswa Universitas Buana Perjuangan Karawang angkatan 2026 dalam mengabdi, membangun inovasi, dan berkolaborasi erat demi kemajuan masyarakat desa.
          </p>
        </div>

        {/* ================= HERO CONTENT ROW ================= */}
        <div className="row g-4 align-items-center mb-5">
          {/* Sisi Kiri: Layout Foto dengan Frame Melengkung Estetik */}
          <div className="col-lg-6 animate__animated animate__fadeInLeft">
            <div 
              className="p-2 rounded-4 shadow-sm position-relative" 
              style={{ 
                backgroundColor: isDarkMode ? "#1d2720" : "#ffffff", 
                border: `1px solid ${isDarkMode ? "#2d3c31" : "#e4ded4"}` 
              }}
            >
              <img 
                src="assets/img/fotoTentang.jpg" 
                alt="Dokumentasi KKN Panyindangan" 
                className="img-fluid rounded-4 w-100"
                style={{ objectFit: "cover", height: "340px" }}
              />
              <div 
                className="position-absolute bottom-0 start-0 m-4 px-3 py-2 rounded-3 shadow text-white fw-bold d-flex align-items-center gap-2"
                style={{ backgroundColor: forestGreen, fontSize: "13px" }}
              >
                <i className="bi bi-patch-check-fill" style={{ color: harvestGold }}></i> KKN UBP 2026
              </div>
            </div>
          </div>
          
          {/* Sisi Kanan: Deskripsi Poin */}
          <div className="col-lg-6 animate__animated animate__fadeInRight">
            <h3 className="fw-bold mb-3" style={{ fontSize: "26px", color: isDarkMode ? "#ffffff" : forestGreen }}> 
              Dedikasi Penuh & Aksi Nyata
            </h3>
            <p style={{ fontSize: "15px", lineHeight: "1.7", color: isDarkMode ? "#cbd5e1" : "#4a574d" }}>
              Program Kuliah Kerja Nyata ini dirancang bukan sekadar rutinitas akademik, melainkan sebagai jembatan inovasi untuk mengoptimalkan potensi lokal Desa Panyindangan, baik dari sektor tata ruang infrastruktur, kelestarian lingkungan, edukasi literasi anak, hingga sistem digitalisasi administrasi.
            </p>
            
            <div className="d-flex flex-column gap-3 mt-4">
              {[
                { title: "Dampak Jangka Panjang", desc: "Setiap program kerja difokuskan agar manfaatnya terus berlanjut bahkan setelah masa KKN selesai." },
                { title: "Pendekatan Humanis & Kolaboratif", desc: "Bergerak bersama perangkat desa, tokoh masyarakat, dan pemuda-pemudi karang taruna setempat." }
              ].map((item, idx) => (
                <div key={idx} className="d-flex gap-3 align-items-start">
                  <div 
                    className="d-flex align-items-center justify-content-center rounded-circle text-white p-2 shadow-sm shadow-sm" 
                    style={{ backgroundColor: harvestGold, width: "34px", height: "34px", flexShrink: 0 }}
                  >
                    <i className="bi bi-check-lg fw-bold" style={{ fontSize: "16px" }}></i>
                  </div>
                  <div>
                    <h6 className="fw-bold mb-1" style={{ fontSize: "15px", color: isDarkMode ? "#ffffff" : forestGreen }}>{item.title}</h6>
                    <p className="mb-0 text-muted" style={{ fontSize: "13.5px" }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Garis Pembatas Halus */}
        <hr style={{ borderColor: isDarkMode ? "#2d3c31" : "#e4ded4" }} className="my-5" />

        {/* ================= VISI & MISI CARDS (RUSTIC NATURE STYLE) ================= */}
        <div className="row g-4">
          
          {/* KARTU VISI (HIJAU HUTAN) */}
          <div className="col-md-5 animate__animated animate__fadeInUp">
            <div 
              className="p-4 rounded-4 h-100 shadow-sm transition-card text-white" 
              style={{ 
                backgroundColor: forestGreen,
                border: `2px solid ${harvestGold}`
              }}
            >
              <i className="bi bi-eye-fill fs-1 mb-3 d-block" style={{ color: harvestGold }}></i>
              <h4 className="fw-bold mb-3" style={{ letterSpacing: "-0.3px", color: "#ffffff" }}>Visi Kami</h4>
              <p className="mb-0 lh-lg" style={{ fontSize: "14px", opacity: 0.9, fontWeight: 500 }}>
                "Menjadi katalisator perubahan yang adaptif dan solutif dalam mewujudkan Desa Panyindangan yang mandiri, cerdas, sehat berkelanjutan, serta sadar digital pada tahun 2026."
              </p>
            </div>
          </div>

          {/* KARTU MISI (KREM/DARK CONTAINER DENGAN OUTLINE ALIK INTERFACE POSTER) */}
          <div className="col-md-7 animate__animated animate__fadeInUp" style={{ animationDelay: "0.1s" }}>
            <div 
              className="p-4 rounded-4 h-100 shadow-sm transition-card" 
              style={{ 
                backgroundColor: isDarkMode ? "#1d2720" : "#ffffff", 
                border: `1px solid ${isDarkMode ? "#2d3c31" : "#e4ded4"}`
              }}
            >
              <div className="d-flex align-items-center gap-2 mb-4">
                <i className="bi bi-bullseye fs-2" style={{ color: harvestGold }}></i>
                <h4 className="fw-bold mb-0" style={{ color: isDarkMode ? "#ffffff" : forestGreen, letterSpacing: "-0.3px" }}>Misi Utama Kegiatan</h4>
              </div>
              
              <div className="d-flex flex-column gap-3">
                {[
                  "Mengoptimalkan tata kelola lingkungan hidup desa lewat edukasi pemilahan sampah umum.",
                  "Membantu modernisasi perangkat lunak / data administratif digital kantor Desa Panyindangan.",
                  "Menggelar program bimbingan belajar interaktif demi mendongkrak minat baca dan literasi siswa sekolah dasar."
                ].map((misi, index) => (
                  <div key={index} className="d-flex gap-3 align-items-start">
                    <span 
                      className="fw-bold px-2.5 py-1 rounded d-flex align-items-center justify-content-center text-white" 
                      style={{ 
                        backgroundColor: forestGreen, 
                        fontSize: "12px",
                        minWidth: "28px"
                      }}
                    >
                      0{index + 1}
                    </span>
                    <p className="mb-0 text-muted" style={{ fontSize: "13.5px", lineHeight: "1.5" }}>{misi}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>

      <style jsx global>{`
        .transition-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .transition-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 24px rgba(36, 77, 52, 0.08) !important;
        }
      `}</style>
    </section>
  );
}