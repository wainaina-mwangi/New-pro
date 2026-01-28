import React from "react";

import { FaGlobe } from "react-icons/fa";

function Header() {
  return (
    <header className="head">
      <FaGlobe className="icon" />
      <h1>My Travel Journal .</h1>
    </header>
  );
}

export default Header;
