import {  useLocation } from "react-router-dom";
import { useState } from "react";

export default function Footer() {
  const [activeTab, setActiveTab] = useState<"personal" | "business">(
    "personal"
  );

  const location = useLocation();

  const personalLinks = [
    {
      name: "Online Banking",
      path: "/online-banking",
    },
    {
      name: "HSA/Flex Accounts",
      path: "/hsa-flex",
    },
    {
      name: "CardCenter Direct",
      path: "/cardcenter",
    },
    {
      name: "Brokerage",
      path: "/brokerage",
    },
    {
      name: "UMB 360Direct",
      path: "/360direct",
    },
    {
      name: "Total Wealth",
      path: "/wealth",
    },
    {
      name: "Private Wealth Client Portal",
      path: "/private-wealth",
    },
    {
      name: "UMB Mortgage Servicing",
      path: "/mortgage",
    },
  ];

  const businessLinks = [
    {
      name: "Business Banking",
      path: "/business-banking",
    },
    {
      name: "Treasury Services",
      path: "/treasury",
    },
    {
      name: "Commercial Banking",
      path: "/commercial",
    },
    {
      name: "Corporate Trust",
      path: "/trust",
    },
  ];

  const links =
    activeTab === "personal" ? personalLinks : businessLinks;

  return (
    <>
      {/* Sticky Feedback */}
      <button
        className="fixed left-0 bottom-0 -translate-y-1/2 bg-blue-600 text-white px-3 py-4 text-sm z-50
        [writing-mode:vertical-rl] rotate-180 shadow-lg"
      >
        Give Feedback
      </button>

      <footer className="max-w-7xl mx-auto mt-10 border rounded-xl bg-white">

        <div className="p-8">

          <h2 className="text-center font-semibold text-xl">
            Login to other services
          </h2>

          <div className="flex justify-center gap-12 mt-8">

            <button
              onClick={() => setActiveTab("personal")}
              className={`font-semibold text-sm pb-2 border-b-4 transition ${
                activeTab === "personal"
                  ? "border-blue-700 text-blue-700"
                  : "border-transparent"
              }`}
            >
              PERSONAL
            </button>

            <button
              onClick={() => setActiveTab("business")}
              className={`font-semibold text-sm pb-2 border-b-4 transition ${
                activeTab === "business"
                  ? "border-blue-700 text-blue-700"
                  : "border-transparent"
              }`}
            >
              BUSINESS
            </button>

          </div>

          <hr className="my-8" />

          <div className="grid gap-6">

            {links.map((item) => (
              <p
              
                className={`text-[#0082CA] text-sm font-medium hover:underline ${
                  location.pathname === item.path
                    ? "font-bold"
                    : ""
                }`}
              >
                {item.name}
              </p>
            ))}

          </div>

        </div>

      </footer>
    </>
  );
}