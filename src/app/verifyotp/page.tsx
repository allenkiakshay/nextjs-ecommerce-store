import Image from "next/image";

export default function LoginPage() {
  return (
    <>
      <div className="min-h-screen flex flex-col md:flex-row bg-white">
        <div className="hidden md:block md:w-1/2 h-screen relative">
          <Image src="/otp.png" alt="image" layout="fill" objectFit="cover" />
        </div>
        <div className="flex flex-col justify-center items-start w-full md:w-1/2 bg-white p-4 md:ml-16">
          <h1 className="text-4xl font-bold text-black pt-5">
            Enter OTP
          </h1>
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
            <button className="bg-black text-white py-2 my-4">Login</button>
          </form>
        </div>
      </div>
    </>
  );
}
