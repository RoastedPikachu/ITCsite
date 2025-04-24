"use client";
import React from "react";

import { burgerMenuStore } from "@/store/BurgerMenuStore";

import { links } from "@/data/header/links";

import Link from "next/link";

import "@/styles/widgets/header.css";

const TheHeader = () => {
  return (
    <header className="header">
      <Link href="/">
        <img src="/static/logo.svg" alt="" className="header-logo" />
      </Link>

      <nav className="header-nav">
        {links.map((link) => (
          <Link
            key={link.id}
            href={link.link}
            target={link.id === 5 ? "_blank" : "_self"}
            className="header-nav-link"
          >
            {link.text}
          </Link>
        ))}
      </nav>

      <a href="/#ITC" className="header-button">
        Хочу в ИТС
      </a>

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
