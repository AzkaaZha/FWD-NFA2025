import { Link } from "react-router";

export default function Footer() {
  return (
    <footer
      className="mt-auto py-4"
      style={{ backgroundColor: "#4E342E", color: "#FFF8E1" }}
    >
      <div className="container">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
            <Link to="/" className="nav-link px-3 text-warning fw-semibold">
              Beranda
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/menu" className="nav-link px-3 text-warning fw-semibold">
              Menu
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/team" className="nav-link px-3 text-warning fw-semibold">
              Tim Kami
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/kontak" className="nav-link px-3 text-warning fw-semibold">
              Kontak
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/tentang" className="nav-link px-3 text-warning fw-semibold">
              Tentang Kami
            </Link>
          </li>
        </ul>
        <p className="text-center" style={{ color: "#D7CCC8" }}>
          &copy; 2025 NusaKopi · zharariazka
        </p>
      </div>
    </footer>
  );
}
