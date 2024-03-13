"use client";

import React, { useEffect } from "react";
import CustomStepper from "./components/stepper";

export default function Survey() {
  const init = async () => { };

  useEffect(() => {
    init();
  }, []);

  useEffect(() => { }, []);

  return (
    <div className="w-3/4 flex flex-col justify-center items-center">
      <CustomStepper />
    </div>
  );
}
