"use client";
import React from "react";

import Link from "next/link";

import "@/styles/widgets/footer.css";
import { burgerMenuStore } from "@/store/BurgerMenuStore";

const TheFooter = () => {
  const links = [
    {
      id: 1,
      link: "/",
      text: "Главная",
    },
    {
      id: 2,
      link: "/#Management",
      text: "Руководство",
    },
    {
      id: 3,
      link: "/#Ways",
      text: "Направления",
    },
    {
      id: 4,
      link: "/#Projects",
      text: "Наши проекты",
    },
    {
      id: 5,
      link: "https://teletype.in/@wszug/G4xvL1X2stz",
      text: "Буклет",
    },
    {
      id: 6,
      link: "/junarmy",
      text: "Юнармия",
    },
  ];
  return (
    <footer className="footer">
      <button
        onClick={() => burgerMenuStore.changeIsMenuOpened(true)}
        className="footer-burgerButton"
      >
        <img src="/static/burger.svg" alt="" />
      </button>

      <nav className="footer-nav">
        {links.map((link) => (
          <Link
            key={link.id}
            href={link.link}
            target={link.id === 5 ? "_blank" : "_self"}
            className="footer-nav-link"
          >
            {link.text}
          </Link>
        ))}
      </nav>

      <div className="footer-contacts">
        <a href="tel:84995531428" className="footer-contacts-link">
          <img
            src="/static/footer/Phone.svg"
            alt=""
            className="footer-contacts-link-image mt-[10px]"
          />

          <p className="footer-contacts-link-text">
            Телефон: 8 499 553 14 28 (доб. 8)
          </p>
        </a>

        <a href="mailto:general@itc-team.ru" className="footer-contacts-link">
          <img
            src="/static/footer/Email.svg"
            alt=""
            className="footer-contacts-link-image mt-[10px]"
          />

          <p className="footer-contacts-link-text">
            Почта: <br />
            general@itc-team.ru
          </p>
        </a>

        <a
          href="https://yandex.ru/maps/213/moscow/house/kronshtadtskiy_bulvar_37b/Z04YcwdlTUIFQFtvfXR1eX9nYw==/?ll=37.505471%2C55.848347&z=17"
          className="footer-contacts-link"
        >
          <img
            src="/static/footer/Address.svg"
            alt=""
            className="footer-contacts-link-image mt-[10px]"
          />

          <p className="footer-contacts-link-text">
            Адрес: Кронштадский бульвар, 37б
          </p>
        </a>

        <a href="https://t.me/halfcoder" className="footer-contacts-tg">
          <img
            src="/static/footer/Telegram.svg"
            alt=""
            className="footer-contacts-tg-image"
          />
        </a>
      </div>

      <div className="footer-credentials">
        <img
          src="/static/footer/DeonigiAvatar.png"
          alt=""
          className="footer-credentials-image"
        />

        <p className="footer-credential-text">
          Designed by{" "}
          <a
            href="https://t.me/uncle_disya"
            className="footer-credentials-text-link"
          >
            DEONIGI
          </a>
        </p>
      </div>
    </footer>
  );
};

export default TheFooter;
