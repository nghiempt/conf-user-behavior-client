"use client";

import React, { useEffect, useState } from "react";
import { Avatar } from "@mui/material";
import { limitString } from "@/utils/helper";
import { useSearchParams } from "next/navigation";
import { GET_ALL_APPS } from "@/fetch/fetch_data";

export default function Step01({ setOpIcr, setOpIcm, setOpIcs, setAppId }: { setOpIcr: any, setOpIcm: any, setOpIcs: any, setAppId: any }) {

    const searchParams = useSearchParams()

    const [app, setApp] = React.useState({} as any);

    const [isMounted, setIsMounted] = useState(false);

    const init = async () => {
        const fetchApps = await GET_ALL_APPS()
        let foundItem: any = fetchApps?.find((item: any) => item?.app_id.toString() === (searchParams.get('appId') || '1'));
        setAppId(searchParams.get('appId'))
        setApp(foundItem)
    };

    useEffect(() => {
        setIsMounted(true);
        init();
    }, []);

    useEffect(() => { }, [app]);

    if (!isMounted) {
        return null;
    }

    return (
        <div className="w-full h-[500px] flex justify-center items-center gap-x-2">
            <div className="w-1/3 h-[500px] flex flex-col justify-center items-center gap-y-2">
                <div className="w-full h-[250px] border border-gray-300 flex flex-col justify-center items-center rounded-md gap-y-4">
                    <div className="w-full flex justify-center items-center gap-x-4">
                        <Avatar alt="avatar" src="https://play-lh.googleusercontent.com/KCMTYuiTrKom4Vyf0G4foetVOwhKWzNbHWumV73IXexAIy5TTgZipL52WTt8ICL-oIo=w480-h960-rw" />
                        <div className="flex flex-col justify-center items-start">
                            <h1 className="text-[18px] font-semibold">{app?.app_name}</h1>
                            <h1>{app?.app_developer}</h1>
                        </div>
                    </div>
                    <div className="w-full flex justify-center items-center text-center">
                        <h1 className="text-blue-500">{app?.app_store_url}</h1>
                    </div>
                </div>
                <div className="w-full h-[250px] flex flex-col border border-gray-300 flex justify-center items-start rounded-md">
                    <div className="ml-6">
                        <span className="text-gray-700 font-semibold">We assume that the application IS Incorrect</span>
                        <div className="mt-2">
                            <label className="inline-flex items-center">
                                <input onChange={(e) => setOpIcr(true)} type="radio" className="form-radio" name="1" value="1" />
                                <span className="ml-2">Yes, I agress</span>
                            </label>
                            <label className="inline-flex items-center ml-6">
                                <input onChange={(e) => setOpIcr(false)} type="radio" className="form-radio" name="2" value="2" />
                                <span className="ml-2">No, I don't agress</span>
                            </label>
                        </div>
                    </div>
                    <div className="mt-6 ml-6">
                        <span className="text-gray-700 font-semibold">We assume that the application IS NOT Incomplete</span>
                        <div className="mt-2">
                            <label className="inline-flex items-center">
                                <input onChange={(e) => setOpIcm(true)} type="radio" className="form-radio" name="3" value="3" />
                                <span className="ml-2">Yes, I agress</span>
                            </label>
                            <label className="inline-flex items-center ml-6">
                                <input onChange={(e) => setOpIcm(false)} type="radio" className="form-radio" name="4" value="4" />
                                <span className="ml-2">No, I don't agress</span>
                            </label>
                        </div>
                    </div>
                    <div className="mt-6 ml-6">
                        <span className="text-gray-700 font-semibold">We assume that the application IS Inconsistent</span>
                        <div className="mt-2">
                            <label className="inline-flex items-center">
                                <input onChange={(e) => setOpIcs(true)} type="radio" className="form-radio" name="5" value="5" />
                                <span className="ml-2">Yes, I agress</span>
                            </label>
                            <label className="inline-flex items-center ml-6">
                                <input onChange={(e) => setOpIcs(false)} type="radio" className="form-radio" name="6" value="6" />
                                <span className="ml-2">No, I don't agress</span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-2/3 h-[500px] flex flex-col justify-center items-center gap-y-2">
                <div className="w-full h-[350px] flex justify-center items-center gap-x-2">
                    <div className="w-1/2 h-[350px] border border-gray-300 flex flex-col justify-start items-center rounded-md px-2">
                        <div className="w-full py-4 bg-green-500 flex justify-center items-center mt-2 rounded-md">
                            <h1 className="text-[18px] text-white font-bold">Data Safety</h1>
                        </div>
                        <div className="w-full flex flex-col gap-y-1 py-2">
                            <h1 className="text-[16px] font-semibold">Data shared</h1>
                            <div className="w-full grid grid-cols-4 gap-1">
                                {
                                    app?.dataSafety_shared?.split(', ')?.map((item: any, index: any) => {
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
                            <h1 className="text-[16px] font-semibold">Data collected</h1>
                            <div className="w-full grid grid-cols-4 gap-1">
                                {
                                    app?.dataSafety_collected?.split(', ')?.map((item: any, index: any) => {
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
                    <div className="w-1/2 h-[350px] border border-gray-300 flex flex-col justify-start items-center rounded-md px-2">
                        <div className="w-full py-4 bg-purple-500 flex justify-center items-center mt-2 rounded-md">
                            <h1 className="text-[18px] text-white font-bold">Privacy Policy</h1>
                        </div>
                        <div className="w-full flex flex-col gap-y-1 py-2 text-justify">
                            <h1 className="text-[16px] font-semibold">Data shared</h1>
                            <p className="text-[13px]">{limitString(app?.privacyPolicy_shared || '', 300)}</p>
                        </div>
                        <div className="w-full flex flex-col gap-y-1 py-2 text-justify">
                            <h1 className="text-[16px] font-semibold">Data collected</h1>
                            <p className="text-[13px]">{limitString(app?.privacyPolicy_collected || '', 300)}</p>
                        </div>
                    </div>
                </div>
                <div className="w-full h-[150px] flex flex-col justify-center items-center gap-y-3 mt-1">
                    <div className={`w-full py-2 flex justify-start items-center rounded-md ${app?.incorrect_status === 1 ? '!border !border-[2px] !border-red-500' : 'bg-gray-200'}`}>
                        <h1 className="px-4 flex gap-x-2"><h1 className="font-bold">Incorrect:</h1> {app?.incorrect_description}</h1>
                    </div>
                    <div className={`w-full py-2 flex justify-start items-center rounded-md ${app?.incomplete_status === 1 ? '!border !border-[2px] !border-red-500' : 'bg-gray-200'}`}>
                        <h1 className="px-4 flex gap-x-2"><h1 className="font-bold text-gray-400">Incomplete</h1>{app?.incomplete_description}</h1>
                    </div>
                    <div className={`w-full py-2 flex justify-start items-center rounded-md ${app?.inconsistent_status === 1 ? '!border !border-[2px] !border-red-500' : 'bg-gray-200'}`}>
                        <h1 className="px-4 flex gap-x-2"><h1 className="font-bold">Inconsistent:</h1> {app?.inconsistent_description}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}
