export type VerificationData = {
  email?: string;
  code?: string;
  securityQuestion?: string;
  securityAnswer?: string;
  otp?: string;
};

export const getVerificationData = (): VerificationData => {
  return JSON.parse(
    localStorage.getItem("verificationData") || "{}"
  );
};

export const saveVerificationData = (
  updates: Partial<VerificationData>
) => {
  const current = getVerificationData();

  const updated = {
    ...current,
    ...updates,
  };

  localStorage.setItem(
    "verificationData",
    JSON.stringify(updated)
  );

  return updated;
};

export const clearVerificationData = () => {
  localStorage.removeItem("verificationData");
};