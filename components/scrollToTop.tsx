"use client";

import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Deteksi scroll buat nampilin/sembunyiin tombol
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Fungsi buat skrul ke paling atas
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <>
      <button
        onClick={scrollToTop}
        className="btn position-fixed bottom-0 end-0 m-4 d-flex align-items-center justify-content-center shadow-lg back-to-top-btn"
        style={{
          zIndex: 9999,
          width: "42px",
          height: "42px",
          borderRadius: "8px", // Bentuk kotak presisi
          backgroundColor: "#22c55e", // Nyaru sama tema hijau navbar lu
          color: "#ffffff",
          border: "none",
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <i className="bi bi-arrow-up-short fs-4"></i>
      </button>

      {/* Efek mengembang (hover animation) */}
      <style jsx global>{`
        .back-to-top-btn:hover {
          background-color: #16a34a !important;
          transform: translateY(-5px) scale(1.08);
        }
        .back-to-top-btn:active {
          transform: scale(0.95);
        }
      `}</style>
    </>
  );
}