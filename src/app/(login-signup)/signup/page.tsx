import Image from "next/image";

export default function LoginPage() {

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
          <form className="flex flex-col w-full md:w-1/2 mt-9">
            <p className="text-sm text-black">First Name</p>
            <input
              type="text"
              placeholder="First Name"
              className="border-2 rounded-[6px] p-2 border-black my-2 text-black"
              required
            />
            <p className="text-sm text-black">Last Name</p>
            <input
              type="text"
              placeholder="Last Name"
              className="border-2 rounded-[6px] p-2 border-black my-2 text-black"
              required
            />
            <p className="text-sm text-black">Mobile Number</p>
            <input
              type="tel"
              placeholder="Mobile Number"
              className="border-2 rounded-[6px] p-2 border-black my-2 text-black"
              required
            />
            <p className="text-sm text-black">Email Address</p>
            <input
              type="email"
              placeholder="Email Address"
              className="border-2 rounded-[6px] p-2 border-black my-2 text-black"
              required
            />
            <p className="text-sm text-black">Password</p>
            <input
              type="password"
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
                id="terms"
                name="terms"
                value="terms"
                required
                className="text-left my-2"
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
            <button className="bg-black text-white py-2 my-4">Sign Up</button>
          </form>
        </div>
      </div>
    </>
  );
}
