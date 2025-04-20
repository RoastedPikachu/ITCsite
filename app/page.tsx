"use client";
import React, { useState, useEffect, useRef } from "react";

import PageWrapper from "@/widgets/PageWrapper";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slides, setSlides] = useState([]);
  const sectionContainerRef = useRef(null);

  const prev = () => {
    if (currentIndex <= 0) return;
    setCurrentIndex(currentIndex - 1);
  };

  const next = () => {
    if (currentIndex >= slides.length - 1) return;
    setCurrentIndex(currentIndex + 1);
  };

  // useEffect(() => {
  //   // Инициализация слайдов
  //   if (sectionContainerRef.current) {
  //     const newSlides = Array.from();
  //     // setSlides(newSlides);
  //   }
  // }, [children]);

  useEffect(() => {
    // render();
  }, [currentIndex, slides]);
  return (
    <PageWrapper>
      <main>
        <section className="relative pt-[182px] w-full h-[1080px] bg-[url('/static/GreetingsBackground.png')] bg-cover">
          <img
            src="/static/GreetingsBackgroundDarknessDecoration.png"
            alt=""
            className="absolute top-0 w-full h-[275px]"
          />

          <h1 className="block text-[#ffffff] text-[7.1875rem] text-center font-['Bebas'] font-bold">
            <b className="text-[#00c9d7]">М</b>ЕСТО ВСТРЕЧИ IT-ТАЛАНТОВ
          </h1>

          <div className="relative flex justify-between items-center mt-[90px] px-[135px]">
            <div className="px-[25px] py-[25px] w-auto max-w-[592px] h-auto bg-[#0a0a0acc] border-[1px] border-[#323232] rounded-[20px]">
              <div className="flex items-center gap-x-[15px]">
                <img src="/static/CreateFuture.svg" alt="" />

                <h3 className="text-[#ffffff] text-[2.375rem] text-left font-['Bebas'] font-bold">
                  СОЗДАВАЙ IT-БУДУЩЕЕ{" "}
                  <b className="text-[#00c9d7]">ВМЕСТЕ С НАМИ!</b>
                </h3>
              </div>

              <p className="text-[#ffffff] text-[1.5rem] text-left font-['Montserrat'] font-medium">
                Хочешь разрабатывать реальные проекты, получать ценный опыт и
                прокачивать свои навыки в IT? Присоединяйся к
                Информационно-техническому сообществу КИПФИН!
              </p>
            </div>

            <div className="px-[25px] py-[25px] w-auto max-w-[592px] h-auto bg-[#0a0a0acc] border-[1px] border-[#323232] rounded-[20px]">
              <div className="flex items-center gap-x-[15px]">
                <img src="/static/YourTeam.svg" alt="" />

                <h3 className="text-[#ffffff] text-[2.375rem] text-left font-['Bebas'] font-bold">
                  ТВОЯ IT-КОМАНДА УЖЕ{" "}
                  <b className="text-[#00c9d7]">ЖДЕТ ТЕБЯ!</b>
                </h3>
              </div>

              <p className="text-[#ffffff] text-[1.5rem] text-left font-['Montserrat'] font-medium">
                ИТС – это сообщество студентов, объединенных любовью к
                технологиям. Вместе мы создаем крутые проекты, учимся новому и
                готовимся к карьере в IT!
              </p>
            </div>
          </div>

          <div className="relative flex justify-center items-start gap-x-[32px] mt-[208px] z-20">
            <button className="w-[80px] h-[80px] border-[1px] border-[#ffffff] rounded-[15px]"></button>

            <p className="max-w-[485px] text-[#ffffff] text-[1.375rem] text-left font-['Montserrat'] font-medium">
              Подведение итогов года Остапенко Григорием Александровичем в
              КИПФИН
            </p>
          </div>

          <img
            src="/static/GreetingsBackgroundDarknessDecorationBottom.png"
            alt=""
            className="absolute bottom-0 w-full h-[162px]"
          />
        </section>

        <section className="relative pt-[185px] px-[135px] w-full h-auto">
          <div>
            <h2 className="text-white text-[5.3125rem] text-left font-['Bebas'] font-bold leading-[1] uppercase">
              <b className="text-[#00c9d7]">Р</b>уководство
              <br /> нашего сообщества
            </h2>
          </div>

          <div className="mt-[90px]"></div>
        </section>

        <section className="relative pt-[185px] px-[135px] w-full h-auto">
          <div>
            <h2 className="text-white text-[5.3125rem] text-left font-['Bebas'] font-bold leading-[1] uppercase">
              <b className="text-[#00c9d7]">А</b>ктивисты
              <br /> нашего сообщества
            </h2>
          </div>

          <div className="mt-[90px]"></div>
        </section>

        <section className="relative pt-[185px] px-[135px] w-full h-auto">
          <h2 className="text-white text-[5.3125rem] text-left font-['Bebas'] font-bold leading-[1] uppercase">
            <b className="text-[#00c9d7]">К</b>АРТА IT-ГОРИЗОНТОВ:
            <br /> НАШИ НАПРАВЛЕНИЯ
          </h2>

          <div className="relative grid grid-cols-3 gap-x-[60px] mt-[90px] w-full">
            <div className="px-[32px] p-[40px] w-full h-[26.5vw] rounded-[40px] bg-[url('/static/Development.png')] bg-cover">
              <p className="text-white text-[2.8125rem] text-left font-['Montserrat'] font-semibold leading-[1.25]">
                Проектная деятельность
              </p>
            </div>

            <div className="px-[32px] p-[40px] w-full h-[26.5vw] rounded-[40px] bg-[url('/static/Media.png')] bg-cover">
              <p className="text-white text-[2.8125rem] text-left font-['Montserrat'] font-semibold leading-[1.25]">
                Медиа и менеджмент
              </p>
            </div>

            <div className="px-[32px] p-[40px] w-full h-[26.5vw] rounded-[40px] bg-[url('/static/Development.png')] bg-cover">
              <p className="text-white text-[2.8125rem] text-left font-['Montserrat'] font-semibold leading-[1.25]">
                3D печать
              </p>
            </div>
          </div>
        </section>

        <section className="relative pt-[185px] px-[135px] w-full h-auto">
          <h2 className="text-white text-[5.3125rem] text-left font-['Bebas'] font-bold leading-[1] uppercase">
            <b className="text-[#00c9d7]">IT</b>-ПРОЕКТЫ: ОТ КОДА
            <br /> ДО ВОПЛОЩЕНИЯ
          </h2>

          <div className="relative grid grid-cols-3 gap-x-[60px] mt-[90px] w-full">
            <div className="px-[32px] p-[40px] w-full h-[26.5vw] rounded-[40px] bg-[url('/static/Development.png')] bg-cover">
              <p className="text-white text-[2.8125rem] text-left font-['Montserrat'] font-semibold leading-[1.25]">
                Проектная деятельность
              </p>
            </div>

            <div className="px-[32px] p-[40px] w-full h-[26.5vw] rounded-[40px] bg-[url('/static/Media.png')] bg-cover">
              <p className="text-white text-[2.8125rem] text-left font-['Montserrat'] font-semibold leading-[1.25]">
                Медиа и менеджмент
              </p>
            </div>

            <div className="px-[32px] p-[40px] w-full h-[26.5vw] rounded-[40px] bg-[url('/static/Development.png')] bg-cover">
              <p className="text-white text-[2.8125rem] text-left font-['Montserrat'] font-semibold leading-[1.25]">
                3D печать
              </p>
            </div>
          </div>
        </section>

        <section className="relative pt-[185px] px-[135px] w-full h-auto">
          <h2 className="max-w-[650px] text-white text-[5.3125rem] font-['Bebas'] font-bold leading-[1] uppercase">
            <b className="text-[#00c9d7]">С</b>ТАНЬ ЧАСТЬЮ НАШЕЙ <br />
            IT-СЕМЬИ!
          </h2>

          <div className="grid grid-cols-2 gap-x-[85px] items-center mt-[90px] w-full h-auto">
            <div className="relative w-full h-[34.4vw] bg-[url('/static/Form.png')] rounded-[35px]">
              <div className="absolute left-0 bottom-0 w-full">
                <p className="flex justify-center items-center ml-[30px] mb-[15px] w-[110px] h-[50px] bg-[#00c9d7] rounded-[10px] text-white text-[1.5rem] text-center font-['Montserrat'] font-bold uppercase">
                  ШАГ 1
                </p>

                <p className="ml-[30px] mb-[30px] max-w-[355px] text-white text-[1.975rem] text-left font-['Montserrat'] font-semibold leading-[1.25]">
                  Зарегистрируйтесь через форму
                </p>

                <div className="relative grid justify-items-center items-center py-[30px] w-full h-auto bg-[#0a0a0a] border-[1px] border-[#323232] rounded-[35px]">
                  <a
                    href="https://forms.yandex.ru/cloud/63d3abf750569066a055fc7b/"
                    className="py-[25px] w-[75%] h-auto bg-[#202020] rounded-[20px] text-white text-[1.5rem] text-center font-['Montserrat'] font-bold uppercase"
                  >
                    ЗАРЕГИСТРИРОВАТЬСЯ
                  </a>

                  <p className="mt-[20px] w-[75%] text-[#b4b4b4] text-[1.5rem] text-left font-['Montserrat'] font-semibold leading-[1.25]">
                    Заполните простую форму, чтобы стать частью нашего
                    сообщества и получить шанс реализовать свой потенциал в IT.
                    Мы поможем вам раскрыть свои таланты и достичь высот!
                  </p>
                </div>
              </div>
            </div>

            <div className="relative w-full h-[34.4vw] bg-[url('/static/Declaration.png')] rounded-[35px]">
              <div className="absolute left-0 bottom-0 w-full">
                <p className="flex justify-center items-center ml-[30px] mb-[15px] w-[110px] h-[50px] bg-[#00c9d7] rounded-[10px] text-white text-[1.5rem] text-center font-['Montserrat'] font-bold uppercase">
                  ШАГ 2
                </p>

                <p className="ml-[30px] mb-[30px] max-w-[640px] text-white text-[1.975rem] text-left font-['Montserrat'] font-semibold leading-[1.25]">
                  Заполните заявление в свободной форме и передайте его в 104
                  кабинет
                </p>

                <div className="relative grid justify-items-center items-center py-[30px] w-full h-auto bg-[#0a0a0a] border-[1px] border-[#323232] rounded-[35px]">
                  <a
                    href="/static/docs/Zayavlenie-na-vstuplenie-v-ITS.docx"
                    className="py-[25px] w-[75%] h-auto bg-[#202020] rounded-[20px] text-white text-[1.5rem] text-center font-['Montserrat'] font-bold uppercase"
                  >
                    СКАЧАТЬ ЗАЯВЛЕНИЕ
                  </a>

                  <p className="mt-[20px] text-[#b4b4b4] text-[1.5rem] text-left font-['Montserrat'] font-semibold leading-[1.25]">
                    При подаче заявления необходимо указать <br />
                    1. ФИО; <br />
                    2. Группу и курс; <br />
                    3. Ваши навыки в IT-сфере; <br />
                    4. Почему вы хотите попасть в ИТС?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative pt-[185px] pb-[135px] px-[135px] w-full h-auto">
          <h2 className="max-w-[650px] text-white text-[5.3125rem] font-['Bebas'] font-bold leading-[1] uppercase">
            <b className="text-[#00c9d7]">Д</b>ОКУМЕНТЫ ИТС
          </h2>

          <div className="grid gap-y-[60px] mt-[90px]">
            <div className="flex justify-between items-center gap-x-[20px] px-[50px] py-[50px] w-full h-auto border-[1px] border-[#323232] rounded-[30px]">
              <p className="text-white text-[1.875rem] text-left font-['Montserrat'] font-semibold">
                NDA (Соглашение о конфиденциальности и неразглашении информации)
              </p>

              <a
                href="/static/docs/NDA.docx"
                className="flex justify-center items-center w-[82px] min-w-[82px] h-[82px] bg-[#202020] rounded-[15px] outline-none"
              >
                <img src="/static/download.svg" alt="" />
              </a>
            </div>

            <div className="flex justify-between items-center gap-x-[20px] px-[50px] py-[50px] w-full h-auto border-[1px] border-[#323232] rounded-[30px]">
              <p className="text-white text-[1.875rem] text-left font-['Montserrat'] font-semibold">
                Заявление на вступление
              </p>

              <a
                href="/static/docs/Zayavlenie-na-vstuplenie-v-ITS.docx"
                className="flex justify-center items-center w-[82px] min-w-[82px] h-[82px] bg-[#202020] rounded-[15px] outline-none"
              >
                <img src="/static/download.svg" alt="" />
              </a>
            </div>
          </div>
        </section>
      </main>
    </PageWrapper>
  );
}
