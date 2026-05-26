"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="topbar">
        <div className="socials">
<img src="/twitterwhite.png" className=""/>
<img src="/facebook-app-round-white-icon.webp" className=""/>
<img src="/instagram-white-icon.webp" className=""/>
        </div>

        <img src="/logo.svg" className="logo"/>

        <button className="order-btn">ORDER ONLINE</button>

        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <nav className={`menu ${menuOpen ? "show" : ""}`}>
        <Link href="/">HOME</Link>
        <Link href="/menu">OUR MENU</Link>
        <Link href="/about">ABOUT</Link>
        <Link href="/offers">OFFERS</Link>
        <Link href="/contact">CONTACT</Link>
      </nav>
    </header>
  );
}