import React from "react";

export default function NavBar() {
  return (
    <nav className="nav">
      <a href="/" className="site-title">
        Helse
      </a>
      <ul>
        <li>
          <a href="/home">Home</a>
          <a href="/account">Account</a>
        </li>
      </ul>
    </nav>
  );
}
