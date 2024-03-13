"use client";

import React, { useEffect } from "react";

export default function Step02({ setBehavior }: { setBehavior: any }) {
    
    const init = async () => { };

    useEffect(() => {
        init();
    }, []);

    useEffect(() => { }, []);

    return (
        <div className="flex justify-center items-center px-60">
            <div className="flex flex-col justify-center items-start">
                <span className="text-gray-700 font-semibold text-[22px]">After you have clearly understood the content of this application's privacy policy, as well as the violations that the application continues to commit, you?</span>
                <div className="flex flex-col justify-center items-start mt-4">
                    <label className="inline-flex items-center">
                        <input onChange={(e) => setBehavior(e.target.value)} type="radio" className="form-radio" name="accountType" value="I still continue to use this app" />
                        <span className="ml-2 text-[18px]">I still continue to use this app</span>
                    </label>
                    <label className="inline-flex items-center mt-2">
                        <input onChange={(e) => setBehavior(e.target.value)} type="radio" className="form-radio" name="accountType" value="I will delete the app immediately and find another app to replace it" />
                        <span className="ml-2 text-[18px]">I will delete the app immediately and find another app to replace it</span>
                    </label>
                    <label className="inline-flex items-center mt-2">
                        <input onChange={(e) => setBehavior(e.target.value)} type="radio" className="form-radio" name="accountType" value="I need time to consider and find another application before I delete this application" />
                        <span className="ml-2 text-[18px]">I need time to consider and find another application before I delete this application</span>
                    </label>
                </div>
            </div>
        </div>
    );
}
