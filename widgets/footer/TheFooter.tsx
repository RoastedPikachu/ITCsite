import React from "react";
import Link from "next/link";

const TheFooter = () => {
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
  ];
  return (
    <footer className="relative flex justify-between items-start pt-[50px] pl-[122px] pr-[135px] w-full h-[702px] bg-[url('/static/footerBackground.png')] rounded-t-[30px]">
      <nav className="grid justify-items-start gap-y-[50px] max-w-[230px] h-auto">
        {links.map((link) => (
          <Link
            key={link.id}
            href={link.link}
            className="text-white text-[1.625rem] text-left font-['Montserrat'] font-medium"
          >
            {link.text}
          </Link>
        ))}
      </nav>

      <div className="grid justify-items-end gap-y-[30px] w-[355px]">
        <a
          href="tel:84995531428"
          className="flex justify-center items-start gap-x-[11px] py-[30px] px-[20px] w-full h-auto bg-[#0a0a0a] rounded-[10px] cursor-pointer"
        >
          <img
            src="/static/footer/Phone.svg"
            alt=""
            className="mt-[10px] w-[15px] h-[15px]"
          />

          <p className="w-full text-white text-[1.375rem] font-['Montserrat'] font-medium">
            Телефон: 8 499 553 14 28 (доб. 8)
          </p>
        </a>

        <a
          href="mailto:general@itc-team.ru"
          className="flex justify-center items-start gap-x-[11px] py-[30px] px-[20px] w-full h-[122px] bg-[#0a0a0a] rounded-[10px] cursor-pointer"
        >
          <img
            src="/static/footer/Email.svg"
            alt=""
            className="mt-[10px] w-[15px] h-[15px]"
          />

          <p className="w-full text-white text-[1.375rem] font-['Montserrat'] font-medium">
            Почта: <br />
            general@itc-team.ru
          </p>
        </a>

        <a
          href="https://yandex.ru/maps/213/moscow/house/kronshtadtskiy_bulvar_37b/Z04YcwdlTUIFQFtvfXR1eX9nYw==/?ll=37.505471%2C55.848347&z=17"
          className="flex justify-center items-start gap-x-[11px] py-[30px] px-[20px] w-full h-[122px] bg-[#0a0a0a] rounded-[10px] cursor-pointer"
        >
          <img
            src="/static/footer/Address.svg"
            alt=""
            className="mt-[10px] w-[15px] h-[15px]"
          />

          <p className="w-full text-white text-[1.375rem] font-['Montserrat'] font-medium">
            Адрес: Кронштадский бульвар, 37б
          </p>
        </a>

        <a href="https://t.me/halfcoder" className="outline-none">
          <img
            src="/static/footer/Telegram.svg"
            alt=""
            className="w-[43px] h-[37px]"
          />
        </a>
      </div>

      <div className="absolute flex justify-center items-center gap-x-[12px] bottom-[65px] w-full max-w-[calc(100%-257px)]">
        <img
          src="/static/footer/DeonigiAvatar.png"
          alt=""
          className="w-[30px] h-[30px] rounded-[100%]"
        />

        <p className="text-white text-[1.625rem] font-['Montserrat'] font-medium">
          Designed by{" "}
          <a
            href="https://vk.com/deonigi_studio"
            className="text-[#00c9d7] font-bold"
          >
            DEONIGI
          </a>
        </p>
      </div>
    </footer>
  );
};

export default TheFooter;
