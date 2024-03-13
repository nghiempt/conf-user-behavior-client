"use client";

import React, { useEffect, useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import { Avatar } from "@mui/material";
import Link from "next/link";
import { GET_ALL_APPS, GET_ALL_SURVEYS } from "@/fetch/fetch_data";
import { ROUTE } from "@/constant/route";
import Cookie from 'js-cookie';
import LogoutIcon from '@mui/icons-material/Logout';

export default function Choose() {

  const isSignedIn = Cookie.get('isSignedIn') === 'true';
  const account = Cookie.get('account');

  const [listApp, setListApp] = useState<any>([]);
  const [listSurvey, setListSurvey] = useState<any>([]);
  const [isMounted, setIsMounted] = useState(false);

  const renderCategory = (catId: any) => {
    switch (catId) {
      case 1:
        return 'Social Network'
      default:
        return ''
    }
  }

  const checkSurveyed = (appId: any) => {
    let status = false;
    let foundItem: any = listSurvey?.find((item: any) => {
      if ((JSON.parse(account || '')?.account_id === item?.account_id) && (appId.toString() === item?.app_id.toString())) {
        status = true
      }
    });
    if (status) {
      return <h1 className="text-[16px] font-bold text-green-500">Done</h1>
    } else {
      return <h1 className="text-[16px] font-bold text-red-500">Not yet</h1>
    }
  }

  function signOut() {
    Cookie.remove('isSignedIn');
    Cookie.remove('account');
    window.location.href = ROUTE.CHOOSE;
  }

  const loadApps = async () => {
    const fetchApps = await GET_ALL_APPS()
    setListApp(fetchApps || []);

    const fetchSurvey = await GET_ALL_SURVEYS()
    setListSurvey(fetchSurvey || [])
  }

  const init = async () => {
    loadApps()
  };

  useEffect(() => {
    setIsMounted(true);
    init();
  }, []);

  useEffect(() => { }, [listApp, listSurvey]);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="w-3/4 flex flex-col justify-center items-center">
      <div className="flex justify-between items-center w-full">
        <div className="flex justify-center items-center">
          <h1 className="text-[24px] font-semibold">Popular Applications</h1>
          <div className="bg-gray-100 flex border border-[2px] border-gray-300 rounded-lg pl-2 pr-10 ml-4">
            <input
              type="text"
              placeholder="Enter App's Name"
              className="pl-2 py-2 w-full bg-gray-100 placeholder-gray-500 font-medium text-gray-700 outline-none border-transparent focus:border-transparent focus:ring-0"
            />
          </div>
          <button className="bg-[rgb(var(--primary-rgb))] !text-white text-[16px] py-2 px-4 rounded-lg font-semibold ml-1">
            <SearchIcon />
          </button>
        </div>

        {
          isSignedIn ? <div className="flex justify-center items-center">
            <h1 className="text-[18px] font-semibold">Hi, {JSON.parse(account || '')?.account_email} </h1>
            <div onClick={signOut} className="ml-4 cursor-pointer"><LogoutIcon /></div>
          </div> : <Link href={{
            pathname: ROUTE.SIGN_IN
          }}>
            <button className="bg-[rgb(var(--primary-rgb))] !text-white text-[16px] py-2 px-6 rounded-lg font-semibold">
              Sign In
            </button>
          </Link>
        }

      </div>

      {
        isSignedIn ? <div className="w-full grid grid-cols-5 gap-5 mt-10">
          {
            listApp?.map((item: any, index: any) => {
              return (
                <Link
                  href={{
                    pathname: '/survey',
                    query: { appId: item?.app_id || '0' },
                  }}
                  key={index}
                  className="flex justify-start items-center border border-gray-300 py-2 px-6 rounded-lg cursor pointer hover:opacity-60"
                >
                  <Avatar alt="avatar" src={item?.app_thumbnail} />
                  <div className="flex flex-col justify-center items-start ml-6">
                    <h1 className={`text-[18px] font-semibold`}>{item?.app_name}</h1>
                    <h1 className="text-[16px] font-meduim">{renderCategory(item?.category_id)}</h1>
                    {checkSurveyed(item?.app_id)}
                  </div>
                </Link>
              )
            })
          }
        </div> : <div className="w-full grid grid-cols-5 gap-5 mt-10">
          {
            listApp?.map((item: any, index: any) => {
              return (
                <div
                  key={index}
                  onClick={() => {
                    if (!isSignedIn) {
                      alert('Please sign-in to continue!')
                    }
                  }}
                  className="flex justify-start items-center border border-gray-300 py-2 px-6 rounded-lg cursor-pointer hover:opacity-60"
                >
                  <Avatar alt="avatar" src={item?.app_thumbnail} />
                  <div className="flex flex-col justify-center items-start ml-6">
                    <h1 className={`text-[18px] font-semibold`}>{item?.app_name}</h1>
                    <h1 className="text-[16px] font-meduim">{renderCategory(item?.category_id)}</h1>
                  </div>
                </div>
              )
            })
          }
        </div>
      }

    </div>
  );
}
