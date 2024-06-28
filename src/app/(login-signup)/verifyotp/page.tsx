"use client";
import Image from "next/image";
import { useState } from "react";

export default function LoginPage() {
  const [state, setState] = useState(false);
  return (
    <>
      {state ? (
        <>
          <div className="min-h-screen flex flex-col md:flex-row bg-white">
            <div className="hidden md:block md:w-1/2 h-screen relative">
              <Image
                src="/otp.png"
                alt="image"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="flex flex-col justify-center items-start w-full md:w-1/2 bg-white p-4 md:ml-16">
              <h1 className="text-4xl font-bold text-black pt-5">Enter OTP</h1>
              <h6 className="text-sm text-gray-500 text-center pt-2">
                Enter OTP Received on Your Registered Email Address
              </h6>
              <form className="flex flex-col w-full md:w-1/2 mt-9">
                <input
                  type="number"
                  placeholder="One Time Password"
                  className="border-2 rounded-[6px] p-2 border-black my-2 text-black"
                  required
                />
                <a
                  href="/login"
                  className="text-sm text-black text-left m-2 hover:underline"
                >
                  Go Back
                </a>
                {/* Placeholder for Google reCAPTCHA */}
                <div className="my-4">
                  {/* Replace this with your reCAPTCHA implementation */}
                  <div id="recaptcha-container"></div>
                </div>
                <button className="bg-black text-white py-2 my-4">
                  Verify OTP
                </button>
              </form>
            </div>
          </div>
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 z-50 flex justify-center items-center">
            <div className="w-11/12 max-w-lg h-auto bg-white flex flex-col justify-center items-center p-4 sm:p-8">
              <div className="w-24 h-24 sm:w-32 sm:h-32 relative flex justify-center items-center">
                <Image src="/correct.png" alt="Next.js Logo" layout="fill" />
              </div>
              <div className="text-center py-4">
                <h2 className="text-lg sm:text-xl font-semibold">
                  Password Changed Successfully
                </h2>
                <p className="text-xs sm:text-sm opacity-50">
                  Your Password has been Updated Successfully
                </p>
              </div>
              <div className="w-full flex justify-center items-center pt-4">
                <a
                  className="w-full p-2 bg-black text-white rounded-md text-center"
                  href={"/login"}
                >
                  Back To Login
                </a>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="min-h-screen flex flex-col md:flex-row bg-white">
          <div className="hidden md:block md:w-1/2 h-screen relative">
            <Image src="/otp.png" alt="image" layout="fill" objectFit="cover" />
          </div>
          <div className="flex flex-col justify-center items-start w-full md:w-1/2 bg-white p-4 md:ml-16">
            <h1 className="text-4xl font-bold text-black pt-5">Enter OTP</h1>
            <h6 className="text-sm text-gray-500 text-center pt-2">
              Enter OTP Received on Your Registered Email Address
            </h6>
            <form className="flex flex-col w-full md:w-1/2 mt-9">
              <input
                type="number"
                placeholder="One Time Password"
                className="border-2 rounded-[6px] p-2 border-black my-2 text-black"
                required
              />
              <a
                href="/login"
                className="text-sm text-black text-left m-2 hover:underline"
              >
                Go Back
              </a>
              {/* Placeholder for Google reCAPTCHA */}
              <div className="my-4">
                {/* Replace this with your reCAPTCHA implementation */}
                <div id="recaptcha-container"></div>
              </div>
              <button
                className="bg-black text-white py-2 my-4"
                onClick={() => setState(true)}
              >
                Verify
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
