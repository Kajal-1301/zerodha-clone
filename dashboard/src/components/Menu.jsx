import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";

const links = [
  { name: "Dashboard", path: "/" },
  { name: "Orders", path: "/orders" },
  { name: "Holdings", path: "/holdings" },
  { name: "Positions", path: "/positions" },
  { name: "Funds", path: "/funds" }
];

const Menu = () => {

  const [user, setUser] = useState(null);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {

    const checkAuth = async () => {
      try {

        const response = await axios.get("http://localhost:3000/check-auth",
          {
            withCredentials: true
          }
        );

        setUser(response.data.user);

      } catch (error) {

        console.log("Not logged in");

        window.location.href = "http://localhost:5173/login";
      }
    };

    checkAuth();

  }, []);

  const handleLogout = async () => {

    try {

      await axios.post("http://localhost:3000/logout", {},
        {
          withCredentials: true
        }
      );

      window.location.href = "http://localhost:5173/login";

    } catch (error) {
      console.log("Logout error:", error);
    }
  };

  return (
    <div className="menu-container">

      <img src="logo.png" className="logo" />

      <button
        className="mobile-menu-btn"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
      </button>

      <div className={`menus ${isMobileMenuOpen ? "mobile-open" : ""}`}>

        <ul>
          {links.map((link) => (
            <li key={link.path}>

              <NavLink
                to={link.path}
                end={link.path === "/"}
                style={{ textDecoration: "none" }}
              >

                {({ isActive }) => (
                  <p className={isActive ? "menu selected" : "menu"}>
                    {link.name}
                  </p>
                )}

              </NavLink>

            </li>
          ))}
        </ul>

        <hr className="menu-divider" />

          {/*---------- Profile dropdown  ------------*/}

        <div
          className="profile"
          onClick={() =>
            setIsProfileDropdownOpen(!isProfileDropdownOpen)
          }
        >
          <div className="avatar">
            {user?.name?.charAt(0).toUpperCase()}
          </div>

          {isProfileDropdownOpen && (
            <div className="profile-dropdown">

              <div className="profile-info">
                <div className="dropdown-avatar">
                  {user?.name?.charAt(0).toUpperCase()}
                </div>

                <div>
                  <p className="profile-name">{user?.name}</p>
                  <p className="profile-email">{user?.email}</p>
                </div>
              </div>

              <div className="dropdown-divider"></div>

              <button
                className="logout-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  handleLogout();
                }}
              >
                Logout
              </button>

            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Menu;