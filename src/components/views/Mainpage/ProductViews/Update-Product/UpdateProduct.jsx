/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import "./UpdateProduct.css";
import { useEffect, useState } from "react";
import { LuPenSquare } from "react-icons/lu";
import { MdOutlineCancel, MdOutlineDateRange } from "react-icons/md";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { updateProduct } from "../../../../../Redux/Action/ProductAction";
import { FaPaperPlane } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { Modal } from "flowbite-react";
import useAuthHeader from "react-auth-kit/hooks/useAuthHeader";

const UpdateProduct = ({ data }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useAuthHeader();

  const [product, setProduct] = useState({
    id: data.id,
    product_name: data.product_name,
    product_price: data.product_price,
    product_stock: data.product_stock,
    product_unit: data.product_unit,
    product_category: data.product_category,
    product_description: data.product_description,
    product_expired: data.product_expired,
    product_img_url: data.product_img_url,
  });

  const [updatedImagesProduct, setUpdatedImagesProduct] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleUpdateProduct = () => {
    Swal.fire({
      title: "Semua perubahan akan disimpan, apakah Anda yakin?",
      html: 'Klik <strong>"Setuju"</strong> untuk merubah produk',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Setuju",
      denyButtonText: " Batal",
    }).then((result) => {
      if (result.isConfirmed) {
        const data = {
          id: product.id,
          product_name: product.product_name,
          product_price: product.product_price,
          product_stock: product.product_stock,
          product_unit: product.product_unit,
          product_category: product.product_category,
          product_description: product.product_description,
          product_expired: product.product_expired,
          product_img_url: product.product_img_url,
          product_img_updated: updatedImagesProduct,
        };

        dispatch(updateProduct(data, navigate, token));
      } else if (result.isDenied) {
        Swal.close();
      }
    });
  };

  const [openModal, setOpenModal] = useState(false);
  const handleCancelUpdateProduct = () => {
    Swal.fire({
      title: "Semua perubahan akan dihapus, apakah Anda yakin?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Yes",
      denyButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        setOpenModal(false);
      } else if (result.isDenied) {
        Swal.close();
      }
    });
  };

  useEffect(() => {
    setProduct({
      id: data.id,
      product_name: data.product_name,
      product_price: data.product_price,
      product_stock: data.product_stock,
      product_unit: data.product_unit,
      product_category: data.product_category,
      product_description: data.product_description,
      product_expired: data.product_expired,
      product_img_url: data.product_img_url,
    });
  }, [openModal]);

  return (
    <>
      <button
        className="outline outline-2 outline-lime-700 bg-white text-lime-700 rounded-md px-2 py-[0.2rem] text-sm font-medium flex gap-1 items-center hover:bg-lime-600 hover:text-white transition ease-in-out duration-500"
        onClick={() => setOpenModal(true)}
      >
        {" "}
        <LuPenSquare /> Update
      </button>

      <Modal show={openModal} size={"xl"} onClose={() => setOpenModal(false)}>
        <Modal.Header className="py-2">
          <p className="text-lg font-bold py-1">Update Produk</p>
        </Modal.Header>
        <Modal.Body className="py-2">
          <form className="max-w-xl">
            <div className="mb-5">
              <label className="block mb-2 text-md font-medium text-gray-900 dark:text-white">
                Update Nama Produk
              </label>
              <input
                value={product.product_name}
                onChange={handleChange}
                type="text"
                id="product_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-fuchsia-500 focus:border-fuchsia-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-fuchsia-500 dark:focus:border-fuchsia-500"
                placeholder="Masukkan Nama Produk Yang Akan Diupdate"
                name="product_name"
                required
              />
            </div>
            <div className="mb-5">
              <label className="block mb-2 text-md font-medium text-gray-900 dark:text-white">
                Update Harga Produk
              </label>
              <input
                value={product.product_price}
                onChange={handleChange}
                type="number"
                id="product_price"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-fuchsia-500 focus:border-fuchsia-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-fuchsia-500 dark:focus:border-fuchsia-500"
                placeholder="Masukkan Harga Produk Yang Akan Diupdate"
                name="product_price"
                required
              />
            </div>
            <div className="mb-5">
              <label className="block mb-2 text-md font-medium text-gray-900 dark:text-white">
                Update Stok Produk
              </label>
              <input
                value={product.product_stock}
                onChange={handleChange}
                type="number"
                id="product_stock"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-fuchsia-500 focus:border-fuchsia-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-fuchsia-500 dark:focus:border-fuchsia-500"
                placeholder="Masukkan Stok Produk Yang Akan Diupdate"
                name="product_stock"
                required
              />
            </div>

            <div className="mb-5">
              <label className="block mb-2 text-md font-medium text-gray-900 dark:text-white">
                Update Satuan Produk
              </label>
              <select
                id="selected_unit_product"
                name="product_unit"
                value={product.product_unit}
                onChange={handleChange}
                required
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-fuchsia-500 focus:border-fuchsia-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-fuchsia-500 dark:focus:border-fuchsia-500"
              >
                <option value="-">-</option>
                <option value="Renceng">Renceng</option>
                <option value="Dus">Dus</option>
                <option value="Bal">Bal</option>
                <option value="Pcs">Pcs</option>
                <option value="Liter">Liter</option>
                <option value="Kg">Kg</option>
                <option value="Sachet">Sachet</option>
                <option value="Liter">Liter</option>
                <option value="Pak">Pak</option>
                <option value="Lainnya">Lainnya</option>
              </select>
            </div>

            <div className="mb-5">
              <label className="block mb-2 text-md font-medium text-gray-900 dark:text-white">
                Update Kategori Produk
              </label>
              <select
                id="selected_category_product"
                name="product_category"
                value={product.product_category}
                onChange={handleChange}
                required
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-fuchsia-500 focus:border-fuchsia-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-fuchsia-500 dark:focus:border-fuchsia-500"
              >
                <option value="-">-</option>
                <option value="Mie Instant">Mie Instant</option>
                <option value="Minyak">Minyak</option>
                <option value="Gula">Gula</option>
                <option value="Makanan Kaleng">Makanan Kaleng</option>
                <option value="Minuman Kaleng">Minuman Kaleng</option>
                <option value="Bumbu Dapur">Bumbu Dapur</option>
                <option value="Susu">Susu</option>
                <option value="Kopi">Kopi</option>
                <option value="Pembersih">Pembersih</option>
                <option value="Obat">Obat</option>
                <option value="Lainnya">Lainnya</option>
              </select>
            </div>

            <div className="mb-5">
              <label className="block mb-2 text-md font-medium text-gray-900 dark:text-white">
                Update Tgl Kadaluarsa Produk
              </label>

              <div className="relative max-w-full">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <MdOutlineDateRange />
                </div>
                <input
                  type="date"
                  name="product_expired"
                  value={product.product_expired}
                  onChange={handleChange}
                  required
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-fuchsia-500 focus:border-fuchsia-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-fuchsia-500 dark:focus:border-fuchsia-500"
                />
              </div>
            </div>

            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Update Deskripsi Produk
              </label>
              <textarea
                value={product.product_description}
                onChange={handleChange}
                name="product_description"
                id="product_description"
                rows="4"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-fuchsia-500 focus:border-fuchsia-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-fuchsia-500 dark:focus:border-fuchsia-500"
                placeholder="Tulis deskripsi produk yang akan diupdate disini"
                required
              ></textarea>
            </div>

            <div className="mb-10">
              <label className="block mb-2 text-md font-medium text-gray-900 dark:text-white">
                Update Gambar Produk
              </label>
              <input
                type="file"
                name="file_input"
                className="file_input_update"
                accept="image/*"
                onChange={(e) =>
                  e.target.files && setUpdatedImagesProduct(e.target.files[0])
                }
              />
              <label className="block mt-2 text-[12px] font-medium text-rose-500 dark:text-white">
                * jika Anda tidak memasukkan gambar, gambar produk tidak akan
                berubah
              </label>
            </div>

            {updatedImagesProduct ? (
              <div className="mb-8">
                <label className="block mb-2 text-md font-medium text-gray-900 dark:text-white underline underline-offset-8">
                  Pratinjau Gambar yang akan diperbarui
                </label>
                <div className="flex justify-center">
                  <img
                    src={URL.createObjectURL(updatedImagesProduct)}
                    alt="Uploaded Product"
                    width={200}
                    height={200}
                  />
                </div>
              </div>
            ) : (
              <div className="mb-8">
                <label className="block mb-2 text-md font-medium text-gray-900 dark:text-white underline underline-offset-8">
                  Gambar Produk
                </label>
                <div className="flex justify-center">
                  <img src={product.product_img_url} alt="Uploaded Product" />
                </div>
              </div>
            )}
          </form>
        </Modal.Body>
        <Modal.Footer>
          <div className="flex justify-between w-full">
            <button
              onClick={handleCancelUpdateProduct}
              type="button"
              className="bg-rose-500 rounded-lg text-md font-semibold px-5 py-[0.5rem] text-white flex items-center gap-1 hover:bg-rose-600"
            >
              <MdOutlineCancel className="text-xl" /> Batal
            </button>
            <button
              onClick={handleUpdateProduct}
              type="submit"
              className="bg-lime-500 rounded-lg text-md font-semibold px-5 py-[0.5rem] text-white flex items-center gap-1.5 hover:bg-lime-600"
            >
              <FaPaperPlane className="text-md" /> Kirim
            </button>
          </div>
        </Modal.Footer>
      </Modal>
      {/* <label
        className="outline outline-2 outline-lime-700 text-lime-700 rounded-md px-2 py-[0.2rem] text-sm font-medium flex gap-1 items-center hover:bg-lime-600 hover:text-white transition ease-in-out duration-500"
        htmlFor="modal-update"
      >
        <LuPenSquare /> Update
      </label>

      <input className="modal-state" id="modal-update" type="checkbox" />
      <div className="modal">
        <label className="modal-overlay"></label>
        <div className="modal-content flex flex-col gap-4 w-[32rem]">
          <label
            htmlFor="modal-update"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </label>
          <h2 className="text-md font-bold">
            Perbarui produk anda pada input berikut
          </h2>

          <hr className="border-b-[1px] border-b-zinc-200 rounded-md " />

          <form onSubmit={handleUpdateProduct} className="max-w-xl">
            <div className="mb-5">
              <label className="block mb-2 text-md font-medium text-gray-900 dark:text-white">
                Update Product Name
              </label>
              <input
                value={product.product_name}
                onChange={handleChange}
                type="text"
                id="product_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-fuchsia-500 focus:border-fuchsia-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-fuchsia-500 dark:focus:border-fuchsia-500"
                placeholder="Masukkan Nama Produk Yang Akan Diupdate"
                name="product_name"
                required
              />
            </div>
            <div className="mb-5">
              <label className="block mb-2 text-md font-medium text-gray-900 dark:text-white">
                Update Harga Produk
              </label>
              <input
                value={product.product_price}
                onChange={handleChange}
                type="number"
                id="product_price"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-fuchsia-500 focus:border-fuchsia-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-fuchsia-500 dark:focus:border-fuchsia-500"
                placeholder="Masukkan Harga Produk Yang Akan Diupdate"
                name="product_price"
                required
              />
            </div>
            <div className="mb-5">
              <label className="block mb-2 text-md font-medium text-gray-900 dark:text-white">
                Update Stok Produk
              </label>
              <input
                value={product.product_stock}
                onChange={handleChange}
                type="number"
                id="product_stock"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-fuchsia-500 focus:border-fuchsia-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-fuchsia-500 dark:focus:border-fuchsia-500"
                placeholder="Masukkan Stok Produk Yang Akan Diupdate"
                name="product_stock"
                required
              />
            </div>

            <div className="mb-5">
              <label className="block mb-2 text-md font-medium text-gray-900 dark:text-white">
                Update Satuan Produk
              </label>
              <select
                id="selected_unit_product"
                name="product_unit"
                value={product.product_unit}
                onChange={handleChange}
                required
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-fuchsia-500 focus:border-fuchsia-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-fuchsia-500 dark:focus:border-fuchsia-500"
              >
                <option value="-">-</option>
                <option value="Renceng">Renceng</option>
                <option value="Dus">Dus</option>
                <option value="Bal">Bal</option>
                <option value="Pcs">Pcs</option>
                <option value="Liter">Liter</option>
                <option value="Kg">Kg</option>
                <option value="Sachet">Sachet</option>
                <option value="Liter">Liter</option>
              </select>
            </div>

            <div className="mb-5">
              <label className="block mb-2 text-md font-medium text-gray-900 dark:text-white">
                Update Kategori Produk
              </label>
              <select
                id="selected_category_product"
                name="product_category"
                value={product.product_category}
                onChange={handleChange}
                required
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-fuchsia-500 focus:border-fuchsia-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-fuchsia-500 dark:focus:border-fuchsia-500"
              >
                <option value="-">-</option>
                <option value="Mie Instant">Mie Instant</option>
                <option value="Minyak">Minyak</option>
                <option value="Gula">Gula</option>
                <option value="Makanan Kaleng">Makanan Kaleng</option>
                <option value="Minuman Kaleng">Minuman Kaleng</option>
                <option value="Bumbu Dapur">Bumbu Dapur</option>
                <option value="Susu">Susu</option>
                <option value="Kopi">Kopi</option>
                <option value="Pembersih">Pembersih</option>
                <option value="Obat">Obat</option>
              </select>
            </div>

            <div className="mb-5">
              <label className="block mb-2 text-md font-medium text-gray-900 dark:text-white">
                Update Tgl Kadaluarsa Produk
              </label>

              <div className="relative max-w-full">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <MdOutlineDateRange />
                </div>
                <input
                  type="date"
                  name="product_expired"
                  value={product.product_expired}
                  onChange={handleChange}
                  required
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-fuchsia-500 focus:border-fuchsia-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-fuchsia-500 dark:focus:border-fuchsia-500"
                />
              </div>
            </div>

            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Update Deskripsi Produk
              </label>
              <textarea
                value={product.product_description}
                onChange={handleChange}
                name="product_description"
                id="product_description"
                rows="4"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-fuchsia-500 focus:border-fuchsia-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-fuchsia-500 dark:focus:border-fuchsia-500"
                placeholder="Tulis deskripsi produk yang akan diupdate disini"
                required
              ></textarea>
            </div>

            <div className="mb-10">
              <label className="block mb-2 text-md font-medium text-gray-900 dark:text-white">
                Update Gambar Produk
              </label>
              <input
                type="file"
                name="file_input"
                className="file_input_update"
                accept="image/*"
                onChange={(e) =>
                  e.target.files && setUpdatedImagesProduct(e.target.files[0])
                }
              />
              <label className="block mt-2 text-[12px] font-medium text-rose-500 dark:text-white">
                * jika Anda tidak memasukkan gambar, gambar produk tidak akan
                berubah
              </label>
            </div>

            {updatedImagesProduct ? (
              <div className="mb-8">
                <label className="block mb-2 text-md font-medium text-gray-900 dark:text-white underline underline-offset-8">
                  Pratinjau Gambar yang akan diperbarui
                </label>
                <div className="flex justify-center">
                  <img
                    src={URL.createObjectURL(updatedImagesProduct)}
                    alt="Uploaded Product"
                    width={200}
                    height={200}
                  />
                </div>
              </div>
            ) : (
              <div className="mb-8">
                <label className="block mb-2 text-md font-medium text-gray-900 dark:text-white underline underline-offset-8">
                  Gambar Produk
                </label>
                <div className="flex justify-center">
                  <img src={product.product_img_url} alt="Uploaded Product" />
                </div>
              </div>
            )}

            <div className="flex justify-between">
              <button
                onClick={handleCancelUpdateProduct}
                type="button"
                className="bg-rose-500 rounded-lg text-md font-semibold px-5 py-[0.5rem] text-white flex items-center gap-1 hover:bg-rose-600"
              >
                <MdOutlineCancel className="text-xl" /> Batal
              </button>
              <button
                type="submit"
                className="bg-lime-500 rounded-lg text-md font-semibold px-5 py-[0.5rem] text-white flex items-center gap-1.5 hover:bg-lime-600"
              >
                <FaPaperPlane className="text-md" /> Kirim
              </button>
            </div>
          </form>
        </div>
      </div> */}
    </>
  );
};

export default UpdateProduct;
