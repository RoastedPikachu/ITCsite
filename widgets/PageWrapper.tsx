"use client";
import React, { useEffect } from "react";

import TheHeader from "@/widgets/header/TheHeader";
import TheFooter from "@/widgets/footer/TheFooter";
import { burgerMenuStore } from "@/store/BurgerMenuStore";
import { observer } from "mobx-react-lite";
import Link from "next/link";
import { usePathname } from "next/navigation";

const PageWrapper: React.FC<{ children: any }> = observer(({ children }) => {
  const pathname = usePathname();

  const links = [
    {
      id: 1,
      text: "Главная",
      link: "/",
      isActive: false,
    },
    {
      id: 2,
      text: "Руководство",
      link: "/#Management",
      isActive: false,
    },
    {
      id: 3,
      text: "Направления",
      link: "/#Ways",
      isActive: false,
    },
    {
      id: 4,
      text: "Наши проекты",
      link: "/#Projects",
      isActive: false,
    },
    {
      id: 5,
      text: "Буклет",
      link: "https://teletype.in/@wszug/G4xvL1X2stz",
      isActive: false,
    },
    {
      id: 6,
      text: "Юнармия",
      link: "/junarmy",
      isActive: false,
    },
    {
      id: 7,
      text: "Хочу в ИТС",
      link: "/#ITC",
      isActive: false,
    },
  ];

  useEffect(() => {}, []);
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
              onClick={() => burgerMenuStore.changeIsMenuOpened(false)}
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
