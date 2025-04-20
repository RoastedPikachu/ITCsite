import React from "react";

import PageWrapper from "@/widgets/PageWrapper";

const Page = () => {
  return (
    <PageWrapper>
      <main>
        <section className="relative pt-[213px] pb-[140px] px-[135px] w-full">
          <h1 className="max-w-[670px] text-white text-[5.3125rem] font-['Bebas'] font-bold leading-[1] uppercase">
            <b className="text-[#00c9d7]">3D-печать:</b> воплощаем идеи в
            реальность
          </h1>

          <div className="flex justify-between items-center mt-[90px] w-full h-auto">
            <div className="relative grid gap-y-[25px] w-[30%] h-[36.8vw]">
              <img
                src="/static/3dprint/Kipfin.png"
                alt=""
                className="w-full h-full"
              />

              <p className="text-white text-[3.125rem] text-left font-['Bebas'] font-bold leading-[1] uppercase">
                3Д МОДЕЛЬ <b className="text-[#00c9d7]">КИПФИН</b>
              </p>
            </div>

            <div className="relative grid gap-y-[25px] w-[30%] h-[36.8vw]">
              <img
                src="/static/3dprint/Robot.png"
                alt=""
                className="w-full h-full"
              />

              <p className="text-white text-[3.125rem] text-left font-['Bebas'] font-bold leading-[1] uppercase">
                3Д МОДЕЛЬ <b className="text-[#00c9d7]">РОБОТ ИТС</b>
              </p>
            </div>

            <div className="relative grid gap-y-[25px] w-[30%] h-[36.8vw]">
              <img
                src="/static/3dprint/Microcircuit.png"
                alt=""
                className="w-full h-full"
              />

              <p className="text-white text-[3.125rem] text-left font-['Bebas'] font-bold leading-[1] uppercase">
                3Д МОДЕЛЬ <b className="text-[#00c9d7]">МИКРОСХЕМА ИТС</b>
              </p>
            </div>
          </div>
        </section>
      </main>
    </PageWrapper>
  );
};

export default Page;
