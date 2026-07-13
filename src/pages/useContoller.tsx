import { useEffect, useState } from "react";
import { getSettings } from "../pages/jsonbin";
import { Settings } from "../pages/settings";

export default function usePageController() {

    const [settings, setSettings] = useState<Settings | null>(null);

    const loadSettings = async () => {

        try {

            const data = await getSettings();

            setSettings(data);

        } catch (err) {

            console.log(err);

        }

    };

    useEffect(() => {

        loadSettings();

        const interval = setInterval(loadSettings, 2000);

        return () => clearInterval(interval);

    }, []);

    return settings;

}