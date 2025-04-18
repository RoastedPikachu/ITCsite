import PageWrapper from "@/widgets/PageWrapper";

export default function Home() {
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
      </main>
    </PageWrapper>
  );
}
