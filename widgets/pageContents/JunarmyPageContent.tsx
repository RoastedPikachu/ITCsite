"use client";
import React, { useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "@/styles/widgets/junarmyPage.css";

const JunarmyPageContent = () => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  return (
    <main>
      <section className="junarmySection">
        <img
          src="/static/junarmy/JunarmyBanner.png"
          alt=""
          className="junarmySection-banner"
        />

        <h1 className="junarmySection-title">
          <b className="junarmySection-title-blueBold">П</b>АТРИОТИЧЕСКИЙ КЛУБ{" "}
          <b className="junarmySection-title-redBold">ЮНАРМИЯ</b>
        </h1>

        <p className="junarmySection-text">
          Юнармия - Всероссийское военно-патриотическое общественное движение.
          Мы - команда студентов, которые стремятся поддерживать и развивать
          патриотизм и традиционные ценности России. Участие в патриотическом
          клубе развивает не только физические навыки, но и необходимые в нашей
          жизни человеку качества: лидерство, умение работать в команде, умение
          выступать на сцене, коммуникативные и организаторские навыки.
          Присоединяйся в нашу дружную семью!
        </p>

        <div className="junarmySection-container">
          <h2 className="junarmySection-container-title">
            <b className="junarmySection-container-title-bold">Юнармейцы:</b>
            <br /> учеба, спорт, патриотизм
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
                <div className="slider-item">
                  <div className="slider-item-content">
                    <p className="slider-item-content-name">
                      Слободенюк Никита Владимирович
                    </p>

                    <p className="slider-item-content-occupation">
                      Координатор отряда
                    </p>
                  </div>
                </div>
              )}
            </SwiperSlide>

            <SwiperSlide>
              {() => (
                <div className="slider-item">
                  <div className="slider-item-content">
                    <p className="slider-item-content-name">
                      Ретюнских Кирилл Александрович
                    </p>

                    <p className="slider-item-content-occupation">
                      Командир отряда
                    </p>
                  </div>
                </div>
              )}
            </SwiperSlide>

            <SwiperSlide>
              {() => (
                <div className="slider-item">
                  <div className="slider-item-content">
                    <p className="slider-item-content-name">
                      Саттарова Севара Жахонгир Кизи
                    </p>

                    <p className="slider-item-content-occupation">
                      Заместитель командира по внешним мероприятиям
                    </p>
                  </div>
                </div>
              )}
            </SwiperSlide>

            <SwiperSlide>
              {() => (
                <div className="slider-item">
                  <div className="slider-item-content">
                    <p className="slider-item-content-name">
                      Лопатина Виктория Владимировна
                    </p>

                    <p className="slider-item-content-occupation">
                      Заместитель командира по внешним и внутренним мероприятиям
                    </p>
                  </div>
                </div>
              )}
            </SwiperSlide>

            <SwiperSlide>
              {() => (
                <div className="slider-item">
                  <div className="slider-item-content">
                    <p className="slider-item-content-name">
                      Андреева Виктория Алексеевна
                    </p>

                    <p className="slider-item-content-occupation">
                      Заместитель командира по внутренним мероприятиям
                    </p>
                  </div>
                </div>
              )}
            </SwiperSlide>

            <SwiperSlide>
              {() => (
                <div className="slider-item">
                  <div className="slider-item-content">
                    <p className="slider-item-content-name">
                      Саттарова Севара Жахонгир Кизи
                    </p>

                    <p className="slider-item-content-occupation">
                      Менеджер по патриотическому воспитанию
                    </p>
                  </div>
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
        </div>

        <div className="junarmySection-container">
          <h2 className="junarmySection-container-title">
            <b className="junarmySection-container-title-bold">Юнармейцы:</b>
            <br /> МЕДИА ГРУППА
          </h2>

          <Swiper
            spaceBetween={60}
            slidesPerView={3}
            initialSlide={0}
            className="slider"
          >
            <SwiperSlide>
              {() => (
                <div className="slider-item">
                  <div className="slider-item-content">
                    <p className="slider-item-content-name">
                      Лопатина Виктория Владимировна
                    </p>
                  </div>
                </div>
              )}
            </SwiperSlide>

            <SwiperSlide>
              {() => (
                <div className="slider-item">
                  <div className="slider-item-content">
                    <p className="slider-item-content-name">
                      Андреева Виктория Алексеевна
                    </p>
                  </div>
                </div>
              )}
            </SwiperSlide>
          </Swiper>
        </div>

        <p className="junarmySection-text">
          Мы занимаемся освещением жизни нашего отряда. Фотографии, истории,
          видео, посты и многое другое - это всё делают Андреева и Лопатина
          Виктории. С самого основания наши социальные сети развиваются как и
          мы. Посты о нашей жизни становятся каждый раз всё лучше и интереснее.
          Подписывайте на нас в Телеграмм и в ВКонтакте, будем вас ждать!
        </p>

        <div className="junarmySection-recruit">
          <h2 className="junarmySection-recruit-title">
            <b className="junarmySection-recruit-title-bold">П</b>ополни ряды
            юных патриотов
          </h2>

          <div className="junarmySection-recruit-container">
            <div className="junarmySection-recruit-container-form bg-[url('/static/junarmy/Registration.png')]">
              <div className="junarmySection-recruit-container-form-content">
                <p className="junarmySection-recruit-container-form-content-title">
                  ШАГ 1
                </p>

                <p className="junarmySection-recruit-container-form-content-text">
                  Зарегистрируйтесь через форму
                </p>

                <div className="junarmySection-recruit-container-form-content-linkWrapper">
                  <a
                    href="https://forms.gle/oQ4U9tPNz9mMxekQ6"
                    className="junarmySection-recruit-container-form-content-linkWrapper-link"
                  >
                    ЗАРЕГИСТРИРОВАТЬСЯ
                  </a>
                </div>
              </div>
            </div>

            <div className="junarmySection-recruit-container-form bg-[url('/static/junarmy/Declaration.png')]">
              <div className="junarmySection-recruit-container-form-content">
                <p className="junarmySection-recruit-container-form-content-title">
                  ШАГ 2
                </p>

                <p className="junarmySection-recruit-container-form-content-text">
                  Заполните заявление и передайте его в 104 кабинет
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default JunarmyPageContent;
