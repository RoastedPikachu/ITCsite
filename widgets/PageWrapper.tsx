"use client";
import React from "react";

import TheHeader from "@/widgets/header/TheHeader";
import TheFooter from "@/widgets/footer/TheFooter";
import { burgerMenuStore } from "@/store/BurgerMenuStore";
import { observer } from "mobx-react-lite";
import Link from "next/link";

const PageWrapper: React.FC<{ children: any }> = observer(({ children }) => {
  const links = [
    {
      id: 1,
      link: "/",
      text: "Главная",
    },
    {
      id: 2,
      link: "/",
      text: "Руководство",
    },
    {
      id: 3,
      link: "/",
      text: "Активисты",
    },
    {
      id: 4,
      link: "/",
      text: "Направления",
    },
    {
      id: 5,
      link: "/",
      text: "Наши проекты",
    },
    {
      id: 6,
      link: "/",
      text: "Юнармия",
    },
    {
      id: 7,
      link: "/",
      text: "Хочу в ИТС",
    },
  ];
  return (
    <>
      <TheHeader />

      {children}

      <div
        className={`fixed left-0 w-screen h-screen bg-[#0a0a0ab3] duration-300 ease-in-out z-20 ${burgerMenuStore.isMenuOpened ? "top-[62px]" : "top-[-100vh]"}`}
      >
        <nav className="relative grid justify-items-center gap-y-[15px] mt-[90px] mx-auto ">
          {links.map((link) => (
            <Link
              key={link.id}
              href={link.link}
              className={`flex justify-center items-center w-[61vw] h-[50px] ${link.id === 7 ? "bg-[#00c9d7] border-[1px] border-[#00c9d7]" : "bg-[#0a0a0a] border-[1px] border-[#323232]"} rounded-[10px] text-[#ffffff] text-[0.9375rem] font-['Montserrat'] font-medium`}
            >
              {link.text}
            </Link>
          ))}
        </nav>
      </div>

      <TheFooter />
    </>
  );
});

export default PageWrapper;
