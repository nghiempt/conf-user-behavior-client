"use client";

import React from "react";
import BoxWrapper from "@/components/common/box-wrapper";
import { NextPage } from "next";
import Header from "@/components/common/_header";
import Footer from "@/components/common/_footer";
import Choose from "./page";

interface ChooseContainerProps {
  params: {
    locale: string;
  };
}

const ChooseContainer: NextPage<ChooseContainerProps> = async ({
  params: { locale },
}) => {
  return (
    <BoxWrapper>
      <div className="w-full flex justify-center items-center">
        <div className="w-full flex flex-col justify-start items-center">
          <Header />
          <Choose />
          {/* <Footer /> */}
        </div>
      </div>
    </BoxWrapper>
  );
};

export default ChooseContainer;
