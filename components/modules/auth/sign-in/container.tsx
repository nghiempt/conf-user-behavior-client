"use client";

import React from "react";
import BoxWrapper from "@/components/common/box-wrapper";
import { NextPage } from "next";
import Header from "@/components/common/_header";
import SignIn from "./sign-in";

interface SignInContainerProps {
  params: {
    locale: string;
  };
}

const SignInContainer: NextPage<SignInContainerProps> = async ({
  params: { locale },
}) => {
  return (
    <BoxWrapper>
      <div className="w-full flex justify-center items-center">
        <div className="w-full flex flex-col justify-start items-center">
          <Header />
          <SignIn />
        </div>
      </div>
    </BoxWrapper>
  );
};

export default SignInContainer;
