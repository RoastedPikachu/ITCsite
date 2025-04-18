"use client";
import React, { useState, useEffect } from "react";

import { useParams } from "next/navigation";

import { management } from "@/data/management";

import PageWrapper from "@/widgets/PageWrapper";

// export function generateStaticParams() {
//   return management.map((person: any) => ({
//     personName: person.enName,
//   }));
// }

const Page = () => {
  const params = useParams();

  const [manager, setManager] = useState({} as any);

  const getTitle = (index: number) => {
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
  };

  useEffect(() => {
    const personName = params.personName;

    setManager(management.find((person) => person.enName === personName));
  }, []);
  return (
    <PageWrapper>
      <main>
        <section className="relative pt-[213px] pb-[140px] w-full">
          <div className="flex items-start gap-x-[51px] px-[135px] w-full h-auto">
            <img
              src={manager.image}
              alt=""
              className="w-[320px] h-[440px] rounded-[30px]"
            />

            <div className="grid justify-items-start gap-y-[35px] w-full max-w-[930px]">
              <h1
                dangerouslySetInnerHTML={{ __html: manager.name }}
                className="text-white text-[5.3125rem] font-['Bebas'] font-bold leading-[1] uppercase"
              ></h1>

              <p className="text-white text-[2.1875rem] text-left font-['Montserrat'] font-semibold leading-[1.25]">
                {manager.occupation}
              </p>

              {manager.quote && (
                <p className="text-white text-[2rem] text-left font-['Montserrat'] font-medium leading-[1.25] italic">
                  {manager.quote}
                </p>
              )}
            </div>
          </div>

          <p
            dangerouslySetInnerHTML={{ __html: manager.text }}
            className="mt-[50px] px-[135px] text-white text-[1.875rem] text-left font-['Montserrat'] font-medium leading-[1.25]"
          ></p>

          {manager.enName === "abutkov_iv" && (
            <div className="mt-[82px] py-[10px] px-[135px] w-full h-auto bg-[url('/static/AbutkovBg.png')] bg-cover">
              <p className="text-white text-[1.875rem] text-left font-['Montserrat'] font-medium leading-[1.25]">
                Никите Владимировичу, администрации колледжа, <br />
                Титову Николаю Георгиевичу, Мурашкину Олегу Николаевичу,
                Широкову Андрею Александровичу, Аксёновой Татьяне Геннадьевне,
                Никешиной Дарье Ивановне, Курбанову Хаджимураду, Борушко Дарье,
                Шлёновой Анастасии, Лепиловой Виктории, Ворониной Софье,
                Галаевой Софье, Широковой Арине, Горипову Адьяну, Фаберовской
                Алисе, Верхозиной Виктории, Быкову Денису, и моему верному
                другу, одному из лидеров нашей команды, человеку, который привёл
                меня в ИТС — Алексею Овчинникову:
              </p>

              <p className="mt-[20px] text-white text-[2rem] text-left font-['Montserrat'] font-medium leading-[1.25] italic">
                — «Спасибо каждому. Без вас мой путь в КИПФИНе не был бы таким
                ярким, насыщенным и запоминающимся ✨&#10084;»
              </p>
            </div>
          )}

          {manager.answers && (
            <>
              <h2 className="mt-[80px] text-white text-[5.3125rem] text-center font-['Bebas'] font-bold leading-[1] uppercase">
                <b style={{ color: "#00c9d7" }}>О</b>тветы на вопросы
              </h2>

              <div className="relative grid gap-y-[50px] mt-[72px] px-[135px] w-full h-auto">
                {manager.answers.map((answer: any, index: number) => (
                  <div
                    key={index + 1}
                    className="grid justify-items-start gap-y-[55px] py-[50px] px-[45px] w-full h-auto border-[1px] border-[#323232] rounded-[30px]"
                  >
                    <h3 className="text-white text-[3.75rem] text-left font-['Bebas'] font-bold leading-[1] uppercase">
                      {index + 1}. {getTitle(index)}
                    </h3>

                    <p className="text-white text-[1.875rem] text-left font-['Montserrat'] font-medium leading-[1.25]">
                      {answer}
                    </p>
                  </div>
                ))}
              </div>
            </>
          )}
        </section>
      </main>
    </PageWrapper>
  );
};

export default Page;
