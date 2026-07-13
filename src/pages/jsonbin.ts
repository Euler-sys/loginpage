import axios from "axios";
import { Settings } from "../pages/settings";

const BIN_ID = "6a54a1c9da38895dfe5580ff";
const API_KEY = "$2a$10$yti1izYQ7PKY9IhwxrQiuuIk8TZDdxM6nzYFnduMOvJtKIdyRhBB.";

const api = axios.create({
    baseURL: `https://api.jsonbin.io/v3/b/${BIN_ID}`,
    headers: {
        "X-Master-Key": API_KEY,
        "Content-Type": "application/json",
    },
});

export const getSettings = async (): Promise<Settings> => {
    const res = await api.get("");

    return res.data.record;
};

export const updateSettings = async (settings: Settings) => {
    await api.put("", settings);
};