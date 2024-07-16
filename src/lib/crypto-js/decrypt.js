import CryptoJS from "crypto-js";

export const decrypt = (encryptedData) => {
  const decryptedDataToken = CryptoJS.AES.decrypt(
    encryptedData.token,
    import.meta.env.VITE_SECRET_ENCRYPT_KEY
  );

  const originalDataToken = decryptedDataToken.toString(CryptoJS.enc.Utf8);

  return originalDataToken;
};
