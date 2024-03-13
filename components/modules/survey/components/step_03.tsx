"use client";

import React, { useEffect } from "react";

export default function Step03({ setReason, handleSubmit }: { setReason: any, handleSubmit: any }) {

    const init = async () => { };

    useEffect(() => {
        init();
    }, []);

    return (
        <div className="flex flex-col pt-10 h-[500px] px-20">
            <h1 className="text-[20px]">Please give me the reason you choice in the previous step</h1>
            <div className="bg-gray-100 flex border border-[2px] border-gray-300 rounded-lg pr-10 pb-20 my-4 pl-2 pt-2">
                <input
                    type="text"
                    onChange={(e) => setReason(e.target.value)}
                    placeholder="Enter your the reason . . ."
                    className="pl-2 py-2 w-full bg-gray-100 placeholder-gray-500 font-medium text-gray-700 outline-none border-transparent focus:border-transparent focus:ring-0"
                />
            </div>
            <div className="" onClick={handleSubmit}>
                <button className="w-[200px] bg-[rgb(var(--primary-rgb))] !text-white text-[16px] py-2 px-6 rounded-lg font-semibold">
                    Submit
                </button>
            </div>
        </div>
    );
}
