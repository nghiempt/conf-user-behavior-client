"use client";

import { Avatar, Checkbox, Divider } from "@mui/material";
import React, { useEffect, useState } from "react";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import { signIn } from "next-auth/react";
import { URL } from "@/constant/url";
import { SIGN_IN } from "@/fetch/fetch_data";
import Cookie from 'js-cookie';
import { ROUTE } from "@/constant/route";

export default function SignIn() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async () => {
    const payload = {
      email,
      password
    }
    const fetchSignIn = await SIGN_IN(payload)
    if (fetchSignIn?.success) {
      Cookie.set('isSignedIn', 'true', { expires: 1 }); // Expires in 1 day
      Cookie.set('account', JSON.stringify(fetchSignIn?.account), { expires: 1 }); // Expires in 1 day
      window.location.href = ROUTE.CHOOSE
    } else {
      alert('Sign-in failed !!')
    }
  }

  useEffect(() => { }, [email, password])

  return (
    <div className="w-3/4 flex justify-center items-center">
      <div className="items-center text-center">
        <div className="flex items-center text-center grid grid-cols-1 gap-0">
          <div className="text-center">
            <h1 className="text-[24px] font-bold mb-4">
              Welcome to User Behavior
            </h1>
            <h1 className="text-[16px] text-gray-700 font-light mb-4">
              Sign-in to continue
            </h1>
            <div className="w-full flex items-start flex-col mt-4">
              <h1 className="text-[16px] mb-2">Email</h1>
              <div className="w-full bg-gray-100 flex rounded-lg border border-[#E1DEDB]">
                <span className="flex items-center pl-1">
                  <EmailOutlinedIcon className="px-2" />
                </span>
                <input
                  type="text"
                  placeholder="Enter your email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="py-2 w-full bg-gray-100 placeholder-gray-400 font-medium rounded-lg text-gray-500 outline-none border-transparent focus:border-transparent focus:ring-0"
                />
              </div>
            </div>
            <div className="w-full flex items-start flex-col mt-4 mb-6">
              <h1 className="text-[16px] mb-2">Password</h1>
              <div className="w-full bg-gray-100 flex rounded-lg border border-[#E1DEDB]">
                <span className="flex items-center pl-1">
                  <LockOpenOutlinedIcon className="px-2" />
                </span>
                <input
                  type="text"
                  placeholder="Enter your password"
                  onChange={(e) => setPassword(e.target.value)}
                  className="py-2 w-full bg-gray-100 placeholder-gray-400 font-medium rounded-lg text-gray-500 outline-none border-transparent focus:border-transparent focus:ring-0"
                />
              </div>
            </div>
            <div className="w-full flex justify-between items-center">
              <div className="flex justify-center items-center">
                <Checkbox className="p-0" />
                <h1 className="text-[14px] text-gray-700 ml-1">
                  Saved Password
                </h1>
              </div>
              <div className="">
                <h1 className="text-[14px] text-gray-700 font-bold">
                  Forgot Password?
                </h1>
              </div>
            </div>
            <button
              type="submit"
              onClick={handleSubmit}
              className="login-button mt-8 mb-5 w-full h-10 bg-[rgb(var(--tertiary-rgb))] rounded-lg font-bold text-[16px]"
              style={{ color: "white" }}
            >
              SIGN IN
            </button>
            <div className="flex items-center justify-center mb-8">
              <h1 className="text-[14px] text-gray-700 mr-2">
                Don't have an account?
              </h1>
              <h1
                className="text-[14px] text-gray-700 cursor-pointer font-bold"
              >
                Register now
              </h1>
            </div>
            <>
              <style>{`
                                .semi-divider-with-text::before, .semi-divider-with-text::after {
                                    border-bottom: 2px solid rgb(var(--primary-rgb));
                                }
                        `}</style>
              <Divider>
                <h1 className="text-[12px] text-gray-700 font-bold mr-2 ml-2">
                  hoặc
                </h1>
              </Divider>
            </>
            <div className="grid grid-cols-1 gap-4">
              <button
                type="submit"
                className="span-col-1 mt-8 mb-5 w-full h-10 bg-gray-100 rounded-lg flex justify-center items-center"
                style={{ color: "black" }}
              >
                <div className="flex" onClick={() => signIn("google")}>
                  <GoogleIcon />
                  <h1 className="text-[14px] text-gray-700 ml-2 font-semibold">
                    Sign in with Google
                  </h1>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
