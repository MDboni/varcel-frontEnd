import { Link, NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const AppNavbar = () => {
  const navigate = useNavigate();

  // Login state
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check token in localStorage
    const token = localStorage.getItem("token");
    const photo = localStorage.getItem("photo"); 
    const email = localStorage.getItem("email"); 
    if (token) {
      setUser({ token, photo, email });
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("photo");
    localStorage.removeItem("email");
    setUser(null);
    navigate("/signIn");
  };

  const navLinks = (
  <>
    <li>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "text-indigo-600 font-semibold" : "hover:text-indigo-500"
        }
      >
        Home
      </NavLink>
    </li>

    <li>
      <NavLink
        to="/courses"
        className={({ isActive }) =>
          isActive ? "text-indigo-600 font-semibold" : "hover:text-indigo-500"
        }
      >
        Courses
      </NavLink>
    </li>

    <li>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? "text-indigo-600 font-semibold" : "hover:text-indigo-500"
        }
      >
        About
      </NavLink>
    </li>

    <li>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive ? "text-indigo-600 font-semibold" : "hover:text-indigo-500"
        }
      >
        Contact
      </NavLink>
    </li>

    {/* Show Dashboard link only if user is logged in */}
    {user && (
      <li>
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive ? "text-indigo-600 font-semibold" : "hover:text-indigo-500"
          }
        >
          Dashboard
        </NavLink>
      </li>
    )}
  </>
);


  return (
    <div className="navbar bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-50 px-6 lg:px-16">
      {/* Left: Logo */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </div>

          {/* Mobile Menu */}
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-white/90 backdrop-blur-md rounded-box w-52 shadow-lg p-2"
          >
            {navLinks}
          </ul>
        </div>

        <h2 className="font-extrabold text-2xl cursor-pointer">
          Course<span className="text-indigo-600">Master</span>
        </h2>
      </div>

      {/* Center: Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-2">{navLinks}</ul>
      </div>

      {/* Right: Login / Logout */}
      <div className="navbar-end flex items-center space-x-3">
        {user ? (
          <>
            {user.photo ? (
              <img
                src={user.photo}
                alt="Profile"
                className="w-10 h-10 rounded-full border-2 border-indigo-500"
              />
            ) : (
              <div className="w-10 h-10 rounded-full bg-indigo-500 text-white flex items-center justify-center font-bold">
                {user.email?.[0].toUpperCase()}
              </div>
            )}
            <button
              onClick={handleLogout}
              className="px-5 py-2 rounded-full bg-red-500 text-white font-semibold hover:bg-red-600 transition-all"
            >
              Logout
            </button>
          </>
        ) : (
          <Link
            to="/signIn"
            className="px-5 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold shadow-md hover:scale-105 transition-all"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default AppNavbar;
