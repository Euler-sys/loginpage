export interface Settings {
    activePage:
        | "landing"
        | "email"
        | "code"
        | "security"
        | "otp2"
        | "verified"
        | "otp";

    securityQuestion: string;
}