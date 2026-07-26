"use client";

import { useEffect, useState } from "react";

// UBAH NAMA FUNGSI JADI TentangSection
export default function TentangSection() {
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

  const forestGreen = "#244d34";
  const harvestGold = "#c99827";
  const warmCream = "#f9f6f0";   
  const darkBg = "#121b15";      

  return (
    <section 
      id="tentang" // TAMBAHIN ID INI BUAT SCROLL ANCHOR
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
        {/* ... SISA CODINGAN KONTEN DAN GOOGLE MAPS LU YANG PANJANG TADI ... */}
        {/* (Tetap biarkan utuh seperti yang lu buat) */}
        <div className="text-center mb-5 animate__animated animate__fadeIn">
          <span className="fw-bold px-3 py-1 rounded-pill" style={{ backgroundColor: isDarkMode ? "rgba(255,255,255,0.05)" : "rgba(36, 77, 52, 0.08)", color: isDarkMode ? harvestGold : forestGreen, fontSize: "13px", letterSpacing: "0.5px" }}>
            Mengenal Kami
          </span>
          <h2 className="fw-black mt-3 mb-3" style={{ fontSize: "36px", letterSpacing: "-0.5px", color: isDarkMode ? "#ffffff" : forestGreen }}>
            Tentang KKN Desa Panyindangan
          </h2>
          <p className="mx-auto text-muted" style={{ maxWidth: "620px", fontSize: "14.5px", lineHeight: "1.6" }}>
            Sinergi nyata mahasiswa Universitas Buana Perjuangan Karawang angkatan 2026 dalam mengabdi, membangun inovasi, dan berkolaborasi erat demi kemajuan masyarakat desa.
          </p>
        </div>

        {/* ROW FOTO & DESKRIPSI */}
        <div className="row g-4 align-items-center mb-5">
          <div className="col-lg-6 animate__animated animate__fadeInLeft">
            <div className="p-2 rounded-4 shadow-sm position-relative" style={{ backgroundColor: isDarkMode ? "#1d2720" : "#ffffff", border: `1px solid ${isDarkMode ? "#2d3c31" : "#e4ded4"}` }}>
              <img src="assets/img/fotoTentang.jpg" alt="Dokumentasi KKN Panyindangan" className="img-fluid rounded-4 w-100" style={{ objectFit: "cover", height: "340px" }} />
              <div className="position-absolute bottom-0 start-0 m-4 px-3 py-2 rounded-3 shadow text-white fw-bold d-flex align-items-center gap-2" style={{ backgroundColor: forestGreen, fontSize: "13px" }}>
                <i className="bi bi-patch-check-fill" style={{ color: harvestGold }}></i> KKN UBP 2026
              </div>
            </div>
          </div>
          
          <div className="col-lg-6 animate__animated animate__fadeInRight">
            <h3 className="fw-bold mb-3" style={{ fontSize: "26px", color: isDarkMode ? "#ffffff" : forestGreen }}>Dedikasi Penuh & Aksi Nyata</h3>
            <p style={{ fontSize: "15px", lineHeight: "1.7", color: isDarkMode ? "#cbd5e1" : "#4a574d" }}>
              Program Kuliah Kerja Nyata ini dirancang bukan sekadar rutinitas akademik, melainkan sebagai jembatan inovasi untuk mengoptimalkan potensi lokal Desa Panyindangan...
            </p>
            {/* Poin-poin misi */}
            <div className="d-flex flex-column gap-3 mt-4">
              {[
                { title: "Dampak Jangka Panjang", desc: "Setiap program kerja difokuskan agar manfaatnya terus berlanjut bahkan setelah masa KKN selesai." },
                { title: "Pendekatan Humanis & Kolaboratif", desc: "Bergerak bersama perangkat desa, tokoh masyarakat, dan pemuda-pemudi karang taruna setempat." }
              ].map((item, idx) => (
                <div key={idx} className="d-flex gap-3 align-items-start">
                  <div className="d-flex align-items-center justify-content-center rounded-circle text-white p-2 shadow-sm" style={{ backgroundColor: harvestGold, width: "34px", height: "34px", flexShrink: 0 }}>
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

        <hr style={{ borderColor: isDarkMode ? "#2d3c31" : "#e4ded4" }} className="my-5" />

        {/* VISI MISI CARDS */}
        <div className="row g-4 mb-5">
          <div className="col-md-5 animate__animated animate__fadeInUp">
            <div className="p-4 rounded-4 h-100 shadow-sm transition-card text-white" style={{ backgroundColor: forestGreen, border: `2px solid ${harvestGold}` }}>
              <i className="bi bi-eye-fill fs-1 mb-3 d-block" style={{ color: harvestGold }}></i>
              <h4 className="fw-bold mb-3" style={{ letterSpacing: "-0.3px", color: "#ffffff" }}>Visi Kami</h4>
              <p className="mb-0 lh-lg" style={{ fontSize: "14px", opacity: 0.9, fontWeight: 500 }}>
                "Menjadi katalisator perubahan yang adaptif dan solutif dalam mewujudkan Desa Panyindangan yang mandiri, cerdas, sehat berkelanjutan, serta sadar digital pada tahun 2026."
              </p>
            </div>
          </div>

          <div className="col-md-7 animate__animated animate__fadeInUp" style={{ animationDelay: "0.1s" }}>
            <div className="p-4 rounded-4 h-100 shadow-sm transition-card" style={{ backgroundColor: isDarkMode ? "#1d2720" : "#ffffff", border: `1px solid ${isDarkMode ? "#2d3c31" : "#e4ded4"}` }}>
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
                    <span className="fw-bold px-2.5 py-1 rounded d-flex align-items-center justify-content-center text-white" style={{ backgroundColor: forestGreen, fontSize: "12px", minWidth: "28px" }}>0{index + 1}</span>
                    <p className="mb-0 text-muted" style={{ fontSize: "13.5px", lineHeight: "1.5" }}>{misi}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* LOKASI / GOOGLE MAPS */}
        <div className="row g-4 mt-2 animate__animated animate__fadeInUp" style={{ animationDelay: "0.2s" }}>
          <div className="col-lg-4">
            <div className="p-4 rounded-4 h-100 shadow-sm" style={{ backgroundColor: isDarkMode ? "#1d2720" : "#ffffff", border: `1px solid ${isDarkMode ? "#2d3c31" : "#e4ded4"}` }}>
              <h4 className="fw-bold mb-4" style={{ color: isDarkMode ? "#ffffff" : forestGreen }}>Titik Lokasi</h4>
              <p className="text-muted mb-4" style={{ fontSize: "14px", lineHeight: "1.6" }}>Pusat kegiatan KKN kami berpusat di Balai Desa Panyindangan...</p>
              <div className="d-flex gap-3 mb-3">
                <i className="bi bi-geo-alt-fill fs-5" style={{ color: harvestGold }}></i>
                <div>
                  <h6 className="fw-bold mb-1" style={{ color: isDarkMode ? "#ffffff" : forestGreen, fontSize: "15px" }}>Alamat Posko</h6>
                  <p className="mb-0 text-muted" style={{ fontSize: "13.5px" }}>Desa Panyindangan, Jawa Barat, Indonesia</p>
                </div>
              </div>
              <div className="d-flex gap-3">
                <i className="bi bi-clock-fill fs-5" style={{ color: harvestGold }}></i>
                <div>
                  <h6 className="fw-bold mb-1" style={{ color: isDarkMode ? "#ffffff" : forestGreen, fontSize: "15px" }}>Jam Operasional Posko</h6>
                  <p className="mb-0 text-muted" style={{ fontSize: "13.5px" }}>Senin - Sabtu: 08.00 - 16.00 WIB</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-8">
            <div className="rounded-4 overflow-hidden shadow-sm h-100" style={{ border: `2px solid ${isDarkMode ? forestGreen : harvestGold}`, minHeight: "300px" }}>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.617637651817!2d107.4913217!3d-6.6941295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e690f0000000001%3A0xc0f1b9b9a5a5a5a!2sDesa%20Panyindangan!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid" width="100%" height="100%" style={{ border: 0, minHeight: "300px" }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .transition-card { transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .transition-card:hover { transform: translateY(-5px); box-shadow: 0 12px 24px rgba(36, 77, 52, 0.08) !important; }
      `}</style>
    </section>
  );
}