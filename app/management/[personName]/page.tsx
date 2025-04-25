import React from "react";

import { management } from "@/data/management";

import PageWrapper from "@/widgets/PageWrapper";
import PersonPageContent from "@/widgets/pageContents/PersonPageContent";

export function generateStaticParams() {
  return management.map((person: any) => ({
    personName: person.enName,
  }));
}

const Page = () => {
  return (
    <PageWrapper>
      <PersonPageContent />
    </PageWrapper>
  );
};
export default Page;
