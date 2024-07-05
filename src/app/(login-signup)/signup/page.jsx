"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [accepted, setAccepted] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      window.location.href = "/";
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/account/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: btoa(email),
          password,
          f_name: fName,
          last_name: lName,
          mobile_no: mobileNo,
          accepted,
        }),
      });

      const data = await response.json();
      if (data.status_message === "Success") {
        setMessage(data.message);
        setAccepted(false);
        setEmail("");
        setPassword("");
        setFName("");
        setLName("");
        setMobileNo("");
      } else {
        setMessage("Something went wrong. Please try again.");
        setAccepted(false);
        setEmail("");
        setPassword("");
        setFName("");
        setLName("");
        setMobileNo("");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Login failed. Please try again.");
      setAccepted(false);
      setEmail("");
      setPassword("");
      setFName("");
      setLName("");
      setMobileNo("");
    }
  };
  return (
    <>
      <div className="min-h-screen flex flex-col md:flex-row bg-white">
        <div className="hidden md:block md:w-1/2 h-screen relative">
          <Image
            src="/Signup.png"
            alt="image"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="flex flex-col justify-center items-start w-full md:w-1/2 bg-white p-4 md:ml-16">
          <h1 className="text-4xl font-bold text-black pt-5">
            Create New Account
          </h1>
          <h6 className="text-sm text-gray-500 text-center pt-2">
            Please Enter Details
          </h6>
          <form
            className="flex flex-col w-full md:w-1/2 mt-9"
            onSubmit={handleLogin}
          >
            <p className="text-sm text-black">First Name</p>
            <input
              type="text"
              placeholder="First Name"
              value={fName}
              onChange={(e) => setFName(e.target.value)}
              className="border-2 rounded-[6px] p-2 border-black my-2 text-black"
              required
            />
            <p className="text-sm text-black">Last Name</p>
            <input
              type="text"
              placeholder="Last Name"
              value={lName}
              onChange={(e) => setLName(e.target.value)}
              className="border-2 rounded-[6px] p-2 border-black my-2 text-black"
              required
            />
            <p className="text-sm text-black">Mobile Number</p>
            <input
              type="tel"
              placeholder="Mobile Number"
              value={mobileNo}
              onChange={(e) => setMobileNo(e.target.value)}
              className="border-2 rounded-[6px] p-2 border-black my-2 text-black"
              required
            />
            <p className="text-sm text-black">Email Address</p>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              className="border-2 rounded-[6px] p-2 border-black my-2 text-black"
              required
            />
            <p className="text-sm text-black">Password</p>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="border-2 rounded-md p-2 border-black my-2 text-black"
              required
            />
            {/* <a href="#" className="text-sm text-black text-right">
              Forgot Password?
            </a> */}
            <div className="flex flex-row items-center">
              <input
                type="checkbox"
                value={accepted}
                id="terms"
                name="terms"
                required
                className="text-left my-2"
                onChange={(e) => setAccepted(e.target.checked)}
              />
              <p className="text-sm text-black ml-2 p-1">
                I agree to the{" "}
                <a className="font-bold" href="#">
                  Terms & Conditions
                </a>{" "}
              </p>
            </div>
            {/* Placeholder for Google reCAPTCHA */}
            <div className="my-4">
              {/* Replace this with your reCAPTCHA implementation */}
              <div id="recaptcha-container"></div>
            </div>
            <button type="submit" className="bg-black text-white py-2 my-4">
              Sign Up
            </button>
            {message && <p className="text-red-500">{message}</p>}
            {message && (
              <a href="/login" className="text-sm text-black">
                Go Back to Login Page
              </a>
            )}
          </form>
        </div>
      </div>
    </>
  );
}
