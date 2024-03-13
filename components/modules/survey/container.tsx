"use client";

import React from "react";
import BoxWrapper from "@/components/common/box-wrapper";
import { NextPage } from "next";
import Header from "@/components/common/_header";
import Footer from "@/components/common/_footer";
import Survey from "./page";

interface SurveyContainerProps {
  params: {
    locale: string;
  };
}

const SurveyContainer: NextPage<SurveyContainerProps> = async ({
  params: { locale },
}) => {
  return (
    <BoxWrapper>
      <div className="w-full flex justify-center items-center">
        <div className="w-full flex flex-col justify-start items-center">
          <Header />
          <Survey />
        </div>
      </div>
    </BoxWrapper>
  );
};

export default SurveyContainer;
