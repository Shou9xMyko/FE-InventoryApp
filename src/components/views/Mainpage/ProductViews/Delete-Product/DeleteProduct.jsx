/* eslint-disable react/prop-types */
import { FaTrashAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { deleteProduct } from "../../../../../Redux/Action/ProductAction";
import { useNavigate } from "react-router-dom";
import useAuthHeader from "react-auth-kit/hooks/useAuthHeader";

const DeleteProduct = ({ id_product, product_name, img_url }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useAuthHeader();

  const confirmDelete = () => {
    Swal.fire({
      title: "Apa anda yakin?",
      html: `<p>Produk dengan nama <strong>${product_name}</strong> akan dihapus</p>`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Hapus produk",
      cancelButtonText: "Batal",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(
          deleteProduct(id_product, product_name, img_url, navigate, token)
        );
      }
    });
  };

  return (
    <button
      onClick={confirmDelete}
      className="outline outline-2 outline-rose-700 text-rose-700 rounded-md px-2 py-[0.2rem] text-sm font-medium flex gap-1 items-center hover:bg-rose-600 hover:text-white transition ease-in-out duration-500 "
    >
      <FaTrashAlt /> Delete
    </button>
  );
};

export default DeleteProduct;
