"use client";

import Link from "next/link";

export default function KebijakanPrivasi() {
  return (
    <main 
      className="min-vh-100 d-flex flex-column"
      style={{ 
        backgroundColor: "var(--bs-body-bg)",
        color: "var(--bs-body-color)",
        paddingTop: "100px",
        paddingBottom: "80px",
        fontFamily: "'Nunito', sans-serif"
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 col-xl-8 animate-fade-in-up">
            
            {/* ================= NAVIGASI BREADCRUMB (POJOK KIRI) ================= */}
            <div className="d-flex flex-wrap align-items-center gap-2 mb-5" style={{ fontSize: "15px", fontWeight: "600" }}>
              <Link href="/" className="text-decoration-none text-muted nav-link-hover">
                <i className="bi bi-house-door-fill me-1"></i> Beranda
              </Link>
              <span className="text-muted">/</span>
              <Link href="/kebijakan/layanan" className="text-decoration-none text-muted nav-link-hover">
                <i className="bi bi-file-earmark-text-fill me-1"></i> Kebijakan Layanan
              </Link>
            </div>

            {/* ================= HEADER KONTEN ================= */}
            <div className="mb-5">
              <div 
                className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3 shadow-sm"
                style={{ 
                  width: "60px", 
                  height: "60px", 
                  background: "linear-gradient(135deg, #4ade80, #22c55e)",
                  color: "white"
                }}
              >
                <i className="bi bi-shield-lock-fill fs-3"></i>
              </div>
              <h1 className="fw-bold mb-2" style={{ letterSpacing: "-0.5px", fontSize: "2.5rem" }}>
                Kebijakan Privasi
              </h1>
              <p className="text-muted">Terakhir diperbarui: 26 Juli 2026</p>
            </div>

            {/* ================= ISI KONTEN (MENYATU DENGAN BACKGROUND) ================= */}
            <div className="content-text text-start">
              <p className="mb-4 fs-5" style={{ lineHeight: "1.8" }}>
                Selamat datang di platform KKN Desa Panyindangan. Kami sangat menghargai privasi Anda dan berkomitmen untuk melindungi data pribadi yang Anda bagikan kepada kami. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi Anda.
              </p>

              <h4 className="fw-bold mt-5 mb-3 d-flex align-items-center gap-2 text-green">
                <i className="bi bi-1-circle-fill"></i> Informasi yang Kami Kumpulkan
              </h4>
              <p style={{ lineHeight: "1.8", fontSize: "1.1rem" }}>
                Kami mengumpulkan informasi yang Anda berikan secara langsung saat berinteraksi dengan website kami, seperti:
              </p>
              <ul style={{ lineHeight: "1.8", fontSize: "1.1rem" }} className="text-muted mb-4">
                <li>Nama, alamat email, dan nomor telepon saat mengisi formulir kontak.</li>
                <li>Data analitik anonim terkait penggunaan website (seperti halaman yang dikunjungi dan durasi kunjungan) untuk meningkatkan performa situs.</li>
              </ul>

              <h4 className="fw-bold mt-5 mb-3 d-flex align-items-center gap-2 text-green">
                <i className="bi bi-2-circle-fill"></i> Penggunaan Informasi
              </h4>
              <p style={{ lineHeight: "1.8", fontSize: "1.1rem" }}>
                Informasi yang kami kumpulkan digunakan semata-mata untuk:
              </p>
              <ul style={{ lineHeight: "1.8", fontSize: "1.1rem" }} className="text-muted mb-4">
                <li>Memberikan tanggapan atas pertanyaan atau masukan yang Anda kirimkan.</li>
                <li>Meningkatkan pengalaman pengguna (UX) dan kualitas konten di website KKN kami.</li>
                <li>Keperluan dokumentasi dan pelaporan internal program kerja KKN.</li>
              </ul>

              <h4 className="fw-bold mt-5 mb-3 d-flex align-items-center gap-2 text-green">
                <i className="bi bi-3-circle-fill"></i> Keamanan Data
              </h4>
              <p className="text-muted mb-4" style={{ lineHeight: "1.8", fontSize: "1.1rem" }}>
                Kami menerapkan langkah-langkah keamanan teknis yang wajar untuk melindungi informasi Anda dari akses yang tidak sah, perubahan, pengungkapan, atau penghancuran. Namun, perlu diingat bahwa tidak ada transmisi data melalui internet yang 100% aman.
              </p>

              <h4 className="fw-bold mt-5 mb-3 d-flex align-items-center gap-2 text-green">
                <i className="bi bi-4-circle-fill"></i> Berbagi Informasi
              </h4>
              <p className="text-muted mb-4" style={{ lineHeight: "1.8", fontSize: "1.1rem" }}>
                Kami <strong>tidak akan pernah</strong> menjual, menyewakan, atau membagikan informasi pribadi Anda kepada pihak ketiga untuk tujuan pemasaran. Data hanya dibagikan jika diwajibkan oleh hukum yang berlaku di Indonesia.
              </p>

              {/* Box Informasi Kontak */}
              <div className="alert mt-5 border-0 rounded-4 p-4 d-flex align-items-start gap-3 alert-custom">
                <i className="bi bi-info-circle-fill fs-4 text-green flex-shrink-0"></i>
                <div>
                  <h6 className="fw-bold mb-1 fs-5">Hubungi Kami</h6>
                  <p className="mb-0 text-muted" style={{ fontSize: "1.05rem", lineHeight: "1.6" }}>
                    Jika Anda memiliki pertanyaan mengenai Kebijakan Privasi ini atau pengelolaan data Anda, silakan hubungi tim kami melalui menu <Link href="/kontak" className="text-decoration-none fw-bold text-green nav-link-hover">Kontak</Link> atau melalui media sosial resmi kami.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* ================= INJEKSI CSS ================= */}
      <style jsx global>{`
        /* Tema Warna */
        :root {
          --theme-green: #22c55e;
        }

        .text-green {
          color: var(--theme-green) !important;
        }

        /* Hover efek untuk link navigasi di pojok kiri */
        .nav-link-hover {
          transition: color 0.2s ease-in-out;
        }
        .nav-link-hover:hover {
          color: var(--theme-green) !important;
        }

        /* Alert Box */
        [data-bs-theme="light"] .alert-custom {
          background-color: #f0fdf4;
          border: 1px solid #bbf7d0 !important;
        }
        [data-bs-theme="dark"] .alert-custom {
          background-color: rgba(34, 197, 94, 0.1);
          border: 1px solid rgba(34, 197, 94, 0.2) !important;
        }

        /* Animasi Masuk (Fade In Up) */
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
          transform: translateY(20px);
        }

        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </main>
  );
}