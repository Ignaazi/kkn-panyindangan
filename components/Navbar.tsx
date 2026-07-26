"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<"project" | "informasi" | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Sinkronisasi tema dengan Bootstrap
  useEffect(() => {
    document.documentElement.setAttribute("data-bs-theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  // Efek deteksi scroll untuk mengaktifkan mode transparan di header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const themeGreen = "#22c55e";
  const activeBg = isDarkMode ? "#14532d" : "#f0fdf4";
  const dropdownBg = isDarkMode ? "#1a1a1a" : "#ffffff";
  const dropdownBorder = isDarkMode ? "#333333" : "#e5e7eb";

  return (
    <header 
      className="header fixed-top shadow-sm" 
      style={{
        fontFamily: "'Nunito', sans-serif",
        paddingTop: "8px",
        paddingBottom: "8px",
        backgroundColor: isDarkMode 
          ? (isScrolled ? "rgba(10, 10, 10, 0.65)" : "#0a0a0a") 
          : (isScrolled ? "rgba(255, 255, 255, 0.6)" : "#ffffff"),
        backdropFilter: isScrolled ? "blur(20px)" : "none",
        WebkitBackdropFilter: isScrolled ? "blur(20px)" : "none",
        borderBottom: `1px solid ${isDarkMode ? "#333333" : "#e5e7eb"}`,
        zIndex: 9999,
        transition: "background-color 0.3s ease, backdrop-filter 0.3s ease"
      }}
    >
      <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
        
        {/* ================= LEFT: LOGOS ================= */}
        <div className="d-flex align-items-center gap-3">
          <Link href="/" className="d-flex align-items-center gap-2 text-decoration-none">
            <Image src="/assets/img/logoUbp.png" alt="Logo UBP" width={50} height={50} style={{ objectFit: "contain" }} />
            <Image src="/assets/img/logoDesa1.png" alt="Logo Desa" width={50} height={50} style={{ objectFit: "contain" }} />
            <span 
              className="fw-bold ms-1 brand-title" 
              style={{ 
                color: isDarkMode ? "#9ca3af" : "#4b5563",
                letterSpacing: "-0.2px",
                whiteSpace: "nowrap"
              }}
            >
              KKN Desa Panyindangan
            </span>
          </Link>

          {/* ================= MIDDLE: LINKS (DESKTOP) ================= */}
          <nav className="d-none d-xl-flex align-items-center gap-2 position-relative">
            
            {/* 1. BERANDA */}
            <Link 
              href="/" 
              className="btn d-flex align-items-center fw-bold text-decoration-none rounded-pill border-0 nav-hover-green"
              style={{ 
                fontSize: "14px", 
                color: isDarkMode ? "#9ca3af" : "#4b5563",
                padding: "8px 16px"
              }}
            >
              Beranda
            </Link>

            {/* 2. PROJECT BARU (LAYOUT KIRI-KANAN 2 KOLOM, GAP SEIMBANG) */}
            <div 
              className="position-relative py-2"
              onMouseEnter={() => setActiveDropdown("project")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button 
                className="btn d-flex align-items-center gap-1 fw-bold rounded-pill border-0 nav-hover-green"
                style={{
                  fontSize: "14px",
                  padding: "8px 16px",
                  backgroundColor: activeDropdown === "project" ? activeBg : "transparent",
                  color: activeDropdown === "project" ? themeGreen : (isDarkMode ? "#9ca3af" : "#4b5563"),
                }}
              >
                Project Baru <i className={`bi bi-chevron-${activeDropdown === "project" ? "up" : "down"}`} style={{ fontSize: "11px" }}></i>
              </button>

              {activeDropdown === "project" && (
                <div 
                  className="position-absolute shadow-lg rounded-3 mt-2 border dropdown-bubble project-bubble animate__animated animate__fadeIn"
                  style={{ 
                    width: "480px", 
                    left: "-30px", // Posisinya disesuaikan agar proporsional
                    zIndex: 1000, 
                    backgroundColor: dropdownBg,
                    borderColor: dropdownBorder,
                    padding: "16px",
                    color: isDarkMode ? "#ffffff" : "#212529"
                  }}
                >
                  {/* Menggunakan row-cols-2 agar otomatis 2 kolom kiri-kanan, sisa 1 turun ke bawah */}
                  <div className="row row-cols-2 g-2">
                    {[
                      { title: "Program Kerja", desc: "Program Kerja KKN.", icon: "bi-rocket-takeoff-fill", gradient: "linear-gradient(135deg, #4ade80, #22c55e)", href: "/proker" },
                      { title: "Kegiatan", desc: "Kegiatan KKN.", icon: "bi-calendar-event-fill", gradient: "linear-gradient(135deg, #60a5fa, #3b82f6)", href: "/kegiatan" },
                      { title: "Blog", desc: "Blog KKN.", icon: "bi-journal-richtext", gradient: "linear-gradient(135deg, #fb923c, #f97316)", href: "/blog" },
                    ].map((item, idx) => (
                      <div key={idx} className="col">
                        <Link href={item.href} className="text-decoration-none text-reset h-100 d-block">
                          <div 
                            className="d-flex align-items-start dropdown-item rounded-3 custom-dropdown-hover h-100" 
                            style={{ 
                              padding: "10px 12px", 
                              cursor: "pointer",
                              gap: "12px" // Jarak gap ikon ke tulisan disamakan dengan Informasi
                            }}
                          >
                            {/* Kotak Ikon Warna Gradient Solid iOS Style */}
                            <div 
                              className="rounded-3 d-flex align-items-center justify-content-center text-white shadow-sm" 
                              style={{ 
                                width: "40px", 
                                height: "40px", 
                                background: item.gradient,
                                flexShrink: 0 
                              }}
                            >
                              <i className={`bi ${item.icon} fs-5`}></i>
                            </div>
                            <div>
                              <h6 className="fw-bold mb-0.5" style={{ fontSize: "13.5px", letterSpacing: "-0.1px" }}>{item.title}</h6>
                              <p className="text-muted mb-0" style={{ fontSize: "11.5px", lineHeight: "1.35" }}>{item.desc}</p>
                            </div>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* 3. INFORMASI */}
            <div 
              className="position-relative py-2"
              onMouseEnter={() => setActiveDropdown("informasi")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button 
                className="btn d-flex align-items-center gap-1 fw-bold rounded-pill border-0 nav-hover-green"
                style={{
                  fontSize: "14px",
                  padding: "8px 16px",
                  backgroundColor: activeDropdown === "informasi" ? activeBg : "transparent",
                  color: activeDropdown === "informasi" ? themeGreen : (isDarkMode ? "#9ca3af" : "#4b5563"),
                }}
              >
                Informasi <i className={`bi bi-chevron-${activeDropdown === "informasi" ? "up" : "down"}`} style={{ fontSize: "11px" }}></i>
              </button>

              {activeDropdown === "informasi" && (
                <div 
                  className="position-absolute shadow-lg rounded-3 py-2 mt-2 border dropdown-bubble info-bubble animate__animated animate__fadeIn"
                  style={{ 
                    width: "230px", 
                    left: "0", 
                    zIndex: 1000, 
                    backgroundColor: dropdownBg,
                    borderColor: dropdownBorder
                  }}
                >
                  {[
                    { text: "Tentang", href: "/tentang", icon: "bi-info-circle-fill" },
                    { text: "Profile Tim", href: "/tim", icon: "bi-person-badge-fill" },
                    { text: "Kebijakan Privasi", href: "/kebijakan/privasi", icon: "bi-shield-lock-fill" },
                    { text: "Kebijakan Layanan", href: "/kebijakan/layanan", icon: "bi-file-earmark-text-fill" },
                    { text: "404 Page", href: "/errors/404", icon: "bi-exclamation-triangle-fill" }
                  ].map((subItem, sIdx) => (
                    <Link 
                      key={sIdx} 
                      href={subItem.href} 
                      className="dropdown-item fw-semibold d-flex align-items-center custom-list-hover" 
                      style={{ 
                        fontSize: "13.5px", 
                        color: isDarkMode ? "#fff" : "#333",
                        padding: "10px 20px", 
                        gap: "12px"         
                      }}
                    >
                      <i className={`bi ${subItem.icon} fs-5`} style={{ color: themeGreen, flexShrink: 0 }}></i>
                      <span>{subItem.text}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

          </nav>
        </div>

        {/* ================= RIGHT: CONTROLS & HAMBURGER ================= */}
        <div className="d-flex align-items-center gap-2 gap-md-3">
          
          {/* SEARCH BOX */}
          <div className="position-relative d-none d-md-block">
            <i className="bi bi-search position-absolute top-50 start-0 translate-middle-y ms-3 text-muted" style={{ fontSize: "13px" }}></i>
            <input 
              type="text" 
              placeholder="Search" 
              className="form-control ps-5 pe-5"
              style={{
                width: "220px", 
                fontSize: "13px",
                paddingTop: "6px",
                paddingBottom: "6px",
                borderRadius: "8px",
                backgroundColor: isDarkMode ? "#1a1a1a" : "#ffffff", 
                borderColor: isDarkMode ? "#333333" : "#e5e7eb",
                fontWeight: 500,
                color: isDarkMode ? "#ffffff" : "#000000"
              }}
            />
            <span 
              className="position-absolute end-0 top-50 translate-middle-y me-2 badge border fw-normal" 
              style={{ 
                fontSize: "9px", 
                padding: "3px 5px", 
                borderRadius: "4px",
                backgroundColor: isDarkMode ? "#2d2d2d" : "#f3f4f6",
                borderColor: isDarkMode ? "#444444" : "#e5e7eb",
                color: isDarkMode ? "#9ca3af" : "#6b7280"
              }}
            >
              ⌘K
            </span>
          </div>

          {/* SAKLAR LIGHT/DARK MODE */}
          <button 
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="btn d-flex align-items-center justify-content-center p-0 text-solid-fix"
            style={{
              width: "34px",
              height: "34px",
              borderRadius: "50%",
              backgroundColor: isDarkMode ? "#1e1e1e" : "#fff5f5",
              color: isDarkMode ? "#00d2ff" : "#ff4d4d",
              border: `1px solid ${isDarkMode ? "#00d2ff" : "#ff4d4d"}`
            }}
          >
            <i className={isDarkMode ? "bi bi-moon-fill" : "bi bi-sun-fill"} style={{ fontSize: "14px" }}></i>
          </button>

          {/* ICON IG */}
          <Link 
            href="https://www.instagram.com/kkn_panyindangan26?igsh=bmM1ZjVlaGh0a2Zs" 
            target="_blank"
            className="d-none d-md-flex align-items-center justify-content-center text-decoration-none pure-ig-icon"
            style={{ fontSize: "20px", transition: "transform 0.2s ease" }}
          >
            <i className="bi bi-instagram"></i>
          </Link>

          {/* BUTTON GET STARTED */}
          <Link 
            href="/kontak" 
            className="btn d-none d-sm-flex align-items-center text-white fw-bold shadow-sm border-0 text-solid-fix"
            style={{ 
              backgroundColor: "#FFA500", 
              borderRadius: "8px", 
              fontSize: "13px", 
              padding: "7px 18px",
              transition: "opacity 0.2s" 
            }}
            onMouseOver={(e) => (e.currentTarget.style.opacity = "0.9")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            Get Started <i className="bi bi-arrow-right-short fs-5 ms-0.5"></i>
          </Link>

          {/* HAMBURGER BUTTON MOBILE */}
          <button 
            className="btn d-xl-none p-2 text-reset d-flex align-items-center justify-content-center ms-1 text-solid-fix"
            style={{ 
              fontSize: "18px",
              borderRadius: "8px",
              border: `1px solid ${isDarkMode ? "#333333" : "#e5e7eb"}`,
              backgroundColor: isDarkMode ? "#1a1a1a" : "#f9fafb",
              height: "34px",
              width: "34px"
            }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <i className={isMobileMenuOpen ? "bi bi-x-lg" : "bi bi-list"}></i>
          </button>

        </div>
      </div>

      {/* ================= PANEL MOBILE MENU (SLIDE DOWN HALUS & 100% SOLID) ================= */}
      <div 
        className="position-absolute w-100 start-0 border-top shadow-lg d-xl-none"
        style={{
          top: "100%",
          backgroundColor: isDarkMode ? "#0a0a0a" : "#ffffff", 
          borderColor: isDarkMode ? "#222" : "#e5e7eb",
          zIndex: 999,
          maxHeight: isMobileMenuOpen ? "80vh" : "0px",
          opacity: isMobileMenuOpen ? 1 : 0,
          overflowY: isMobileMenuOpen ? "auto" : "hidden",
          transition: "max-height 0.3s ease-in-out, opacity 0.2s ease-in-out, padding 0.3s ease-in-out",
          paddingTop: isMobileMenuOpen ? "12px" : "0px",
          paddingBottom: isMobileMenuOpen ? "12px" : "0px"
        }}
      >
        <div className="container d-flex flex-column gap-1">
          {/* 1. Beranda Mobile */}
          <Link 
            href="/" 
            className="fw-bold text-decoration-none px-3 rounded-3 mb-1 d-flex align-items-center gap-2 custom-mobile-text" 
            style={{ fontSize: "14px", color: isDarkMode ? "#ffffff" : "#212529", padding: "10px 0" }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <i className="bi bi-house-door-fill" style={{ color: themeGreen }}></i> Beranda
          </Link>
          
          {/* 2. Project Baru Mobile */}
          <div className="mb-1">
            <button 
              onClick={() => setActiveDropdown(activeDropdown === "project" ? null : "project")}
              className="btn w-100 text-start fw-bold px-3 rounded-3 border-0 d-flex justify-content-between align-items-center custom-mobile-text"
              style={{ fontSize: "14px", color: isDarkMode ? "#ffffff" : "#212529", padding: "10px 0" }}
            >
              <span className="d-flex align-items-center gap-2">
                <i className="bi bi-kanban-fill" style={{ color: themeGreen }}></i> Project Baru
              </span>
              <i className={`bi bi-chevron-${activeDropdown === "project" ? "up" : "down"}`} style={{ fontSize: "11px" }}></i>
            </button>
            {activeDropdown === "project" && (
              <div 
                className="ps-3 py-2 d-flex flex-column gap-2 rounded-3 mt-1 mx-2"
                style={{ backgroundColor: isDarkMode ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.03)" }}
              >
                {[
                  { text: "Program Kerja", desc: "Program Kerja KKN.", icon: "bi-rocket-takeoff-fill", gradient: "linear-gradient(135deg, #4ade80, #22c55e)", href: "/proker" },
                  { text: "Kegiatan", desc: "Kegiatan KKN.", icon: "bi-calendar-event-fill", gradient: "linear-gradient(135deg, #60a5fa, #3b82f6)", href: "/kegiatan" },
                  { text: "Blog", desc: "Blog KKN.", icon: "bi-journal-richtext", gradient: "linear-gradient(135deg, #fb923c, #f97316)", href: "/blog" }
                ].map((item, index) => (
                  <Link 
                    key={index} 
                    href={item.href} 
                    className="text-decoration-none py-2 px-2 rounded-3 fw-semibold d-flex align-items-start text-hover-green" 
                    style={{ fontSize: "13px", color: isDarkMode ? "#e2e8f0" : "#4b5563", gap: "12px" }} 
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {/* Kotak Ikon Warna Gradient Solid iOS Style Sama Seperti Tampilan Desktop */}
                    <div 
                      className="rounded-3 d-flex align-items-center justify-content-center text-white shadow-sm" 
                      style={{ 
                        width: "40px", 
                        height: "40px", 
                        background: item.gradient,
                        flexShrink: 0 
                      }}
                    >
                      <i className={`bi ${item.icon} fs-5`}></i>
                    </div>
                    <div>
                      <h6 className="fw-bold mb-0.5" style={{ fontSize: "13.5px", letterSpacing: "-0.1px", color: isDarkMode ? "#ffffff" : "#212529" }}>{item.text}</h6>
                      <p className="text-muted mb-0" style={{ fontSize: "11.5px", lineHeight: "1.35" }}>{item.desc}</p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* 3. Informasi Mobile */}
          <div className="mb-2">
            <button 
              onClick={() => setActiveDropdown(activeDropdown === "informasi" ? null : "informasi")}
              className="btn w-100 text-start fw-bold px-3 rounded-3 border-0 d-flex justify-content-between align-items-center custom-mobile-text"
              style={{ fontSize: "14px", color: isDarkMode ? "#ffffff" : "#212529", padding: "10px 0" }}
            >
              <span className="d-flex align-items-center gap-2">
                <i className="bi bi-info-circle-fill" style={{ color: themeGreen }}></i> Informasi
              </span>
              <i className={`bi bi-chevron-${activeDropdown === "informasi" ? "up" : "down"}`} style={{ fontSize: "11px" }}></i>
            </button>
            {activeDropdown === "informasi" && (
              <div 
                className="ps-3 py-1 d-flex flex-column gap-1 rounded-3 mt-1 mx-2"
                style={{ backgroundColor: isDarkMode ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.03)" }}
              >
                {[
                  { text: "Tentang", icon: "bi-info-circle-fill", href: "/tentang" },
                  { text: "Profile Tim", icon: "bi-person-badge-fill", href: "/tim" },
                  { text: "Kebijakan Privasi", icon: "bi-shield-lock-fill", href: "/kebijakan/privasi" },
                  { text: "Kebijakan Layanan", icon: "bi-file-earmark-text-fill", href: "/kebijakan/layanan" },
                  { text: "404 Page", icon: "bi-exclamation-triangle-fill", href: "/errors/404" }
                ].map((item, index) => (
                  <Link key={index} href={item.href} className="text-decoration-none py-2 px-3 rounded-2 fw-semibold d-flex align-items-center gap-2 text-hover-green" style={{ fontSize: "13px", color: isDarkMode ? "#e2e8f0" : "#4b5563" }} onClick={() => setIsMobileMenuOpen(false)}>
                    <i className={`bi ${item.icon}`} style={{ fontSize: "14px", color: themeGreen }}></i> {item.text}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* CUSTOM INJEKSI CSS */}
      <style jsx global>{`
        .brand-title {
          font-size: 14px;
        }
        @media (max-width: 576px) {
          .brand-title {
            font-size: 11.5px !important;
          }
        }

        .text-solid-fix {
          opacity: 1 !important;
        }

        .pure-ig-icon i {
          background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .pure-ig-icon:hover {
          transform: scale(1.15);
        }

        /* Hover Effect Dropdown */
        .custom-list-hover:hover {
          color: ${themeGreen} !important;
          background-color: ${activeBg} !important;
          transition: all 0.2s ease;
        }

        .custom-dropdown-hover:hover {
          background-color: ${activeBg} !important;
          border-radius: 8px;
          transition: background-color 0.2s ease;
        }

        .nav-hover-green:hover {
          color: ${themeGreen} !important;
          background-color: ${activeBg} !important;
          transition: all 0.2s ease;
        }

        .custom-mobile-text:hover {
          background-color: ${activeBg} !important;
          color: ${themeGreen} !important;
          padding-left: 10px !important;
          transition: all 0.2s ease;
        }

        .text-hover-green:hover {
          color: ${themeGreen} !important;
          background-color: ${activeBg} !important;
          padding-left: 16px !important;
          transition: all 0.2s ease;
        }

        @media (min-width: 1200px) {
          /* Arrow Pointer untuk Dropdown Informasi */
          .info-bubble::before {
            content: '';
            position: absolute;
            top: -6px;
            left: 42px;
            width: 12px;
            height: 12px;
            background-color: ${dropdownBg};
            border-left: 1px solid ${dropdownBorder};
            border-top: 1px solid ${dropdownBorder};
            transform: rotate(45deg);
            z-index: 1001;
          }

          /* Arrow Pointer pas di bawah tulisan Project Baru */
          .project-bubble::before {
            content: '';
            position: absolute;
            top: -6px;
            left: 64px; 
            width: 12px;
            height: 12px;
            background-color: ${dropdownBg};
            border-left: 1px solid ${dropdownBorder};
            border-top: 1px solid ${dropdownBorder};
            transform: rotate(45deg);
            z-index: 1001;
          }
        }
      `}</style>
    </header>
  );
}