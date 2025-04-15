import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";

export default function Kontak() {
  return (
    <>
      <Header />
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-8 col-md-10 mx-auto">
            <h1 className="fw-bold" style={{ color: "#4E342E" }}>Kontak Kami</h1>
            <p className="lead text-muted">
              Punya pertanyaan atau masukan? Hubungi kami lewat form atau sosial media di bawah.
            </p>
          </div>
        </div>
      </section>

      <div className="container pb-5">
        <div className="row">
          <div className="col-md-6">
            <h4 className="mb-4">Hubungi Kami</h4>
            <form>
              <div className="mb-3">
                <label className="form-label">Nama</label>
                <input type="text" className="form-control" placeholder="Nama lengkap" />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" placeholder="Alamat email" />
              </div>
              <div className="mb-3">
                <label className="form-label">Pesan</label>
                <textarea className="form-control" rows="4" placeholder="Tulis pesan kamu di sini..." />
              </div>
              <button type="submit" className="btn btn-warning fw-semibold text-dark">Kirim</button>
            </form>
          </div>

          <div className="col-md-6">
            <h4 className="mb-4">Informasi Toko</h4>
            <p><strong>Alamat:</strong> Jl. Kopi Nusantara No. 99, Jakarta</p>
            <p><strong>Telepon:</strong> +62 812-3456-7890</p>
            <p><strong>Email:</strong> info@nusakopi.id</p>
            <p><strong>Jam Operasional:</strong> 08.00 - 22.00 (Setiap Hari)</p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
