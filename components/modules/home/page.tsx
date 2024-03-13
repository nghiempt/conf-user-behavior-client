"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ROUTE } from "@/constant/route";

export default function Home() {
  return (
    <div className="w-3/4 flex flex-col justify-center items-center py-10">
      <div className="text-justify">
        <h1 className="text-[18px] font-semibold">Welcome to our project. The main purpose of the project is to provide an analyzed dataset on the consistency between Data Safety and Privacy Policy information, then explore user behavior before and after they have understood the privacy policy of the app they are using.</h1>
        <h1 className="text-[18px] font-semibold mt-2">I will introduce the related concepts: Note: we are targeting Android applications on the Google Play Store</h1>
        <div className="px-20">
          <h1 className="text-[18px] font-medium mt-2"><span className="text-red-500 font-semibold">Data Safety</span>: The developer will provide this information when they release their app. Google will check and display detailed information in the Data Safety section on the Store. The purpose of Data Safety is to inform users about what information the app is collecting, sharing, for what purpose, and whether it is provided to third parties or not.</h1>
          <h1 className="text-[18px] font-medium mt-2"><span className="text-red-500 font-semibold">Privacy Policy</span>: This is the detailed privacy policy content provided by the app's own website. In this section, they also specify the types of data they collect, share with users, for what purpose, and to whom?</h1>
        </div>
      </div>

      <div className="mt-10 text-justify">
        <h1 className="text-[18px] font-semibold">Based on these two pieces of information, we find that many apps are falsifying information to Google and are collecting and sharing a lot of user information when they use the app. It is noted that users rarely pay attention to reading the privacy policy before installing the app. We want to explore user behavior after they have fully understood the privacy policy, whether they continue to use the app or not.</h1>
        <h1 className="text-[18px] font-semibold mt-2">We analyze the content of Data Safety (provided by Google) with Privacy Policy (provided by the app) based on three levels of measurement:</h1>
        <div className="px-20">
          <h1 className="text-[18px] font-medium mt-2"><span className="text-red-500 font-semibold">Incorrect</span>: Information not mentioned in Data Safety but mentioned in Privacy Policy.</h1>
          <h1 className="text-[18px] font-medium mt-2"><span className="text-red-500 font-semibold">Incomplete</span>: Information mentioned in Data Safety but not complete, Privacy Policy mentions it in more detail.</h1>
          <h1 className="text-[18px] font-medium mt-2"><span className="text-red-500 font-semibold">Inconsistent</span>: Information mentioned in Data Safety is inconsistent with the information mentioned in Privacy Policy.</h1>
        </div>
      </div>

      <h1 className="text-[18px] font-semibold py-6">THIS IS AN EXAMPLE</h1>

      <div className="w-full">
        <div className="w-full h-[350px] flex justify-center items-center gap-x-2">
          <div className="w-full h-[350px] border border-gray-300 flex flex-col justify-start items-center rounded-md px-2">
            <div className="w-full py-4 bg-green-500 flex justify-center items-center mt-2 rounded-md">
              <h1 className="text-[18px] text-white font-bold">Data Safety</h1>
            </div>
            <div className="w-full flex flex-col gap-y-1 py-2">
              <h1 className="text-[18px] font-semibold">Data shared</h1>
              <div className="w-full grid grid-cols-4 gap-1">
                {
                  ['Personal Info (Name)', 'Approximate Location']?.map((item: any, index: any) => {
                    return (
                      <button
                        key={index}
                        className="bg-gray-100 text-[13px] px-2 py-1 rounded-lg text-gray-700"
                      >
                        {item}
                      </button>
                    );
                  })
                }
              </div>
            </div>
            <div className="w-full flex flex-col gap-y-1 py-2">
              <h1 className="text-[18px] font-semibold">Data collected</h1>
              <div className="w-full grid grid-cols-4 gap-1">
                {
                  ['Audio', 'Microphone']?.map((item: any, index: any) => {
                    return (
                      <button
                        key={index}
                        className="bg-gray-100 text-[13px] px-2 py-1 rounded-lg text-gray-700"
                      >
                        {item}
                      </button>
                    );
                  })
                }
              </div>
            </div>
          </div>
          <div className="w-full h-[350px] border border-gray-300 flex flex-col justify-start items-center rounded-md px-2">
            <div className="w-full py-4 bg-purple-500 flex justify-center items-center mt-2 rounded-md">
              <h1 className="text-[18px] text-white font-bold">Privacy Policy</h1>
            </div>
            <div className="w-full flex flex-col gap-y-1 py-2 text-justify">
              <h1 className="text-[18px] font-semibold">Data shared</h1>
              <p className="text-[14px]">We will collect and share your GPS location, your personal info as Name, Email, Phone, ...</p>
            </div>
            <div className="w-full flex flex-col gap-y-1 py-2 text-justify">
              <h1 className="text-[18px] font-semibold">Data collected</h1>
              <p className="text-[14px]">We will collect Audio, Mircophone and Contact</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h1 className="text-[18px] font-semibold">According to the content of the two columns above, we analyze that the app:</h1>
        <div className="w-full">
          <h1 className="text-[18px] font-medium mt-2"><span className="text-red-500 font-semibold">Incorrect</span>: Because Data Safety only mentions collecting Audio and Microphone, but Privacy Policy also mentions Contact.</h1>
          <h1 className="text-[18px] font-medium mt-2"><span className="text-red-500 font-semibold">Incomplete</span>: Because Data Safety mentions sharing Name in Personal Info, but Privacy Policy mentions sharing Email and Phone in Personal Info as well.</h1>
          <h1 className="text-[18px] font-medium mt-2"><span className="text-red-500 font-semibold">Inconsistent</span>: Because Data Safety mentions sharing approximate location, but Privacy Policy says it will share GPS as Precise Location.</h1>
        </div>
      </div>

      <div className="w-1/3 py-4 bg-blue-500 flex justify-center items-center mt-6 rounded-md cursor-pointer hover:opacity-70">
        <Link href={{
          pathname: ROUTE.CHOOSE
        }}>
          <h1 className="text-[18px] text-white font-bold">I Understand - Start Survey</h1>
        </Link>
      </div>
    </div>
  );
}
