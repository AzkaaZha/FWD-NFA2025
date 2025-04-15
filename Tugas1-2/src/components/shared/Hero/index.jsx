export default function Hero() {
  return (
    <div className="container my-5">
      <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-4 shadow-lg" style={{ backgroundColor: "#FFF8E1" }}>
        <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
          <h1 className="display-4 fw-bold lh-1" style={{ color: "#4E342E" }}>
            Nikmati Cita Rasa Nusantara dalam Setiap Tegukan
          </h1>
          <p className="lead text-dark">
            Kopi spesial dari biji pilihan lokal Indonesia—diproses dengan cinta dan disajikan dengan sepenuh hati.
          </p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
            <button
              type="button"
              className="btn btn-warning btn-lg px-4 me-md-2 fw-semibold text-dark"
            >
              Pesan Sekarang
            </button>
            <button
              type="button"
              className="btn btn-outline-dark btn-lg px-4"
            >
              Lihat Menu
            </button>
          </div>
        </div>
        <div className="col-lg-4 offset-lg-1 p-2 overflow-hidden shadow-sm">
          <img
            className="rounded-4"
            src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
            alt="Kopi Nusantara"
            width="100%"
          />
        </div>
      </div>
    </div>
  );
}
