"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "@/styles/widgets/mainPage.css";
import { management } from "@/data/management";
import Link from "next/link";

const MainPageContent = () => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [slides, setSlides] = useState([]);
  const sectionContainerRef = useRef(null);
  return (
    <main className="main">
      <section className="greetingsSection">
        <img
          src="/static/GreetingsBackgroundDarknessDecoration.png"
          alt=""
          className="greetingsSection-decoration"
        />

        <h1 className="greetingsSection-title">
          <b className="greetingsSection-title-bold">М</b>ЕСТО ВСТРЕЧИ
          IT-ТАЛАНТОВ
        </h1>

        <div className="greetingsSection-info">
          <div className="greetingsSection-info-item">
            <div className="greetingsSection-info-item-top">
              <img src="/static/CreateFuture.svg" alt="" />

              <h3 className="greetingsSection-info-item-top-title">
                СОЗДАВАЙ IT-БУДУЩЕЕ{" "}
                <b className="greetingsSection-info-item-top-title-bold">
                  ВМЕСТЕ С НАМИ!
                </b>
              </h3>
            </div>

            <p className="greetingsSection-info-item-text">
              Хочешь разрабатывать реальные проекты, получать ценный опыт и
              прокачивать свои навыки в IT? Присоединяйся к
              Информационно-техническому сообществу КИПФИН!
            </p>
          </div>

          <div className="greetingsSection-info-item">
            <div className="greetingsSection-info-item-top">
              <img src="/static/YourTeam.svg" alt="" />

              <h3 className="greetingsSection-info-item-top-title">
                ТВОЯ IT-КОМАНДА УЖЕ{" "}
                <b className="greetingsSection-info-item-top-title-bold">
                  ЖДЕТ ТЕБЯ!
                </b>
              </h3>
            </div>

            <p className="greetingsSection-info-item-text">
              ИТС – это сообщество студентов, объединенных любовью к
              технологиям. Вместе мы создаем крутые проекты, учимся новому и
              готовимся к карьере в IT!
            </p>
          </div>
        </div>

        <div className="relative flex justify-center items-start gap-x-[32px] mt-[208px] z-20">
          <button className="w-[80px] h-[80px] border-[1px] border-[#ffffff] rounded-[15px] cursor-pointer">
            <img src="/static/play.svg" alt="" />
          </button>

          <p className="max-w-[485px] text-[#ffffff] text-[1.375rem] text-left font-['Montserrat'] font-medium">
            Подведение итогов года Остапенко Григорием Александровичем в КИПФИН
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

        <Swiper
          spaceBetween={60}
          slidesPerView={
            typeof window !== "undefined" && window.innerWidth > 480 ? 3 : 1
          }
          initialSlide={0}
          loop={true}
          modules={[Navigation]}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          onBeforeInit={(swiper: any) => {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
          }}
          className="slider"
        >
          <SwiperSlide>
            {() => (
              <div className="slider-item bg-[url('/static/management/Demkina.png')]">
                <div className="slider-item-content">
                  <p className="slider-item-content-name">
                    Демкина Надежда Ибрагимовна
                  </p>

                  <Link
                    href={"/management/demkina_ni"}
                    className="slider-item-content-link"
                  >
                    <p className="slider-item-content-link-text">Читать</p>

                    <img src="/static/ArrowRight.svg" alt="" />
                  </Link>
                </div>

                <img
                  src="/static/sliderDecoration.png"
                  alt=""
                  className="absolute bottom-0 left-0 w-full h-[50%]"
                />
              </div>
            )}
          </SwiperSlide>

          <SwiperSlide>
            {() => (
              <div className="slider-item bg-[url('/static/management/Slobodenuk.png')]">
                <div className="slider-item-content">
                  <p className="slider-item-content-name">
                    Слободенюк Никита Владимирович
                  </p>

                  <Link
                    href={"/management/slobodeniyk_nv"}
                    className="slider-item-content-link"
                  >
                    <p className="slider-item-content-link-text">Читать</p>

                    <img src="/static/ArrowRight.svg" alt="" />
                  </Link>
                </div>

                <img
                  src="/static/sliderDecoration.png"
                  alt=""
                  className="absolute bottom-0 left-0 w-full h-[50%]"
                />
              </div>
            )}
          </SwiperSlide>

          <SwiperSlide>
            {() => (
              <div className="slider-item bg-[url('/static/management/Ovchinnikov.png')]">
                <div className="slider-item-content">
                  <p className="slider-item-content-name">
                    Овчинников Алексей Александрович
                  </p>

                  <Link
                    href={"/management/ovchinnikov_aa"}
                    className="slider-item-content-link"
                  >
                    <p className="slider-item-content-link-text">Читать</p>

                    <img src="/static/ArrowRight.svg" alt="" />
                  </Link>
                </div>

                <img
                  src="/static/sliderDecoration.png"
                  alt=""
                  className="absolute bottom-0 left-0 w-full h-[50%]"
                />
              </div>
            )}
          </SwiperSlide>

          <SwiperSlide>
            {() => (
              <div className="slider-item bg-[url('/static/management/Abutkov.png')]">
                <div className="slider-item-content">
                  <p className="slider-item-content-name">
                    Абутков Иван Владимирович
                  </p>

                  <Link
                    href={"/management/abutkov_iv"}
                    className="slider-item-content-link"
                  >
                    <p className="slider-item-content-link-text">Читать</p>

                    <img src="/static/ArrowRight.svg" alt="" />
                  </Link>
                </div>

                <img
                  src="/static/sliderDecoration.png"
                  alt=""
                  className="absolute bottom-0 left-0 w-full h-[50%]"
                />
              </div>
            )}
          </SwiperSlide>

          <SwiperSlide>
            {() => (
              <div className="slider-item bg-[url('/static/management/Faberovskaya.png')]">
                <div className="slider-item-content">
                  <p className="slider-item-content-name">
                    Фаберовская Алиса Евгеньевна
                  </p>

                  <Link
                    href={"/management/faberovskaya_ae"}
                    className="slider-item-content-link"
                  >
                    <p className="slider-item-content-link-text">Читать</p>

                    <img src="/static/ArrowRight.svg" alt="" />
                  </Link>
                </div>

                <img
                  src="/static/sliderDecoration.png"
                  alt=""
                  className="absolute bottom-0 left-0 w-full h-[50%]"
                />
              </div>
            )}
          </SwiperSlide>

          <SwiperSlide>
            {() => (
              <div className="slider-item bg-[url('/static/management/Verhozina.png')]">
                <div className="slider-item-content">
                  <p className="slider-item-content-name">
                    Верхозина Виктория Васильевна
                  </p>

                  <Link
                    href={"/management/verhozina_vv"}
                    className="slider-item-content-link"
                  >
                    <p className="slider-item-content-link-text">Читать</p>

                    <img src="/static/ArrowRight.svg" alt="" />
                  </Link>
                </div>

                <img
                  src="/static/sliderDecoration.png"
                  alt=""
                  className="absolute bottom-0 left-0 w-full h-[50%]"
                />
              </div>
            )}
          </SwiperSlide>

          <button ref={navigationPrevRef} className="slider-prevButton">
            <img src="/static/slider/arrow-left.svg" alt="" />
          </button>
          <button ref={navigationNextRef} className="slider-nextButton">
            <img src="/static/slider/arrow-right.svg" alt="" />
          </button>
        </Swiper>
      </section>

      <section className="relative pt-[185px] px-[135px] w-full h-auto">
        <div>
          <h2 className="text-white text-[5.3125rem] text-left font-['Bebas'] font-bold leading-[1] uppercase">
            <b className="text-[#00c9d7]">А</b>ктивисты
            <br /> нашего сообщества
          </h2>
        </div>

        <Swiper
          spaceBetween={60}
          slidesPerView={
            typeof window !== "undefined" && window.innerWidth > 480 ? 3 : 1
          }
          initialSlide={0}
          loop={true}
          modules={[Navigation]}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          onBeforeInit={(swiper: any) => {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
          }}
          className="slider"
        >
          <SwiperSlide>
            {() => (
              <div className="slider-item bg-[url('/static/activists/Bykov.png')]">
                <div className="slider-item-content">
                  <p className="slider-item-content-name">
                    Быков Денис Александрович
                  </p>

                  <Link
                    href={"/management/bykov_da"}
                    className="slider-item-content-link"
                  >
                    <p className="slider-item-content-link-text">Читать</p>

                    <img src="/static/ArrowRight.svg" alt="" />
                  </Link>
                </div>

                <img
                  src="/static/sliderDecoration.png"
                  alt=""
                  className="absolute bottom-0 left-0 w-full h-[50%]"
                />
              </div>
            )}
          </SwiperSlide>

          <SwiperSlide>
            {() => (
              <div className="slider-item bg-[url('/static/activists/Latysheva.png')]">
                <div className="slider-item-content">
                  <p className="slider-item-content-name">
                    Латышева Анна Михайловна
                  </p>

                  <Link
                    href={"/management/latysheva_am"}
                    className="slider-item-content-link"
                  >
                    <p className="slider-item-content-link-text">Читать</p>

                    <img src="/static/ArrowRight.svg" alt="" />
                  </Link>
                </div>

                <img
                  src="/static/sliderDecoration.png"
                  alt=""
                  className="absolute bottom-0 left-0 w-full h-[50%]"
                />
              </div>
            )}
          </SwiperSlide>

          <SwiperSlide>
            {() => (
              <div className="slider-item bg-[url('/static/activists/Sattarova.png')]">
                <div className="slider-item-content">
                  <p className="slider-item-content-name">
                    Саттарова Севара Жахонгир Кизи
                  </p>

                  <Link
                    href={"/management/sattarova_szk"}
                    className="slider-item-content-link"
                  >
                    <p className="slider-item-content-link-text">Читать</p>

                    <img src="/static/ArrowRight.svg" alt="" />
                  </Link>
                </div>

                <img
                  src="/static/sliderDecoration.png"
                  alt=""
                  className="absolute bottom-0 left-0 w-full h-[50%]"
                />
              </div>
            )}
          </SwiperSlide>

          <SwiperSlide>
            {() => (
              <div className="slider-item bg-[url('/static/activists/Karabut.png')]">
                <div className="slider-item-content">
                  <p className="slider-item-content-name">
                    Карабут Борис Евгеньевич
                  </p>

                  <Link
                    href={"/management/karabut_be"}
                    className="slider-item-content-link"
                  >
                    <p className="slider-item-content-link-text">Читать</p>

                    <img src="/static/ArrowRight.svg" alt="" />
                  </Link>
                </div>

                <img
                  src="/static/sliderDecoration.png"
                  alt=""
                  className="absolute bottom-0 left-0 w-full h-[50%]"
                />
              </div>
            )}
          </SwiperSlide>

          <SwiperSlide>
            {() => (
              <div className="slider-item bg-[url('/static/activists/Kuznetsova.png')]">
                <div className="slider-item-content">
                  <p className="slider-item-content-name">
                    Кузнецова Екатерина Сергеевна
                  </p>

                  <Link
                    href={"/management/kuznetsova_ks"}
                    className="slider-item-content-link"
                  >
                    <p className="slider-item-content-link-text">Читать</p>

                    <img src="/static/ArrowRight.svg" alt="" />
                  </Link>
                </div>

                <img
                  src="/static/sliderDecoration.png"
                  alt=""
                  className="absolute bottom-0 left-0 w-full h-[50%]"
                />
              </div>
            )}
          </SwiperSlide>

          <SwiperSlide>
            {() => (
              <div className="slider-item bg-[url('/static/activists/Kalinicheva.png')]">
                <div className="slider-item-content">
                  <p className="slider-item-content-name">
                    Калиничева Елизавета Владимировна
                  </p>

                  <Link
                    href={"/management/kalinicheva_ev"}
                    className="slider-item-content-link"
                  >
                    <p className="slider-item-content-link-text">Читать</p>

                    <img src="/static/ArrowRight.svg" alt="" />
                  </Link>
                </div>

                <img
                  src="/static/sliderDecoration.png"
                  alt=""
                  className="absolute bottom-0 left-0 w-full h-[50%]"
                />
              </div>
            )}
          </SwiperSlide>

          <button ref={navigationPrevRef} className="slider-prevButton">
            <img src="/static/slider/arrow-left.svg" alt="" />
          </button>
          <button ref={navigationNextRef} className="slider-nextButton">
            <img src="/static/slider/arrow-right.svg" alt="" />
          </button>
        </Swiper>
      </section>

      <section className="relative pt-[185px] px-[135px] w-full h-auto">
        <h2 className="text-white text-[5.3125rem] text-left font-['Bebas'] font-bold leading-[1] uppercase">
          <b className="text-[#00c9d7]">К</b>АРТА IT-ГОРИЗОНТОВ:
          <br /> НАШИ НАПРАВЛЕНИЯ
        </h2>

        <div className="relative grid grid-cols-3 gap-x-[60px] mt-[90px] w-full">
          <div className="relative px-[32px] p-[40px] w-full h-[26.5vw] rounded-[40px] bg-[url('/static/Development.png')] bg-cover">
            <p className="text-white text-[2.5rem] text-left font-['Montserrat'] font-semibold leading-[1.25]">
              Проектная деятельность
            </p>
          </div>

          <div className="relative px-[32px] p-[40px] w-full h-[26.5vw] rounded-[40px] bg-[url('/static/Media.png')] bg-cover">
            <p className="text-white text-[2.5rem] text-left font-['Montserrat'] font-semibold leading-[1.25]">
              Медиа и менеджмент
            </p>
          </div>

          <div className="px-[32px] p-[40px] w-full h-[26.5vw] rounded-[40px] bg-[url('/static/Development.png')] bg-cover">
            <p className="text-white text-[2.5rem] text-left font-['Montserrat'] font-semibold leading-[1.25]">
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

        <div className="relative grid grid-cols-3 gap-x-[70px] gap-y-[120px] mt-[90px] w-full">
          <div className="relative w-full h-auto">
            <img
              src="/static/TopProject.png"
              alt=""
              className="absolute right-[-70px] top-[-70px]"
            />

            <img
              src="/static/projects/HelperKip.png"
              alt=""
              className="w-full h-[36.8vw] rounded-[40px]"
            />

            <p className="mt-[25px] text-white text-[2.75rem] text-left font-['Bebas'] font-bold">
              КИПФИН ПОМОЩНИК 🔥
            </p>

            <a
              href="https://t.me/HelperKipBot"
              className="flex items-center gap-x-[16px] mt-[20px] px-[25px] py-[20px] w-auto max-w-[237px] h-[68px] border-[1px] border-white rounded-[12px]"
            >
              <p className="text-white text-[1.5rem] text-left font-['Montserrat'] font-semibold">
                Подробнее
              </p>

              <img src="/static/ArrowRight.svg" alt="" className="w-[22px]" />
            </a>
          </div>

          <div className="relative w-full h-auto">
            <img
              src="/static/TopProject.png"
              alt=""
              className="absolute right-[-70px] top-[-70px]"
            />

            <img
              src="/static/projects/Znakomstva.png"
              alt=""
              className="w-full h-[36.8vw] rounded-[40px]"
            />

            <p className="mt-[25px] text-white text-[2.75rem] text-left font-['Bebas'] font-bold">
              ЗНАКОМСТВА 🔥
            </p>

            <a
              href="https://t.me/znakomstva_searchbot"
              className="flex items-center gap-x-[16px] mt-[20px] px-[25px] py-[20px] w-auto max-w-[237px] h-[68px] border-[1px] border-white rounded-[12px]"
            >
              <p className="text-white text-[1.5rem] text-left font-['Montserrat'] font-semibold">
                Подробнее
              </p>

              <img src="/static/ArrowRight.svg" alt="" className="w-[22px]" />
            </a>
          </div>

          <div className="relative w-full h-auto">
            <img
              src="/static/TopProject.png"
              alt=""
              className="absolute right-[-70px] top-[-70px]"
            />

            <img
              src="/static/projects/3DTour.png"
              alt=""
              className="w-full h-[36.8vw] rounded-[40px]"
            />

            <p className="mt-[25px] text-white text-[2.75rem] text-left font-['Bebas'] font-bold">
              3D ТУР КИПФИН 🔥
            </p>

            <a
              href="https://tour.panoee.net/65e08e217a73f2feff4db099/65e08e717a73f212cb4db0ac"
              className="flex items-center gap-x-[16px] mt-[20px] px-[25px] py-[20px] w-auto max-w-[237px] h-[68px] border-[1px] border-white rounded-[12px]"
            >
              <p className="text-white text-[1.5rem] text-left font-['Montserrat'] font-semibold">
                Подробнее
              </p>

              <img src="/static/ArrowRight.svg" alt="" className="w-[22px]" />
            </a>
          </div>

          <div className="relative w-full h-auto">
            <img
              src="/static/TopProject.png"
              alt=""
              className="absolute right-[-70px] top-[-70px]"
            />

            <img
              src="/static/projects/WeLike.png"
              alt=""
              className="w-full h-[36.8vw] rounded-[40px]"
            />

            <p className="mt-[25px] text-white text-[2.75rem] text-left font-['Bebas'] font-bold">
              У НАС ЛЮБЯТ ❤️ 🔥
            </p>

            <a
              href="https://t.me/like_board"
              className="flex items-center gap-x-[16px] mt-[20px] px-[25px] py-[20px] w-auto max-w-[237px] h-[68px] border-[1px] border-white rounded-[12px]"
            >
              <p className="text-white text-[1.5rem] text-left font-['Montserrat'] font-semibold">
                Подробнее
              </p>

              <img src="/static/ArrowRight.svg" alt="" className="w-[22px]" />
            </a>
          </div>

          <div className="relative w-full h-auto">
            <img
              src="/static/TopProject.png"
              alt=""
              className="absolute right-[-70px] top-[-70px]"
            />

            <img
              src="/static/projects/Podcasts.png"
              alt=""
              className="w-full h-[36.8vw] rounded-[40px]"
            />

            <p className="mt-[25px] text-white text-[2.75rem] text-left font-['Bebas'] font-bold">
              ИТС ПОДКАСТЫ
            </p>

            <a
              href="https://t.me/halfcoder"
              className="flex items-center gap-x-[16px] mt-[20px] px-[25px] py-[20px] w-auto max-w-[237px] h-[68px] border-[1px] border-white rounded-[12px]"
            >
              <p className="text-white text-[1.5rem] text-left font-['Montserrat'] font-semibold">
                Подробнее
              </p>

              <img src="/static/ArrowRight.svg" alt="" className="w-[22px]" />
            </a>
          </div>

          <div className="relative w-full h-auto">
            <img
              src="/static/projects/Publishing.png"
              alt=""
              className="w-full h-[36.8vw] rounded-[40px]"
            />

            <p className="mt-[25px] text-white text-[2.75rem] text-left font-['Bebas'] font-bold">
              ИТС ПУБЛИКАЦИИ
            </p>

            <a
              href="https://t.me/halfcoder"
              className="flex items-center gap-x-[16px] mt-[20px] px-[25px] py-[20px] w-auto max-w-[237px] h-[68px] border-[1px] border-white rounded-[12px]"
            >
              <p className="text-white text-[1.5rem] text-left font-['Montserrat'] font-semibold">
                Подробнее
              </p>

              <img src="/static/ArrowRight.svg" alt="" className="w-[22px]" />
            </a>
          </div>

          <div className="relative w-full h-auto">
            <img
              src="/static/projects/Support.png"
              alt=""
              className="w-full h-[36.8vw] rounded-[40px]"
            />

            <p className="mt-[25px] text-white text-[2.75rem] text-left font-['Bebas'] font-bold">
              КИПФИН ПОДДЕРЖКА
            </p>

            <a
              href="https://t.me/ItcProjects"
              className="flex items-center gap-x-[16px] mt-[20px] px-[25px] py-[20px] w-auto max-w-[237px] h-[68px] border-[1px] border-white rounded-[12px]"
            >
              <p className="text-white text-[1.5rem] text-left font-['Montserrat'] font-semibold">
                Подробнее
              </p>

              <img src="/static/ArrowRight.svg" alt="" className="w-[22px]" />
            </a>
          </div>

          <div className="relative w-full h-auto">
            <img
              src="/static/projects/ProjectsSystem.png"
              alt=""
              className="w-full h-[36.8vw] rounded-[40px]"
            />

            <p className="mt-[25px] text-white text-[2.75rem] text-left font-['Bebas'] font-bold">
              СИСТЕМА ПРОЕКТОВ ИТС
            </p>

            <a
              href="https://t.me/ItcProjects"
              className="flex items-center gap-x-[16px] mt-[20px] px-[25px] py-[20px] w-auto max-w-[237px] h-[68px] border-[1px] border-white rounded-[12px]"
            >
              <p className="text-white text-[1.5rem] text-left font-['Montserrat'] font-semibold">
                Подробнее
              </p>

              <img src="/static/ArrowRight.svg" alt="" className="w-[22px]" />
            </a>
          </div>

          <div className="relative w-full h-auto">
            <img
              src="/static/projects/Helldivers.png"
              alt=""
              className="w-full h-[36.8vw] rounded-[40px]"
            />

            <p className="mt-[25px] text-white text-[2.75rem] text-left font-['Bebas'] font-bold">
              САЙТ ДЛЯ ИГРЫ Helldivers
            </p>

            <a
              href="https://helldivers.help"
              className="flex items-center gap-x-[16px] mt-[20px] px-[25px] py-[20px] w-auto max-w-[237px] h-[68px] border-[1px] border-white rounded-[12px]"
            >
              <p className="text-white text-[1.5rem] text-left font-['Montserrat'] font-semibold">
                Подробнее
              </p>

              <img src="/static/ArrowRight.svg" alt="" className="w-[22px]" />
            </a>
          </div>

          <div className="relative w-full h-auto">
            <img
              src="/static/projects/Attendance.png"
              alt=""
              className="w-full h-[36.8vw] rounded-[40px]"
            />

            <p className="mt-[25px] text-white text-[2.75rem] text-left font-['Bebas'] font-bold">
              СИСТЕМЫ КОНТРОЛЯ ПОСЕЩАЕМОСТИ
            </p>

            <a
              href=""
              className="flex items-center gap-x-[16px] mt-[20px] px-[25px] py-[20px] w-auto max-w-[237px] h-[68px] border-[1px] border-white rounded-[12px]"
            >
              <p className="text-white text-[1.5rem] text-left font-['Montserrat'] font-semibold">
                Подробнее
              </p>

              <img src="/static/ArrowRight.svg" alt="" className="w-[22px]" />
            </a>
          </div>
        </div>
      </section>

      <section className="relative pt-[185px] px-[135px] w-full h-auto">
        <h2 className="max-w-[650px] text-white text-[5.3125rem] font-['Bebas'] font-bold leading-[1] uppercase">
          <b className="text-[#00c9d7]">С</b>ТАНЬ ЧАСТЬЮ НАШЕЙ <br />
          IT-СЕМЬИ!
        </h2>

        <div className="grid grid-cols-2 gap-x-[85px] items-center mt-[90px] w-full h-auto">
          <div className="relative w-full h-[35.4vw] bg-[url('/static/Form.png')] rounded-[35px]">
            <div className="absolute left-0 bottom-0 w-full">
              <p className="flex justify-center items-center ml-[30px] mb-[15px] w-[110px] h-[50px] bg-[#00c9d7] rounded-[10px] text-white text-[1.5rem] text-center font-['Montserrat'] font-bold uppercase">
                ШАГ 1
              </p>

              <p className="ml-[30px] mb-[30px] max-w-[355px] text-white text-[1.75rem] text-left font-['Montserrat'] font-semibold leading-[1.25]">
                Зарегистрируйтесь через форму
              </p>

              <div className="relative grid justify-items-center items-center py-[30px] w-full h-auto bg-[#0a0a0a] border-[1px] border-[#323232] rounded-[35px]">
                <a
                  href="https://forms.yandex.ru/cloud/63d3abf750569066a055fc7b/"
                  className="py-[25px] w-[75%] h-auto bg-[#202020] rounded-[20px] text-white text-[1.5rem] text-center font-['Montserrat'] font-bold uppercase"
                >
                  ЗАРЕГИСТРИРОВАТЬСЯ
                </a>

                <p className="mt-[20px] w-[75%] text-[#b4b4b4] text-[1.25rem] text-left font-['Montserrat'] font-semibold leading-[1.25]">
                  Заполните простую форму, чтобы стать частью нашего сообщества
                  и получить шанс реализовать свой потенциал в IT. Мы поможем
                  вам раскрыть свои таланты и достичь высот!
                </p>
              </div>
            </div>
          </div>

          <div className="relative w-full h-[35.4vw] bg-[url('/static/Declaration.png')] rounded-[35px]">
            <div className="absolute left-0 bottom-0 w-full">
              <p className="flex justify-center items-center ml-[30px] mb-[15px] w-[110px] h-[50px] bg-[#00c9d7] rounded-[10px] text-white text-[1.5rem] text-center font-['Montserrat'] font-bold uppercase">
                ШАГ 2
              </p>

              <p className="ml-[30px] mb-[30px] max-w-[640px] text-white text-[1.75rem] text-left font-['Montserrat'] font-semibold leading-[1.25]">
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

                <p className="mt-[20px] text-[#b4b4b4] text-[1.25rem] text-left font-['Montserrat'] font-semibold leading-[1.25]">
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
  );
};

export default MainPageContent;
