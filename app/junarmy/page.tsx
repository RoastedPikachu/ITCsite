import React from "react";

import PageWrapper from "@/widgets/PageWrapper";

const Page = () => {
  return (
    <PageWrapper>
      <main>
        <section className="relative pt-[213px] pb-[140px] px-[135px] w-full">
          <img
            src="/static/junarmy/JunarmyBanner.png"
            alt=""
            className="w-full h-[31.5vw]"
          />

          <h1 className="mt-[50px] text-white text-[7.1875rem] font-['Bebas'] font-bold leading-[1] uppercase">
            <b className="text-[#00c9d7]">П</b>АТРИОТИЧЕСКИЙ КЛУБ{" "}
            <b className="text-[#e02307]">ЮНАРМИЯ</b>
          </h1>

          <p className="mt-[50px] max-w-[1240px] text-white text-[1.875rem] text-left font-['Montserrat'] font-medium leading-[1.25]">
            Юнармия - Всероссийское военно-патриотическое общественное движение.
            Мы - команда студентов, которые стремятся поддерживать и развивать
            патриотизм и традиционные ценности России. Участие в патриотическом
            клубе развивает не только физические навыки, но и необходимые в
            нашей жизни человеку качества: лидерство, умение работать в команде,
            умение выступать на сцене, коммуникативные и организаторские навыки.
            Присоединяйся в нашу дружную семью!
          </p>

          <div className="mt-[185px]">
            <h2 className=" text-white text-[5.3125rem] font-['Bebas'] font-bold leading-[1] uppercase">
              <b className="text-[#e02307]">Юнармейцы:</b>
              <br /> учеба, спорт, патриотизм
            </h2>

            <div className="relative grid grid-cols-3 gap-x-[75px] gap-y-[90px] mt-[90px] w-full h-auto">
              <div className="relative py-[30px] px-[30px] w-full h-[35.4vw] bg-[url('/static/junarmy/Slobodenuk.png')] bg-cover border-[1px] border-[#323232] rounded-[40px]">
                <div className="absolute bottom-[30px] left-[30px]">
                  <p className="max-w-[337px] text-white text-[2.1875rem] text-left font-['Montserrat'] font-semibold leading-[1.375]">
                    Слободенюк Никита Владимирович
                  </p>

                  <p className="mt-[23px] pl-[17px] py-[22px] max-w-[380px] border-[1px] border-[#e02307] rounded-[10px] text-white text-[1.375rem] text-left font-['Montserrat'] font-semibold">
                    Координатор отряда
                  </p>
                </div>
              </div>
              <div className="relative w-full h-[35.4vw] bg-[url('/static/junarmy/Slobodenuk.png')] bg-cover border-[1px] border-[#323232] rounded-[40px]"></div>
              <div className="relative w-full h-[35.4vw] bg-[url('/static/junarmy/Slobodenuk.png')] bg-cover border-[1px] border-[#323232] rounded-[40px]"></div>
            </div>
          </div>

          <div className="mt-[185px]">
            <h2 className=" text-white text-[5.3125rem] font-['Bebas'] font-bold leading-[1] uppercase">
              <b className="text-[#e02307]">Юнармейцы:</b>
              <br /> МЕДИА ГРУППА
            </h2>

            <div className="relative grid grid-cols-3 gap-x-[75px] gap-y-[90px] mt-[90px] w-full h-auto">
              <div className="relative py-[30px] px-[30px] w-full h-[650px] bg-[url('/static/junarmy/Slobodenuk.png')] border-[1px] border-[#323232] rounded-[40px]">
                <div className="absolute bottom-[30px] left-[30px]">
                  <p className="text-white text-[2.1875rem] text-left font-['Montserrat'] font-semibold leading-[1.375]">
                    Слободенюк Никита Владимирович
                  </p>

                  <p className="mt-[23px] pl-[17px] py-[22px] max-w-[380px] border-[1px] border-[#e02307] rounded-[10px] text-white text-[1.375rem] text-left font-['Montserrat'] font-semibold">
                    Координатор отряда
                  </p>
                </div>
              </div>
              <div className="relative w-full h-[650px] bg-[url('/static/junarmy/Slobodenuk.png')] border-[1px] border-[#323232] rounded-[40px]"></div>
              <div className="relative w-full h-[650px] bg-[url('/static/junarmy/Slobodenuk.png')] border-[1px] border-[#323232] rounded-[40px]"></div>
            </div>
          </div>

          <p className="mt-[50px] max-w-[1250px] text-white text-[1.875rem] text-left font-['Montserrat'] font-medium leading-[1.25]">
            Мы занимаемся освещением жизни нашего отряда. Фотографии, истории,
            видео, посты и многое другое - это всё делают Андреева и Лопатина
            Виктории. С самого основания наши социальные сети развиваются как и
            мы. Посты о нашей жизни становятся каждый раз всё лучше и
            интереснее. Подписывайте на нас в Телеграмм и в ВКонтакте, будем вас
            ждать!
          </p>

          <div className="mt-[185px]">
            <h2 className="max-w-[650px] text-white text-[5.3125rem] font-['Bebas'] font-bold leading-[1] uppercase">
              <b className="text-[#e02307]">П</b>ополни ряды юных патриотов
            </h2>

            <div className="grid grid-cols-2 gap-x-[85px] items-center mt-[90px] w-full h-auto">
              <div className="relative w-full h-[27.5vw] bg-[url('/static/junarmy/Registration.png')] rounded-[35px]">
                <div className="absolute left-0 bottom-0 w-full">
                  <p className="flex justify-center items-center ml-[30px] mb-[15px] w-[110px] h-[50px] bg-[#e02307] rounded-[10px] text-white text-[1.5rem] text-center font-['Montserrat'] font-bold uppercase">
                    ШАГ 1
                  </p>

                  <p className="ml-[30px] mb-[30px] max-w-[355px] text-white text-[1.975rem] text-left font-['Montserrat'] font-semibold leading-[1.25]">
                    Зарегистрируйтесь через форму
                  </p>

                  <div className="relative flex justify-center items-center w-full h-[194px] bg-[#0a0a0a] border-[1px] border-[#323232] rounded-[35px]">
                    <a
                      href=""
                      className="py-[25px] w-[75%] h-auto bg-[#202020] rounded-[20px] text-white text-[1.5rem] text-center font-['Montserrat'] font-bold uppercase"
                    >
                      ЗАРЕГИСТРИРОВАТЬСЯ
                    </a>
                  </div>
                </div>
              </div>

              <div className="relative w-full h-[27.5vw] bg-[url('/static/junarmy/Declaration.png')] rounded-[35px]">
                <div className="absolute left-0 bottom-0 w-full">
                  <p className="flex justify-center items-center ml-[30px] mb-[15px] w-[110px] h-[50px] bg-[#e02307] rounded-[10px] text-white text-[1.5rem] text-center font-['Montserrat'] font-bold uppercase">
                    ШАГ 2
                  </p>

                  <p className="ml-[30px] mb-[30px] max-w-[640px] text-white text-[1.975rem] text-left font-['Montserrat'] font-semibold leading-[1.25]">
                    Заполните заявление и передайте его в 104 кабинет
                  </p>

                  <div className="relative flex justify-center items-center w-full h-[194px] bg-[#0a0a0a] border-[1px] border-[#323232] rounded-[35px]">
                    <a
                      href=""
                      className="py-[25px] w-[75%] h-auto bg-[#202020] rounded-[20px] text-white text-[1.5rem] text-center font-['Montserrat'] font-bold uppercase"
                    >
                      СКАЧАТЬ ЗАЯВЛЕНИЕ
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageWrapper>
  );
};

export default Page;
