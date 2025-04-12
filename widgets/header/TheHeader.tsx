import React from "react";

import { links } from "@/data/header/links";

import Link from "next/link";

import "@/styles/header.css";

const TheHeader = () => {
  return (
    <header className="header">
      <img src="/static/logo.svg" alt="" className="header-logo" />

      <nav className="header-nav">
        {links.map((link) => (
          <Link key={link.id} href={link.link} className="header-nav-link">
            {link.text}
          </Link>
        ))}
      </nav>

      <button className="header-button">Хочу в ИТС</button>
    </header>
  );
};

export default TheHeader;
