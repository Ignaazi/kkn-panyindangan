// components/Footer.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer 
      id="footer" 
      // Tambahin class "custom-footer-bg" ke sini
      className="footer position-relative pt-5 pb-4 border-top-0 custom-footer-bg"
      style={{
        color: "#ffffff",
        fontFamily: "'Nunito', sans-serif"
      }}
    >
      <div className="container px-4 px-md-5 position-relative" style={{ zIndex: 1 }}>
        <div className="row gy-4 mb-4">
          
          {/* ================= KOLOM KIRI (LOGO & DESKRIPSI) ================= */}
          <div className="col-lg-5 col-md-12 pe-lg-5">
            <div className="d-flex align-items-center gap-3 mb-3">
              <div className="position-relative shadow-sm bg-white rounded-circle p-1" style={{ width: "65px", height: "65px" }}>
                <Image src="/assets/img/logoUbp.png" alt="Logo UBP" fill style={{ objectFit: "contain", padding: "4px" }} />
              </div>
              <div className="position-relative shadow-sm bg-white rounded-circle p-1" style={{ width: "65px", height: "65px" }}>
                <Image src="/assets/img/logoDesa1.png" alt="Logo Desa" fill style={{ objectFit: "contain", padding: "4px" }} />
              </div>
            </div>
            <h5 className="fw-bold mb-2 text-white">
              KKN Desa Panyindangan
            </h5>
            <p className="small mb-0" style={{ lineHeight: "1.6", color: "#d1e7dd" }}>
              Website resmi informasi dan dokumentasi pengabdian masyarakat Universitas Buana Perjuangan Karawang di Desa Panyindangan tahun 2026.
            </p>
          </div>

          {/* ================= KOLOM TENGAH (TAUTAN CEPAT) ================= */}
          <div className="col-lg-3 col-md-6">
            <h6 className="fw-bold mb-3 text-uppercase tracking-wider text-white" style={{ fontSize: "14px" }}>
              Tautan Cepat
            </h6>
            <ul className="list-unstyled d-flex flex-column gap-2 small">
              <li>
                <Link href="/" className="text-decoration-none footer-link-hover d-flex align-items-center gap-2" style={{ color: "#a3cfbb" }}>
                  <i className="bi bi-chevron-right" style={{ fontSize: "10px" }}></i> Beranda
                </Link>
              </li>
              <li>
                <Link href="/tim" className="text-decoration-none footer-link-hover d-flex align-items-center gap-2" style={{ color: "#a3cfbb" }}>
                  <i className="bi bi-chevron-right" style={{ fontSize: "10px" }}></i> Profil Tim
                </Link>
              </li>
              <li>
                <Link href="/informasi" className="text-decoration-none footer-link-hover d-flex align-items-center gap-2" style={{ color: "#a3cfbb" }}>
                  <i className="bi bi-chevron-right" style={{ fontSize: "10px" }}></i> Informasi
                </Link>
              </li>
            </ul>
          </div>

          {/* ================= KOLOM KANAN (KONTAK & SOSMED) ================= */}
          <div className="col-lg-4 col-md-6">
            <h6 className="fw-bold mb-3 text-uppercase tracking-wider text-white" style={{ fontSize: "14px" }}>
              Kontak Kami
            </h6>
            <p className="small mb-2 d-flex align-items-start gap-2" style={{ color: "#d1e7dd" }}>
              <i className="bi bi-geo-alt-fill mt-1" style={{ color: "#f9c152" }}></i>
              <span>Kantor Kepala Desa Panyindangan, Kabupaten Karawang, Jawa Barat</span>
            </p>
            <p className="small mb-2 d-flex align-items-center gap-2" style={{ color: "#d1e7dd" }}>
              <i className="bi bi-envelope-fill" style={{ color: "#f9c152" }}></i>
              <span>kknpanyindangan26@gmail.com</span>
            </p>
            <p className="small mb-0 d-flex align-items-center gap-2" style={{ color: "#d1e7dd" }}>
              <i className="bi bi-instagram" style={{ color: "#f9c152" }}></i>
              <span>@kkn_panyindangan26</span>
            </p>
          </div>

        </div>

        {/* ================= BAGIAN BAWAH (COPYRIGHT) ================= */}
        <div 
          className="text-center pt-4 mt-2" 
          style={{ borderTop: "1px solid rgba(255, 255, 255, 0.15)" }}
        >
          <p className="small mb-1" style={{ color: "#a3cfbb" }}>
            © <span>Copyright</span> <strong className="px-1 text-white">KKN Panyindangan 2026</strong> <span>All Rights Reserved</span>
          </p>
          <div className="small" style={{ color: "#81c784" }}>
            Designed by <Link href="https://bootstrapmade.com/" className="text-decoration-none fw-bold" style={{ color: "#f9c152" }}>BootstrapMade</Link> & Tim KKN
          </div>
        </div>
      </div>

      {/* CSS untuk Hover & Responsive Background */}
      <style jsx global>{`
        /* Default Background (Untuk Laptop/Desktop) */
        .custom-footer-bg {
          background-color: #0f1e14;
          background-image: linear-gradient(rgba(33, 56, 40, 0.7), rgba(15, 30, 20, 0.8)), url('/assets/img/bg-footer.jpg');
          background-size: 100% auto;
          background-position: center top;
          background-repeat: no-repeat;
        }

        /* Responsive Background (Khusus Layar HP / Mobile di bawah 768px) */
        @media (max-width: 767px) {
          .custom-footer-bg {
            /* Panggil gambar vertikal lu di sini */
            background-image: linear-gradient(rgba(33, 56, 40, 0.7), rgba(15, 30, 20, 0.8)), url('/assets/img/bg-footer-mobile.jpg');
            background-size: cover; /* Pakai cover biar full ngisi footer versi mobile */
            background-position: center center;
          }
        }

        /* Efek Hover Link */
        .footer-link-hover {
          transition: color 0.2s ease-in-out, transform 0.2s ease-in-out;
        }
        .footer-link-hover:hover {
          color: #f9c152 !important; 
          transform: translateX(4px);
        }
        .tracking-wider {
          letter-spacing: 0.05em;
        }
      `}</style>
    </footer>
  );
}