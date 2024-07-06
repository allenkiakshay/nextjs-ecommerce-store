"use client";
import Image from "next/image";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");

  const handlePasswordReset = async (e) => {
    e.preventDefault(); // Prevent default form submission

    try {
      const response = await fetch("/api/account/passwordreset", {
        // Ensure the fetch URL starts with a "/"
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: btoa(email),
        }),
      });
      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("password_reset_token", data.password_reset_token);
        window.location.href = "/verifyotp";
      } else {
        const errorData = await response.json();
        console.error(errorData);
        window.alert(errorData);
      }
    } catch (error) {
      console.error(error);
      window.alert(error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white">
      <div className="hidden md:block md:w-1/2 h-screen relative">
        <Image
          src="/Password.png"
          alt="image"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="flex flex-col justify-center items-start w-full md:w-1/2 bg-white p-4 md:ml-16">
        <h1 className="text-4xl font-bold text-black pt-5">Forgot Password</h1>
        <h6 className="text-sm text-gray-500 text-center pt-2">
          Enter Your Registered Email Address to Receive OTP
        </h6>
        <form
          className="flex flex-col w-full md:w-1/2 mt-9"
          onSubmit={handlePasswordReset}
        >
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
          <button type="submit" className="bg-black text-white py-2 my-4">
            Send OTP
          </button>
        </form>
      </div>
    </div>
  );
}
