import React from "react";
import { FaGlobe } from "react-icons/fa";
import MountainData from "../mountains.json";

function Header() {
  const mountainArray = MountainData.mountains;

  return (
    <div>
      <header className="head">
        <FaGlobe className="icon" />
        <h1>My Travel Journal.</h1>
      </header>
      <div className="Container bg-green-300">
        {mountainArray.map((mountain, index) => (
          <div className="mountain-card" key={index}>
            <img src={mountain.image_url} alt={mountain.name} />
            <h2>{mountain.name}</h2>
            <p><strong>Location: </strong>{mountain.location}</p>
            <p>{mountain.description}</p>
            <small>{mountain.date_of_first_ascent}</small>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Header;