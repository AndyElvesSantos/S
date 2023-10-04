import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const Topo = () => (
  <header>
    <div className="limitar-secao topo">
      <figure>
        <img src="assets/logo.png"></img>
      </figure>
      <nav>
        <Link className="link-topo" to="/">
          Home
        </Link>
        <Link className="link-topo" to="/sabores">
          Sabores
        </Link>
        <Link className="link-topo" to="/sobre">
          Sobre
        </Link>
      </nav>
    </div>
  </header>
);
export default Topo;
