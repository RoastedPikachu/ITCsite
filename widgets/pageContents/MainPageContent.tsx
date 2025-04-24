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

        <a
          href="https://t.me/halfcoder/312"
          className="greetingsSection-yearTotal"
        >
          <button className="greetingsSection-yearTotal-button">
            <img src="/static/play.svg" alt="" />
          </button>

          <p className="greetingsSection-yearTotal-text">
            Подведение итогов года Остапенко Григорием Александровичем в КИПФИН
          </p>
        </a>

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

            <p className="resultsSection-container-item-text">ИТС ПОДКАСТЫ</p>

            <a
              href="https://t.me/halfcoder"
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
              href="https://t.me/ItcProjects"
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

            <a href="" className="resultsSection-container-item-link">
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
