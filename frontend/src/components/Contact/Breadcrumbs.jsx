import React from "react";
import { Link } from "react-router-dom";

const Breadcrumbs = () => (
  <div className="breadcrumbs text-sm">
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/contato">Contato</Link>
      </li>
    </ul>
  </div>
);

export default Breadcrumbs;
