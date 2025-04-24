"use client";
import React, { useEffect, useState } from "react";

import { useParams, usePathname } from "next/navigation";

import { management } from "@/data/management";
import { activists } from "@/data/activists";

import "@/styles/widgets/personPage.css";

const PersonPageContent = () => {
  const params = useParams();
  const pathname = usePathname();

  const [person, setPerson] = useState({} as any);

  const getTitle = (index: number) => {
    if (pathname.includes("management")) {
      switch (index) {
        case 0:
          return "Как вы думаете, почему именно вы заняли эту должность?";
        case 1:
          return "Какими качествами должен обладать хороший руководитель?";
        case 2:
          return "Как вы выстраиваете взаимодействие и коммуникацию внутри сообщества?";
        case 3:
          return "Как выглядит ваша идеальная команда?";
        case 4:
          return "Что бы вы хотели посоветовать подрастающим разработчикам?";
      }
    } else {
      switch (index) {
        case 0:
          return "Почему решили вступить в итс?";
        case 1:
          return "Как вы пришли к своему проекту, почему выбрали именно эту сферу?";
        case 2:
          return "Как вам удается совмещать студенческую жизнь и работу над проектами, чем вдохновляетесь?";
        case 3:
          return "Что самое интересное вы для себя выделили, будучи активистом итс?";
        case 4:
          return "Какие советы можете дать ребятам, которые только начинают свой путь в итс?";
      }
    }
  };

  useEffect(() => {
    const personName = params.personName;

    if (pathname.includes("management")) {
      setPerson(management.find((person) => person.enName === personName));
    } else {
      setPerson(activists.find((person) => person.enName === personName));
    }
  }, []);
  return (
    <main>
      <section className="persons">
        <div className="persons-top">
          <img
            src={person.image ? person.image : ""}
            alt=""
            className="persons-top-image"
          />

          <div className="persons-top-right">
            <h1
              dangerouslySetInnerHTML={{ __html: person.name }}
              className="persons-top-right-title"
            ></h1>

            <p className="persons-top-right-occupation ">{person.occupation}</p>

            {person.quote && (
              <p className="persons-top-right-quote">{person.quote}</p>
            )}
          </div>
        </div>

        {person.text && (
          <p
            dangerouslySetInnerHTML={{ __html: person.text }}
            className="persons-text"
          ></p>
        )}

        {person.enName === "abutkov_iv" && (
          <div className="persons-grattitude">
            <p className="persons-grattitude-text">
              Никите Владимировичу, администрации колледжа, <br />
              Титову Николаю Георгиевичу, Мурашкину Олегу Николаевичу, Широкову
              Андрею Александровичу, Аксёновой Татьяне Геннадьевне, Никешиной
              Дарье Ивановне, Курбанову Хаджимураду, Борушко Дарье, Шлёновой
              Анастасии, Лепиловой Виктории, Ворониной Софье, Галаевой Софье,
              Широковой Арине, Горипову Адьяну, Фаберовской Алисе, Верхозиной
              Виктории, Быкову Денису, и моему верному другу, одному из лидеров
              нашей команды, человеку, который привёл меня в ИТС — Алексею
              Овчинникову:
            </p>

            <p className="persons-grattitude-secondText">
              — «Спасибо каждому. Без вас мой путь в КИПФИНе не был бы таким
              ярким, насыщенным и запоминающимся ✨&#10084;»
            </p>
          </div>
        )}

        {person.answers.length && (
          <>
            <h2 className="persons-answers-title">
              <b style={{ color: "#00c9d7" }}>О</b>тветы на вопросы
            </h2>

            <div className="persons-answers-container">
              {person.answers.map((answer: any, index: number) => (
                <div key={index + 1} className="persons-answers-container-item">
                  <h3 className="persons-answers-container-item-title">
                    {index + 1}. {getTitle(index)}
                  </h3>

                  <p className="persons-answers-container-item-text">
                    {answer}
                  </p>
                </div>
              ))}
            </div>
          </>
        )}
      </section>
    </main>
  );
};

export default PersonPageContent;
