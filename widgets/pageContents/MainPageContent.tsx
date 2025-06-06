"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "@/styles/widgets/mainPage.css";
import Link from "next/link";

const MainPageContent = () => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
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

        <div className="greetingsSection-total">
          <a
            href="https://t.me/halfcoder/312"
            target="_blank"
            className="greetingsSection-yearTotal"
          >
            <button className="greetingsSection-yearTotal-button">
              <img src="/static/play.svg" alt="" />
            </button>

            <p className="greetingsSection-yearTotal-text">
              Подведение итогов года Остапенко Григорием Александровичем в
              КИПФИН
            </p>
          </a>

          <a
            href="https://teletype.in/@wszug/G4xvL1X2stz"
            target="_blank"
            className="greetingsSection-total-booklet"
          >
            Наш буклет
          </a>
        </div>

        <img
          src="/static/GreetingsBackgroundDarknessDecorationBottom.png"
          alt=""
          className="greetingsSection-bottomDecoration"
        />
      </section>

      <section id="Management" className="managersSection">
        <h2 className="managersSection-title">
          <b className="managersSection-title-bold">Р</b>уководство
          <br /> нашего сообщества
        </h2>

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
                    Дёмкина Надежда Ибрагимовна
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

      <section id="Activists" className="activistsSection">
        <h2 className="activistsSection-title">
          <b className="activistsSection-title-bold">А</b>ктивисты
          <br /> нашего сообщества
        </h2>

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
                    href={"/activists/bykov_da"}
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
                    href={"/activists/latysheva_am"}
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
                    href={"/activists/sattarova_szk"}
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
                    href={"/activists/karabut_be"}
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
                    href={"/activists/kuznetsova_ks"}
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
                    href={"/activists/kalinicheva_ev"}
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
              <div className="slider-item bg-[url('/static/activists/Marykina.png')]">
                <div className="slider-item-content">
                  <p className="slider-item-content-name">
                    Марыкина Елизавета Олеговна
                  </p>

                  <Link
                    href={"/activists/marykina_eo"}
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
              <div className="slider-item bg-[url('/static/activists/Sobolenko.png')]">
                <div className="slider-item-content">
                  <p className="slider-item-content-name">
                    Соболенко Анна Романовна
                  </p>

                  <Link
                    href={"/activists/sobolenko_ar"}
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
              <div className="slider-item bg-[url('/static/activists/Kochetkova.png')]">
                <div className="slider-item-content">
                  <p className="slider-item-content-name">
                    Кочеткова Ксения Александровна
                  </p>

                  <Link
                    href={"/activists/kochetkova_ka"}
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
              <div className="slider-item bg-[url('/static/activists/Uspanova.png')]">
                <div className="slider-item-content">
                  <p className="slider-item-content-name">
                    Успанова Азиза Рифкатовна
                  </p>

                  <Link
                    href={"/activists/uspanova_ar"}
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
              <div className="slider-item bg-[url('/static/activists/Shabanov.png')]">
                <div className="slider-item-content">
                  <p className="slider-item-content-name">
                    Глеб Дмитриевич Шабанов
                  </p>

                  <Link
                    href={"/activists/shabanov_gd"}
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
              <div className="slider-item bg-[url('/static/activists/Yakovenko.png')]">
                <div className="slider-item-content">
                  <p className="slider-item-content-name">
                    Яковенко Михаил Константинович
                  </p>

                  <Link
                    href={"/activists/yakovenko_mk"}
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
              <div className="slider-item bg-[url('/static/activists/Suhina.png')]">
                <div className="slider-item-content">
                  <p className="slider-item-content-name">
                    Сухина Валерия Романовна
                  </p>

                  <Link
                    href={"/activists/suhina_vr"}
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
              <div className="slider-item bg-[url('/static/activists/Andreeva.png')]">
                <div className="slider-item-content">
                  <p className="slider-item-content-name">
                    Андреева Виктория Алексеевна
                  </p>

                  <Link
                    href={"/activists/andreeva_va"}
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
              <div className="slider-item bg-[url('/static/activists/Solonov.png')]">
                <div className="slider-item-content">
                  <p className="slider-item-content-name">
                    Солонов Андрей Дмитриевич
                  </p>

                  <Link
                    href={"/activists/solonov_ad"}
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
              <div className="slider-item bg-[url('/static/activists/Nazimkina.png')]">
                <div className="slider-item-content">
                  <p className="slider-item-content-name">
                    Назимкина Юлия Всеволодовна
                  </p>

                  <Link
                    href={"/activists/nazimkina_yv"}
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
              <div className="slider-item bg-[url('/static/activists/Zatravkin.png')]">
                <div className="slider-item-content">
                  <p className="slider-item-content-name">
                    Затравкин Алексей Дмитриевич
                  </p>

                  <Link
                    href={"/activists/zatravkin_ad"}
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
              <div className="slider-item bg-[url('/static/activists/Trofimov.png')]">
                <div className="slider-item-content">
                  <p className="slider-item-content-name">
                    Трофимов Матвей Михайлович
                  </p>

                  <Link
                    href={"/activists/trofimov_mm"}
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
              <div className="slider-item bg-[url('/static/activists/Lylina.png')]">
                <div className="slider-item-content">
                  <p className="slider-item-content-name">
                    Люлина Мария Александровна
                  </p>

                  <Link
                    href={"/activists/lylina_ma"}
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
              <div className="slider-item bg-[url('/static/activists/Kozlov.png')]">
                <div className="slider-item-content">
                  <p className="slider-item-content-name">
                    Козлов Сергей Дмитриевич
                  </p>

                  <Link
                    href={"/activists/kozlov_sd"}
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
              <div className="slider-item bg-[url('/static/activists/Kashirin.png')]">
                <div className="slider-item-content">
                  <p className="slider-item-content-name">
                    Каширин Константин Валентинович
                  </p>

                  <Link
                    href={"/activists/kashirin_kv"}
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
              <div className="slider-item bg-[url('/static/activists/Vaganov.png')]">
                <div className="slider-item-content">
                  <p className="slider-item-content-name">
                    Ваганов Андрей Александрович
                  </p>

                  <Link
                    href={"/activists/vaganov_aa"}
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
              <div className="slider-item bg-[url('/static/activists/Zalutskaya.png')]">
                <div className="slider-item-content">
                  <p className="slider-item-content-name">
                    Залуцкая Ксения Викторовна
                  </p>

                  <Link
                    href={"/activists/zalutskaya_kv"}
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
              <div className="slider-item bg-[url('/static/activists/Pogosyan.png')]">
                <div className="slider-item-content">
                  <p className="slider-item-content-name">
                    Погосян Арсений Артурович
                  </p>

                  <Link
                    href={"/activists/pogosyan_aa"}
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
              <div className="slider-item bg-[url('/static/activists/Pushkarev.png')]">
                <div className="slider-item-content">
                  <p className="slider-item-content-name">
                    Пушкарев Александр Николаевич
                  </p>

                  <Link
                    href={"/activists/pushkarev_an"}
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
              <div className="slider-item bg-[url('/static/activists/Trusov.png')]">
                <div className="slider-item-content">
                  <p className="slider-item-content-name">
                    Трусов Александр Дмитриевич
                  </p>

                  <Link
                    href={"/activists/trusov_ad"}
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
              <div className="slider-item bg-[url('/static/activists/Shtannikov.png')]">
                <div className="slider-item-content">
                  <p className="slider-item-content-name">
                    Штанников Даниил Игоревич
                  </p>

                  <Link
                    href={"/activists/shtannikov_di"}
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

      <section id="Ways" className="projectsSection">
        <h2 className="projectsSection-title">
          <b className="projectsSection-title-bold">К</b>АРТА IT-ГОРИЗОНТОВ:
          <br /> НАШИ НАПРАВЛЕНИЯ
        </h2>

        <div className="projectsSection-container">
          <div className="projectsSection-container-item bg-[url('/static/Development.png')]">
            <p className="projectsSection-container-item-text">
              Проектная деятельность
            </p>
          </div>

          <div className="projectsSection-container-item bg-[url('/static/Media.png')]">
            <p className="projectsSection-container-item-text">
              Медиа и менеджмент
            </p>
          </div>

          <Link
            href="/3dprint"
            className="projectsSection-container-item bg-[url('/static/Development.png')]"
          >
            <p className="projectsSection-container-item-text">3D печать</p>

            <img
              src="/static/link.svg"
              alt=""
              className="projectsSection-container-item-image"
            />
          </Link>
        </div>
      </section>

      <section id="Projects" className="resultsSection">
        <h2 className="resultsSection-title">
          <b className="resultsSection-title-bold">IT</b>-ПРОЕКТЫ: ОТ КОДА
          <br /> ДО ВОПЛОЩЕНИЯ
        </h2>

        <div className="resultsSection-container">
          <div className="resultsSection-container-item">
            <img
              src="/static/TopProject.png"
              alt=""
              className="resultsSection-container-item-decoration"
            />

            <img
              src="/static/projects/HelperKip.png"
              alt=""
              className="resultsSection-container-item-image"
            />

            <p className="resultsSection-container-item-text">
              КИПФИН ПОМОЩНИК 🔥
            </p>

            <a
              href="https://t.me/HelperKipBot"
              target="_blank"
              className="resultsSection-container-item-link"
            >
              <p className="resultsSection-container-item-link-text">
                Подробнее
              </p>

              <img
                src="/static/ArrowRight.svg"
                alt=""
                className="resultsSection-container-item-link-img"
              />
            </a>
          </div>

          <div className="resultsSection-container-item">
            <img
              src="/static/TopProject.png"
              alt=""
              className="resultsSection-container-item-decoration"
            />

            <img
              src="/static/projects/Znakomstva.png"
              alt=""
              className="resultsSection-container-item-image"
            />

            <p className="resultsSection-container-item-text">ЗНАКОМСТВА 🔥</p>

            <a
              href="https://t.me/znakomstva_searchbot"
              target="_blank"
              className="resultsSection-container-item-link"
            >
              <p className="resultsSection-container-item-link-text">
                Подробнее
              </p>

              <img
                src="/static/ArrowRight.svg"
                alt=""
                className="resultsSection-container-item-link-img"
              />
            </a>
          </div>

          <div className="resultsSection-container-item">
            <img
              src="/static/TopProject.png"
              alt=""
              className="resultsSection-container-item-decoration"
            />

            <img
              src="/static/projects/3DTour.png"
              alt=""
              className="resultsSection-container-item-image"
            />

            <p className="resultsSection-container-item-text">
              3D ТУР КИПФИН 🔥
            </p>

            <a
              href="https://tour.panoee.net/65e08e217a73f2feff4db099/65e08e717a73f212cb4db0ac"
              target="_blank"
              className="resultsSection-container-item-link"
            >
              <p className="resultsSection-container-item-link-text">
                Подробнее
              </p>

              <img
                src="/static/ArrowRight.svg"
                alt=""
                className="resultsSection-container-item-link-img"
              />
            </a>
          </div>

          <div className="resultsSection-container-item">
            <img
              src="/static/TopProject.png"
              alt=""
              className="resultsSection-container-item-decoration"
            />

            <img
              src="/static/projects/WeLike.png"
              alt=""
              className="resultsSection-container-item-image"
            />

            <p className="resultsSection-container-item-text">
              У НАС ЛЮБЯТ ❤️ 🔥
            </p>

            <a
              href="https://t.me/like_board"
              target="_blank"
              className="resultsSection-container-item-link"
            >
              <p className="resultsSection-container-item-link-text">
                Подробнее
              </p>

              <img
                src="/static/ArrowRight.svg"
                alt=""
                className="resultsSection-container-item-link-img"
              />
            </a>
          </div>

          <div className="resultsSection-container-item">
            <img
              src="/static/TopProject.png"
              alt=""
              className="resultsSection-container-item-decoration"
            />

            <img
              src="/static/projects/Podcasts.png"
              alt=""
              className="resultsSection-container-item-image"
            />

            <p className="resultsSection-container-item-text">
              ИТС ПОДКАСТЫ 🔥
            </p>

            <a
              href="https://t.me/halfcoder"
              target="_blank"
              className="resultsSection-container-item-link"
            >
              <p className="resultsSection-container-item-link-text">
                Подробнее
              </p>

              <img
                src="/static/ArrowRight.svg"
                alt=""
                className="resultsSection-container-item-link-img"
              />
            </a>
          </div>

          <div className="resultsSection-container-item">
            <img
              src="/static/projects/Publishing.png"
              alt=""
              className="resultsSection-container-item-image"
            />

            <p className="resultsSection-container-item-text">ИТС ПУБЛИКАЦИИ</p>

            <a
              href="https://t.me/halfcoder"
              target="_blank"
              className="resultsSection-container-item-link"
            >
              <p className="resultsSection-container-item-link-text">
                Подробнее
              </p>

              <img
                src="/static/ArrowRight.svg"
                alt=""
                className="resultsSection-container-item-link-img"
              />
            </a>
          </div>

          <div className="resultsSection-container-item">
            <img
              src="/static/projects/Support.png"
              alt=""
              className="resultsSection-container-item-image"
            />

            <p className="resultsSection-container-item-text">
              КИПФИН ПОДДЕРЖКА
            </p>

            <a
              href="https://t.me/ItcProjects"
              target="_blank"
              className="resultsSection-container-item-link"
            >
              <p className="resultsSection-container-item-link-text">
                Подробнее
              </p>

              <img
                src="/static/ArrowRight.svg"
                alt=""
                className="resultsSection-container-item-link-img"
              />
            </a>
          </div>

          <div className="resultsSection-container-item">
            <img
              src="/static/projects/ProjectsSystem.png"
              alt=""
              className="resultsSection-container-item-image"
            />

            <p className="resultsSection-container-item-text">
              СИСТЕМА ПРОЕКТОВ ИТС
            </p>

            <a
              href="https://itc-team.ru"
              target="_blank"
              className="resultsSection-container-item-link"
            >
              <p className="resultsSection-container-item-link-text">
                Подробнее
              </p>

              <img
                src="/static/ArrowRight.svg"
                alt=""
                className="resultsSection-container-item-link-img"
              />
            </a>
          </div>

          <div className="resultsSection-container-item">
            <img
              src="/static/projects/Helldivers.png"
              alt=""
              className="resultsSection-container-item-image"
            />

            <p className="resultsSection-container-item-text">
              САЙТ ДЛЯ ИГРЫ Helldivers
            </p>

            <a
              href="https://helldivers.help"
              target="_blank"
              className="resultsSection-container-item-link"
            >
              <p className="resultsSection-container-item-link-text">
                Подробнее
              </p>

              <img
                src="/static/ArrowRight.svg"
                alt=""
                className="resultsSection-container-item-link-img"
              />
            </a>
          </div>

          <div className="resultsSection-container-item">
            <img
              src="/static/projects/Attendance.png"
              alt=""
              className="resultsSection-container-item-image"
            />

            <p className="resultsSection-container-item-text">
              СИСТЕМЫ КОНТРОЛЯ ПОСЕЩАЕМОСТИ
            </p>
          </div>

          <div className="resultsSection-container-item">
            <img
              src="/static/projects/Zov.png"
              alt=""
              className="resultsSection-container-item-image"
            />

            <p className="resultsSection-container-item-text">
              КОМИКС ЗОВ ВОСПОМИНАНИЙ
            </p>

            <a
              href="https://teletype.in/@cat_evelina_02/Callofmemories"
              target="_blank"
              className="resultsSection-container-item-link"
            >
              <p className="resultsSection-container-item-link-text">
                Подробнее
              </p>

              <img
                src="/static/ArrowRight.svg"
                alt=""
                className="resultsSection-container-item-link-img"
              />
            </a>
          </div>
        </div>
      </section>

      <section id="ITC" className="formsSection">
        <h2 className="formsSection-title">
          <b className="formsSection-title-bold">С</b>ТАНЬ ЧАСТЬЮ НАШЕЙ <br />
          IT-СЕМЬИ!
        </h2>

        <div className="formsSection-container">
          <div className="formsSection-container-item bg-[url('/static/Form.png')]">
            <div className="formsSection-container-item-content">
              <p className="formsSection-container-item-step">ШАГ 1</p>

              <p className="formsSection-container-item-description">
                Зарегистрируйтесь через форму
              </p>

              <div className="formsSection-container-item-buttonWrapper">
                <a
                  href="https://forms.yandex.ru/cloud/63d3abf750569066a055fc7b/"
                  className="formsSection-container-item-buttonWrapper-button"
                >
                  ЗАРЕГИСТРИРОВАТЬСЯ
                </a>

                <p className="formsSection-container-item-buttonWrapper-text">
                  Заполните простую форму, чтобы стать частью нашего сообщества
                  и получить шанс реализовать свой потенциал в IT. Мы поможем
                  вам раскрыть свои таланты и достичь высот!
                </p>
              </div>
            </div>
          </div>

          <div className="formsSection-container-item bg-[url('/static/Declaration.png')]">
            <div className="formsSection-container-item-content">
              <p className="formsSection-container-item-step">ШАГ 2</p>

              <p className="formsSection-container-item-description">
                Заполните заявление в свободной форме и передайте его в 104
                кабинет
              </p>

              <div className="formsSection-container-item-buttonWrapper">
                <a
                  href="/static/docs/Zayavlenie-na-vstuplenie-v-ITS.docx"
                  className="formsSection-container-item-buttonWrapper-button"
                >
                  СКАЧАТЬ ЗАЯВЛЕНИЕ
                </a>

                <p className="formsSection-container-item-buttonWrapper-text">
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

      <section className="documentsSection">
        <h2 className="documentsSection-title">
          <b className="documentsSection-title-bold">Д</b>ОКУМЕНТЫ ИТС
        </h2>

        <div className="documentsSection-container">
          <div className="documentsSection-container-item">
            <p className="documentsSection-container-item-text">
              NDA (Соглашение о конфиденциальности и неразглашении информации)
            </p>

            <a
              href="/static/docs/NDA.docx"
              className="documentsSection-container-item-link"
            >
              <img src="/static/download.svg" alt="" />
            </a>
          </div>

          <div className="documentsSection-container-item">
            <p className="documentsSection-container-item-text">
              Заявление на вступление
            </p>

            <a
              href="/static/docs/Zayavlenie-na-vstuplenie-v-ITS.docx"
              className="documentsSection-container-item-link"
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
