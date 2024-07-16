import CryptoJS from "crypto-js";

export const encryptToken = (data) => {
  const encrypted = CryptoJS.AES.encrypt(
    data,
    import.meta.env.VITE_SECRET_ENCRYPT_KEY
  ).toString();

  return encrypted;
};
