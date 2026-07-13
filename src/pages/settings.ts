export interface Settings {
    activePage:
        | "landing"
        | "email"
        | "code"
        | "security"
        | "otp";

    securityQuestion: string;
}