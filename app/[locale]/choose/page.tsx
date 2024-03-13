'use client';

import React from "react";
import BoxWrapper from "@/components/common/box-wrapper";
import { NextPage } from "next";
import ChooseContainer from "@/components/modules/choose/container";
import { Suspense } from 'react'
import { useParams } from "next/navigation";

function ChooseFallback() {
  return <>loading ...</>
}

const ChooseServer: NextPage<any> = async () => {
  const { locale } = useParams();
  return (
    <BoxWrapper>
      <Suspense fallback={<ChooseFallback />}>
        <div className="w-full h-screen flex justify-center items-center">
          <ChooseContainer
            params={{
              locale: locale,
            }}
          />
        </div>
      </Suspense>

    </BoxWrapper>
  );
};

export default ChooseServer;
