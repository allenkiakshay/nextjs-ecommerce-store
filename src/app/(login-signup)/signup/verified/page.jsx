import Link from "next/link";

export default function EmailVerified() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Email Verified
        </h1>
        <p className="text-gray-600 mb-6">
          Your email has been verified successfully.
        </p>
        <a
          href="/login"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Login
        </a>
      </div>
    </div>
  );
}
