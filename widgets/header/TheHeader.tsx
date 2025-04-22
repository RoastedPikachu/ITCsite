"use client";
import React from "react";

import { burgerMenuStore } from "@/store/BurgerMenuStore";

import { links } from "@/data/header/links";

import Link from "next/link";

import "@/styles/widgets/header.css";

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

      <button
        onClick={() =>
          burgerMenuStore.isMenuOpened
            ? burgerMenuStore.changeIsMenuOpened(false)
            : burgerMenuStore.changeIsMenuOpened(true)
        }
        className="header-burgerButton"
      >
        {burgerMenuStore.isMenuOpened ? (
          <img src="/static/close.svg" alt="" />
        ) : (
          <img src="/static/burger.svg" alt="" />
        )}
      </button>
    </header>
  );
};

export default TheHeader;
