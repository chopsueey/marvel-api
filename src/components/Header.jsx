import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import svg from "../images/marvel-comics-logo.svg";
import Footer from "./Footer";

export default function Header() {
  return (
    <header className="container d-flex flex-column justify-content-center">
      <div className="text-center my-4">
        <img
          className="col-8 col-md-6 col-lg-4 col-xl-3"
          src={svg}
          alt="marvel-comics-logo"
        />
      </div>
      <nav style={{ borderBottom: "1px solid #ec1d24" }}>
        <ul className="d-flex justify-content-center p-0 list-unstyled">
          <li>
            <Link
              to="/"
              className="nav-links"
            >
              home
            </Link>
          </li>
          <li>
            <Link className="nav-links" to="/favourites">
              favourites
            </Link>
          </li>
          <li>
            <Link className="nav-links" to="/random">
              random
            </Link>
          </li>
          {/* <li>
            <Link className="nav-links" to="/about">
              about
            </Link>
          </li> */}
        </ul>
      </nav>
      <Outlet />
      <Footer />
    </header>
  );
}
