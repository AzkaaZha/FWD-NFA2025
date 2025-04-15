import { Link } from "react-router";

function ProductCard({ title, description, time, image }) {
  return (
    <div className="col">
      <div className="card shadow-sm border-0 rounded-4">
        <img
          src={image}
          alt={title}
          className="card-img-top rounded-top-4"
          style={{ height: "225px", objectFit: "cover" }}
        />
        <div className="card-body">
          <h5 className="card-title fw-bold">{title}</h5>
          <p className="card-text text-muted" style={{ fontSize: "0.95rem" }}>
            {description}
          </p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button type="button" className="btn btn-sm btn-outline-primary">
                Lihat
              </button>
              <button type="button" className="btn btn-sm btn-outline-secondary">
                Edit
              </button>
            </div>
            <small className="text-body-secondary">{time}</small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProductList() {
  const products = [
    {
      title: "Espresso Original",
      description: "Kopi hitam pekat dengan aroma kuat, cocok untuk penyuka rasa pahit otentik.",
      time: "Baru ditambahkan",
      image: "https://kopikita.id/wp-content/uploads/2022/12/espresso-vs-expresso.jpg",
    },
    {
      title: "Cappuccino Creamy",
      description: "Campuran espresso, susu, dan foam lembut. Favorit sepanjang masa!",
      time: "15 menit lalu",
      image: "https://img-global.cpcdn.com/recipes/cd5c22d516044e91/1200x630cq70/photo.jpg",
    },
    {
      title: "Latte Vanilla",
      description: "Kombinasi lembut antara kopi dan susu dengan sentuhan vanilla manis.",
      time: "30 menit lalu",
      image: "https://images.ctfassets.net/v601h1fyjgba/7wGcWZgV7yaSLXrodALIuw/2496353e1ec8c39dd44adfb45e8335d3/Vanilla_Latte.jpg",
    },
    {
      title: "Mocca Delight",
      description: "Perpaduan kopi dan coklat, cocok untuk kamu yang suka manis dan creamy.",
      time: "1 jam lalu",
      image: "https://thumbs.dreamstime.com/b/warm-hazelnut-mocha-delight-winter-morning-340258525.jpg",
    },
    {
      title: "Kopi Tubruk",
      description: "Kopi khas Indonesia yang disajikan langsung tanpa filter.",
      time: "1 jam lalu",
      image: "https://d1r9hss9q19p18.cloudfront.net/uploads/2019/03/coffee-tubruk.jpg",
    },
    {
      title: "Cold Brew",
      description: "Minuman kopi dingin yang diseduh selama berjam-jam untuk rasa yang smooth.",
      time: "2 jam lalu",
      image: "https://lifesimplified.gorenje.com/wp-content/uploads/2024/06/gorenje-blog-refreshing_cold_brew_coffee.jpg",
    },
    {
      title: "Caramel Macchiato",
      description: "Campuran kopi, susu, dan karamel yang nikmat diseruput hangat atau dingin.",
      time: "3 jam lalu",
      image: "https://asset.kompas.com/crops/2Wm7sYaOmKcIoCuKP6wik4NkSbU=/11x0:3500x2326/1200x800/data/photo/2022/07/12/62cd7e1abdec1.jpg",
    },
    {
      title: "Americano",
      description: "Espresso yang dicampur air panas, untuk rasa lebih ringan tapi tetap strong.",
      time: "Hari ini",
      image: "https://www.nescafe.com/id/sites/default/files/2023-08/Kopi-Hitam-Americano-dan-Espresso%2C-Apa-Bedanya%2C-Ya_hero.jpg",
    },
    {
      title: "Kopi Susu Gula Aren",
      description: "Minuman kekinian favorit anak muda! Perpaduan kopi, susu, dan manis alami gula aren.",
      time: "Hari ini",
      image: "https://asset.kompas.com/crops/Cm2LnOmXwh94SSqps33fisGfjfI=/0x1:960x641/1200x800/data/photo/2020/04/07/5e8c708bb14e8.jpg",
    },
  ];

  return (
    <>
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-bold" style={{ color: "#4E342E" }}>Menu Andalan NusaKopi</h1>
            <p className="lead text-muted">
              Pilihan kopi terbaik kami, dibuat dengan biji pilihan dan rasa khas Nusantara. Temukan favoritmu di bawah ini.
            </p>
            <p>
              <Link to="/menu" className="btn btn-warning text-dark my-2 m-2 fw-semibold">
                Lihat Menu Lengkap
              </Link>
              <Link to="/kontak" className="btn btn-outline-secondary my-2 fw-semibold">
                Hubungi Kami
              </Link>
            </p>
          </div>
        </div>
      </section>

      <div className="album py-5" style={{ backgroundColor: "#FFF8E1" }}>
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
            {products.map((product, index) => (
              <ProductCard
                key={index}
                title={product.title}
                description={product.description}
                time={product.time}
                image={product.image}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
