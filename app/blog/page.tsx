export default function BlogPage() {
  return (
    <div style={{ paddingTop: "85px", minHeight: "80vh", fontFamily: "'Nunito', sans-serif" }}>
      <div className="container py-5 text-center">
        <div className="p-5 bg-body-tertiary rounded-3 shadow-sm">
          <i className="bi bi-journal-richtext text-warning" style={{ fontSize: "50px" }}></i>
          <h1 className="fw-black mt-3 text-warning">Blog & Artikel</h1>
          <p className="lead text-muted mx-auto mt-2" style={{ maxWidth: "600px" }}>
            Halaman ini nantinya akan berisi artikel, berita terkini, dan catatan cerita menarik seputar pengabdian masyarakat.
          </p>
        </div>
      </div>
    </div>
  );
}