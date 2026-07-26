"use client";

import Link from "next/link";

export default function KebijakanLayanan() {
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
              <Link href="/kebijakan/privasi" className="text-decoration-none text-muted nav-link-hover">
                <i className="bi bi-shield-lock-fill me-1"></i> Kebijakan Privasi
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
                <i className="bi bi-file-earmark-text-fill fs-3"></i>
              </div>
              <h1 className="fw-bold mb-2" style={{ letterSpacing: "-0.5px", fontSize: "2.5rem" }}>
                Kebijakan Layanan
              </h1>
              <p className="text-muted">Terakhir diperbarui: 26 Juli 2026</p>
            </div>

            {/* ================= ISI KONTEN (MENYATU DENGAN BACKGROUND) ================= */}
            <div className="content-text text-start">
              <p className="mb-4 fs-5" style={{ lineHeight: "1.8" }}>
                Selamat datang di platform KKN Desa Panyindangan. Syarat dan ketentuan ini mengatur penggunaan Anda atas website dan layanan kami. Dengan mengakses situs ini, Anda dianggap telah membaca, memahami, dan menyetujui seluruh isi kebijakan layanan ini.
              </p>

              <h4 className="fw-bold mt-5 mb-3 d-flex align-items-center gap-2 text-green">
                <i className="bi bi-1-circle-fill"></i> Penggunaan Platform
              </h4>
              <p style={{ lineHeight: "1.8", fontSize: "1.1rem" }}>
                Pengguna diwajibkan untuk menggunakan platform ini dengan bijak dan sesuai dengan hukum yang berlaku. Anda dilarang keras untuk:
              </p>
              <ul style={{ lineHeight: "1.8", fontSize: "1.1rem" }} className="text-muted mb-4">
                <li>Melakukan tindakan yang dapat merusak, melumpuhkan, atau membebani server dan jaringan kami.</li>
                <li>Mencoba mengakses bagian dari website ini yang tidak diperuntukkan bagi publik secara tidak sah.</li>
                <li>Menyebarkan konten yang mengandung unsur SARA, hoaks, atau materi yang melanggar hukum.</li>
              </ul>

              <h4 className="fw-bold mt-5 mb-3 d-flex align-items-center gap-2 text-green">
                <i className="bi bi-2-circle-fill"></i> Hak Kekayaan Intelektual
              </h4>
              <p className="text-muted mb-4" style={{ lineHeight: "1.8", fontSize: "1.1rem" }}>
                Seluruh konten, desain, logo, teks, dan grafis yang ada di dalam website ini adalah hak milik Tim KKN Desa Panyindangan atau pihak pemberi lisensi kami. Anda tidak diperkenankan untuk menyalin, memodifikasi, atau mendistribusikan ulang karya tersebut tanpa izin tertulis dari kami.
              </p>

              <h4 className="fw-bold mt-5 mb-3 d-flex align-items-center gap-2 text-green">
                <i className="bi bi-3-circle-fill"></i> Batasan Tanggung Jawab
              </h4>
              <p className="text-muted mb-4" style={{ lineHeight: "1.8", fontSize: "1.1rem" }}>
                Informasi yang disediakan di website ini bertujuan untuk keperluan informasi umum terkait program kerja KKN. Kami berusaha memastikan keakuratan data, namun kami tidak bertanggung jawab atas kerugian langsung maupun tidak langsung yang timbul akibat penggunaan atau ketidakmampuan menggunakan layanan ini.
              </p>

              <h4 className="fw-bold mt-5 mb-3 d-flex align-items-center gap-2 text-green">
                <i className="bi bi-4-circle-fill"></i> Perubahan Ketentuan
              </h4>
              <p className="text-muted mb-4" style={{ lineHeight: "1.8", fontSize: "1.1rem" }}>
                Kami berhak untuk memperbarui atau mengubah Kebijakan Layanan ini sewaktu-waktu tanpa pemberitahuan sebelumnya. Perubahan akan langsung berlaku setelah dipublikasikan di halaman ini. Kami menyarankan Anda untuk mengecek halaman ini secara berkala.
              </p>

              {/* Box Informasi Kontak */}
              <div className="alert mt-5 border-0 rounded-4 p-4 d-flex align-items-start gap-3 alert-custom">
                <i className="bi bi-envelope-paper-fill fs-4 text-green flex-shrink-0"></i>
                <div>
                  <h6 className="fw-bold mb-1 fs-5">Butuh Bantuan?</h6>
                  <p className="mb-0 text-muted" style={{ fontSize: "1.05rem", lineHeight: "1.6" }}>
                    Jika ada kendala dalam menggunakan platform kami atau pertanyaan seputar Kebijakan Layanan ini, silakan sampaikan kepada kami melalui halaman <Link href="/kontak" className="text-decoration-none fw-bold text-green nav-link-hover">Kontak</Link>.
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