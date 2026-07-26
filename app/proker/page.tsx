export default function ProkerPage() {
    return (
      <div style={{ paddingTop: "85px", minHeight: "80vh", fontFamily: "'Nunito', sans-serif" }}>
        <div className="container py-5 text-center">
          <div className="p-5 bg-body-tertiary rounded-3 shadow-sm">
            <i className="bi bi-rocket-takeoff-fill text-success" style={{ fontSize: "50px" }}></i>
            <h1 className="fw-black mt-3 text-success">Program Kerja KKN</h1>
            <p className="lead text-muted mx-auto mt-2" style={{ maxWidth: "600px" }}>
              Halaman ini nantinya akan berisi daftar seluruh program kerja utama dan tambahan yang dijalankan oleh Tim KKN di Desa Panyindangan.
            </p>
          </div>
        </div>
      </div>
    );
  }