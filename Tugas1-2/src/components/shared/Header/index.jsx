import { NavLink, Link } from "react-router";

export default function Header() {
  return (
    <header
      className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom px-3"
      style={{ backgroundColor: "#4E342E" }}
    >
      <div className="col-md-3 mb-2 mb-md-0 d-flex align-items-center">
        <Link
          to="/"
          className="d-inline-flex align-items-center text-decoration-none"
        >
          <i className="fa-solid fa-mug-hot fa-xl" style={{ color: "#FFD54F" }}></i>
          <span className="ms-2 fs-4 fw-bold" style={{ color: "#FFF8E1" }}>
            NusaKopi
          </span>
        </Link>
      </div>

      <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        {[
          { to: "/", label: "Beranda" },
          { to: "/menu", label: "Menu" },
          { to: "/team", label: "Team" },
          { to: "/kontak", label: "Kontak" },
        ].map((item, idx) => (
          <li key={idx}>
            <NavLink
              to={item.to}
              className={({ isActive }) =>
                `nav-link px-3 fw-semibold ${
                  isActive ? "text-warning border-bottom border-warning" : "text-white"
                }`
              }
              style={{ transition: "0.3s" }}
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>

      <div className="col-md-3 text-end">
        <Link to="/login">
          <button type="button" className="btn btn-outline-light me-2">
            Login
          </button>
        </Link>
        <Link to="/register">
          <button type="button" className="btn btn-warning text-dark fw-semibold">
            Daftar
          </button>
        </Link>
      </div>
    </header>
  );
}
