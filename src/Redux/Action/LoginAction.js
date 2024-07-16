import axios from "axios";

import Swal from "sweetalert2";

export const LOGIN = "LOGIN";

// LOGIN
export const LoginAction = (loginData, signIn, navigate) => {
  return async (dispatch) => {
    const res = await axios.post(
      `${import.meta.env.VITE_PUBLIC_API_URL}/api/login`,
      loginData
    );

    const response = res.data;

    if (response.status_code == 200 && response.status == "success") {
      await signIn({
        auth: {
          token: response.token,
          type: "Bearer",
        },
        userState: { email: response.email },
      });

      await Swal.fire({
        icon: "success",
        title: "Anda berhasil login",
        showConfirmButton: false,
        timer: 1500,
      });

      navigate("/main-page");
    } else if (response.status_code == 209 && response.status == "failed") {
      await Swal.fire({
        icon: "error",
        title: "Email atau password anda salah",
        text: "Periksa kembali email atau password anda",
        showConfirmButton: false,
        timer: 1500,
      });
    }
    dispatch({ type: "Login" });
  };
};
