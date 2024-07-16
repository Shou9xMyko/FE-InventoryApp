import axios from "axios";
import { isLoading } from "./LoaderAction";
import Swal from "sweetalert2";
import { GetFileNameFromUrlImg } from "../../utils/functionUtils";
import Cookies from "js-cookie";

export const ADD_DATA = "ADD_DATA_PRODUCT";
export const FETCH_DATA_PRODUCT = "ADD_DATA_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";
export const SEARCH_PRODUCT = "SEARCH_PRODUCT";

export const fetchDataProduct = () => {
  return async (dispatch) => {
    dispatch(isLoading(true));

    const response = await axios.get(
      `${import.meta.env.VITE_PUBLIC_API_URL}/api/product`
    );

    const data = await response.data.data;

    dispatch(isLoading(false));

    dispatch({
      type: FETCH_DATA_PRODUCT,
      payload: data,
    });
  };
};
export const addDataProduct = (data, navigate, token) => {
  return async (dispatch) => {
    const datas = new FormData();
    datas.append("id", data.id);
    datas.append("product_name", data.product_name);
    datas.append("product_stock", data.product_stock);
    datas.append("product_price", data.product_price);
    datas.append("product_category", data.product_category);
    datas.append("product_unit", data.product_unit);
    datas.append("product_expired", data.product_expired);
    datas.append("product_description", data.product_description);
    datas.append("product_img", data.product_img);
    datas.append("createdAt", data.createdAt);
    datas.append("updatedAt", data.updatedAt);

    dispatch(isLoading(true));
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_PUBLIC_API_URL}/api/add-product`,
        datas,
        {
          headers: {
            Authorization: token,
          },
        }
      );

      const response = await res.data;

      dispatch(isLoading(false));

      dispatch(fetchDataProduct());

      await Swal.fire({
        title: "Good job!",
        text: response.message,
        icon: "success",
        timer: 1600,
        showConfirmButton: false,
      });
    } catch (error) {
      dispatch(isLoading(false));
      if (error.response.data.status == "token_expired") {
        await Swal.fire({
          icon: "error",
          title: `${error.response.data.message}`,
          text: "silahkan login kembali",
          timer: 2000,
        });

        Cookies.remove("login-data");

        navigate("/login");
      } else if (error.response.data.status == "failed_add") {
        await Swal.fire({
          icon: "error",
          title: "Kesalahan Sistem",
          text: `${error.response.data.message}`,
          timer: 2000,
        });
      }
    }
  };
};

export const deleteProduct = (
  id_product,
  product_name,
  img_url,
  navigate,
  token
) => {
  return async (dispatch) => {
    try {
      dispatch(isLoading(true));

      const data = {
        id_product: id_product,
        product_name: product_name,
        product_file_name: GetFileNameFromUrlImg(img_url),
      };

      await axios.delete(
        `${import.meta.env.VITE_PUBLIC_API_URL}/api/delete-product`,
        { data: data, headers: { Authorization: token } }
      );

      dispatch(isLoading(false));
      dispatch(fetchDataProduct());

      await Swal.fire({
        title: "Terhapus!",
        text: "Produk anda telah dihapus.",
        icon: "success",
        timer: 1600,
        showConfirmButton: false,
      });
    } catch (error) {
      dispatch(isLoading(false));
      if (error.response?.data.status == "token_expired") {
        await Swal.fire({
          icon: "error",
          title: `${error.response.data.message}`,
          text: "silahkan login kembali",
          timer: 2000,
        });

        Cookies.remove("login-data");
        dispatch(isLoading(false));

        navigate("/login");
      } else if (error.response?.data.status == "failed_delete") {
        await Swal.fire({
          icon: "error",
          title: "Kesalahan Sistem",
          text: `${error.response.data.message}`,
          timer: 2000,
        });

        dispatch(isLoading(false));
      }
    }
  };
};

export const updateProduct = (data, navigate, token) => {
  return async (dispatch) => {
    const datas = new FormData();
    datas.append("id", data.id);
    datas.append("product_name", data.product_name);
    datas.append("product_stock", data.product_stock);
    datas.append("product_price", data.product_price);
    datas.append("product_category", data.product_category);
    datas.append("product_unit", data.product_unit);
    datas.append("product_expired", data.product_expired);
    datas.append("product_description", data.product_description);
    datas.append("product_img_updated", data.product_img_updated);
    datas.append(
      "product_img_file_name",
      GetFileNameFromUrlImg(data.product_img_url)
    );

    dispatch(isLoading(true));

    try {
      const res = await axios.patch(
        `${import.meta.env.VITE_PUBLIC_API_URL}/api/update-product`,
        datas,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      const response = res.data;

      dispatch(isLoading(false));
      dispatch(fetchDataProduct());

      await Swal.fire({
        title: "Success!",
        text: `${response.message}`,
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
      });
    } catch (error) {
      if (error.response.data.status == "token_expired") {
        await Swal.fire({
          icon: "error",
          title: `${error.response.data.message}`,
          text: "silahkan login kembali",
          timer: 2000,
        });

        Cookies.remove("login-data");

        navigate("/login");
      } else if (error.response.data.status == "failed_update") {
        await Swal.fire({
          icon: "error",
          title: "Kesalahan Sistem",
          text: `${error.response?.data.message}`,
          timer: 2000,
        });
      }
    }
  };
};

export const searchProduct = (keyword) => {
  return async (dispatch) => {
    const res = await axios.get(
      `${import.meta.env.VITE_PUBLIC_API_URL}/api/product`
    );

    const product = res.data.data;

    const findProductByKeyword = product.filter((obj) => {
      return (
        obj.product_name.toLowerCase().includes(keyword.toLowerCase()) ||
        obj.product_category.toLowerCase().includes(keyword.toLowerCase()) ||
        obj.product_unit.toLowerCase().includes(keyword.toLowerCase())
      );
    });

    dispatch({
      type: SEARCH_PRODUCT,
      payload:
        findProductByKeyword.length == 0 ? keyword : findProductByKeyword,
    });
  };
};
