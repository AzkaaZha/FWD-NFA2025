import Header from "../components/shared/Header";        
import Footer from "../components/shared/Footer";

export default function Team() {
  return (
    <>
      <Header />
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-8 col-md-10 mx-auto">
            <h1 className="fw-bold" style={{ color: "#4E342E" }}>Tim Kami</h1>
            <p className="lead text-muted">
              Di balik setiap secangkir NusaKopi yang nikmat, ada tim hebat yang berdedikasi. Kenalan yuk!
            </p>
          </div>
        </div>
      </section>

      <div className="container py-5">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
          {[
            { name: "Raka", role: "Barista Utama", img: "https://randomuser.me/api/portraits/men/32.jpg" },
            { name: "Ayu", role: "Customer Service", img: "https://randomuser.me/api/portraits/women/44.jpg" },
            { name: "Dito", role: "Manajer Operasional", img: "https://randomuser.me/api/portraits/men/45.jpg" },
          ].map((person, index) => (
            <div key={index} className="col text-center">
              <img src={person.img} alt={person.name} className="rounded-circle mb-3" width="120" height="120" />
              <h5 className="fw-bold">{person.name}</h5>
              <p className="text-muted">{person.role}</p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}
