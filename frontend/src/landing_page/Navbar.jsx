import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {

  const navLinks = [
    { name: "Signup", path: "/signup" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Pricing", path: "/pricing" },
    { name: "Support", path: "/support" },
  ];

  return (

    <nav className="navbar navbar-expand-lg border-bottom sticky-top" style={{ backgroundColor: "#fff" }}>
      <div className="container p-2 d-flex align-items-center justify-content-between w-100">

        <Link className="navbar-brand" to="/">
          <img src="media/logo.svg" alt="Logo" style={{ width: "155px" }} />
        </Link>

        <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

            {navLinks.map((link) => (
              <li className="nav-item" key={link.path}>
                <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to={link.path}>
                  {link.name}
                </NavLink>
              </li>
            ))}

          </ul>
        </div>
      </div>
    </nav>

  )
}

export default Navbar

