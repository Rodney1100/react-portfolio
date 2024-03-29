import React, {useState} from "react";

function Nav() {

  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href="#about">About me</a>
          </li>
          <li>
            <a href="/">Portfolio</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
          <li>
            <a href="/">Resume</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;