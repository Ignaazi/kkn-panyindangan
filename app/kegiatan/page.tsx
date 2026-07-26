export default function KegiatanPage() {
    return (
      <div style={{ paddingTop: "85px", minHeight: "80vh", fontFamily: "'Nunito', sans-serif" }}>
        <div className="container py-5 text-center">
          <div className="p-5 bg-body-tertiary rounded-3 shadow-sm">
            <i className="bi bi-calendar-event-fill text-primary" style={{ fontSize: "50px" }}></i>
            <h1 className="fw-black mt-3 text-primary">Kegiatan KKN</h1>
            <p className="lead text-muted mx-auto mt-2" style={{ maxWidth: "600px" }}>
              Halaman ini nantinya akan menampilkan timeline dan dokumentasi seru dari setiap kegiatan harian mahasiswa KKN.
            </p>
          </div>
        </div>
      </div>
    );
  }