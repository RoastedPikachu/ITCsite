import React from "react";

import TheHeader from "@/widgets/header/TheHeader";
import TheFooter from "@/widgets/footer/TheFooter";

const PageWrapper: React.FC<{ children: any }> = ({ children }) => {
  return (
    <>
      <TheHeader />

      {children}

      <TheFooter />
    </>
  );
};

export default PageWrapper;
