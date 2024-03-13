"use client";

import React from "react";
import BoxWrapper from "@/components/common/box-wrapper";
import { NextPage } from "next";
import SurveyContainer from "@/components/modules/survey/container";
import { Suspense } from 'react'
import { useParams } from "next/navigation";

function SurveyFallback() {
  return <>loading ...</>
}

const SurveyServer: NextPage<any> = async () => {
  const { locale } = useParams();
  return (
    <BoxWrapper>
      <Suspense fallback={<SurveyFallback />}>
        <div className="w-full h-screen flex justify-center items-center">
          <SurveyContainer
            params={{
              locale: locale,
            }}
          />
        </div>
      </Suspense>

    </BoxWrapper>
  );
};

export default SurveyServer;
