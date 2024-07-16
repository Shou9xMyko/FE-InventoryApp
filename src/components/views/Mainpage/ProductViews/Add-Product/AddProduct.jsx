import "./AddProduct.css";
import { PiPlusSquare } from "react-icons/pi";
import { MdOutlineCancel } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { useState } from "react";
import Swal from "sweetalert2";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { addDataProduct } from "../../../../../Redux/Action/ProductAction";
import Loader from "../../../../layout/Loader/Loader";
import { MdOutlineDateRange } from "react-icons/md";
import { GetCurrentDate } from "../../../../../utils/functionUtils";
import { useNavigate } from "react-router-dom";
import { Modal } from "flowbite-react";
import useAuthHeader from "react-auth-kit/hooks/useAuthHeader";

const AddProduct = () => {
  const [imagesProduct, setImagesProduct] = useState(null);
  const [selectedCategoryProduct, setSelectedCategoryProduct] = useState("-");
  const [selectedUnitProduct, setSelectedUnitProduct] = useState("-");
  const [openModal, setOpenModal] = useState(false);
  const [productData, setProductData] = useState({
    product_name: "",
    product_stock: "",
    product_price: "",
    product_expired: "",
    product_description: "",
  });

  const token = useAuthHeader();

  const { isLoading } = useSelector((state) => state.Loader);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const showError = (text) => {
    Swal.fire({
      icon: "error",
      title: "User Error",
      showConfirmButton: false,
      text,
      timer: 1500,
    });
  };

  const handleAddProduct = async () => {
    if (!productData.product_name)
      return showError("Harap masukan nama produk");
    if (!productData.product_price)
      return showError("Harap masukan harga produk");
    if (!productData.product_stock)
      return showError("Harap masukan stok produk");
    if (!productData.product_expired)
      return showError("Harap masukan tanggal kadaluarsa produk");
    if (!productData.product_description)
      return showError("Harap masukan deskripsi produk");
    if (!imagesProduct)
      return showError(
        "Gambar produk tidak boleh kosong, harap masukan gambar produk"
      );
    Swal.fire({
      title: "Apakah anda yakin ?",
      html: "anda akan menambahkan produk",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Tambahkan",
      denyButtonText: "Batal",
      icon: "warning",
    }).then((result) => {
      if (result.isConfirmed) {
        const data = {
          id: uuidv4(),
          ...productData,
          product_category: selectedCategoryProduct,
          product_unit: selectedUnitProduct,
          product_img: imagesProduct,
          createdAt: GetCurrentDate(),
          updatedAt: GetCurrentDate(),
        };

        dispatch(addDataProduct(data, navigate, token));

        setProductData({
          product_name: "",
          product_stock: "",
          product_price: "",
          product_expired: "",
          product_description: "",
        });
        setSelectedCategoryProduct("-");
        setSelectedUnitProduct("-");
        setImagesProduct(null);
        setOpenModal(false);
      } else {
        Swal.close();
      }
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData({
      ...productData,
      [name]: value,
    });
  };

  const handleCancel = () => {
    Swal.fire({
      title: "Semua input akan dihapus, apa kamu yakin?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Yes",
      denyButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        setOpenModal(false);
        setProductData({
          product_name: "",
          product_stock: "",
          product_price: "",
          product_expired: "",
          product_description: "",
        });
        setSelectedCategoryProduct("-");
        setSelectedUnitProduct("-");
        setImagesProduct(null);
      } else if (result.isDenied) {
        Swal.close();
      }
    });
  };

  return (
    <>
      <button
        onClick={() => setOpenModal(true)}
        className="btn bg-fuchsia-600 text-white hover:bg-fuchsia-800 flex items-center font-semibold gap-1"
      >
        <PiPlusSquare className="text-2xl" /> Tambah Produk
      </button>

      <Modal show={openModal} size={"xl"} onClose={() => setOpenModal(false)}>
        <Modal.Header className="py-2">
          <p className="text-lg font-bold py-1">Tambah Produk</p>
        </Modal.Header>
        <Modal.Body className="py-2">
          {isLoading ? (
            <div className="flex justify-center items-center">
              <Loader />
            </div>
          ) : (
            <form className="max-w-xl">
              <div className="mb-5">
                <label className="block mb-2 text-md font-medium text-gray-900 dark:text-white">
                  Nama Produk
                </label>
                <input
                  type="text"
                  id="product_name"
                  name="product_name"
                  value={productData.product_name}
                  onChange={handleInputChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-fuchsia-500 focus:border-fuchsia-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-fuchsia-500 dark:focus:border-fuchsia-500"
                  placeholder="Masukan Nama Produk"
                  required
                />
              </div>
              <div className="mb-5">
                <label className="block mb-2 text-md font-medium text-gray-900 dark:text-white">
                  Harga Produk
                </label>
                <input
                  type="number"
                  id="product_price"
                  name="product_price"
                  value={productData.product_price}
                  onChange={handleInputChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-fuchsia-500 focus:border-fuchsia-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-fuchsia-500 dark:focus:border-fuchsia-500"
                  placeholder="Masukan Harga Produk"
                  required
                />
              </div>
              <div className="mb-5">
                <label className="block mb-2 text-md font-medium text-gray-900 dark:text-white">
                  Stok Produk
                </label>
                <input
                  type="number"
                  id="product_stock"
                  name="product_stock"
                  value={productData.product_stock}
                  onChange={handleInputChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-fuchsia-500 focus:border-fuchsia-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-fuchsia-500 dark:focus:border-fuchsia-500"
                  placeholder="Masukan Stok Produk"
                  required
                />
              </div>

              <div className="mb-5">
                <label className="block mb-2 text-md font-medium text-gray-900 dark:text-white">
                  Unit Produk
                </label>
                <select
                  onChange={(e) => setSelectedUnitProduct(e.target.value)}
                  id="selected_unit_product"
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
                  Kategori Produk
                </label>
                <select
                  onChange={(e) => setSelectedCategoryProduct(e.target.value)}
                  id="selected_category_product"
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
                  Tanggal Kadaluarsa Produk
                </label>

                <div className="relative max-w-full">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <MdOutlineDateRange />
                  </div>
                  <input
                    type="date"
                    name="product_expired"
                    value={productData.product_expired}
                    onChange={handleInputChange}
                    required
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-fuchsia-500 focus:border-fuchsia-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-fuchsia-500 dark:focus:border-fuchsia-500"
                    placeholder="Select date"
                  />
                </div>
              </div>

              <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Deskripsi Produk
                </label>
                <textarea
                  name="product_description"
                  id="product_description"
                  value={productData.product_description}
                  onChange={handleInputChange}
                  rows="4"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-fuchsia-500 focus:border-fuchsia-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-fuchsia-500 dark:focus:border-fuchsia-500"
                  placeholder="Tulisakan Deskripsi Produk Disini"
                  required
                ></textarea>
              </div>

              <div className="mb-10">
                <label className="block mb-2 text-md font-medium text-gray-900 dark:text-white">
                  Gambar Produk
                </label>
                <input
                  type="file"
                  name="file_input"
                  className="file_input"
                  onChange={(e) =>
                    e.target.files && setImagesProduct(e.target.files[0])
                  }
                  accept="image/*"
                />
              </div>

              {/* IMAGES YANG DI UPLOAD DITAMPILKAN DISINI */}
              {imagesProduct && (
                <div className="mb-8">
                  <label className="block mb-2 text-md font-medium text-gray-900 dark:text-white underline underline-offset-8">
                    Pratinjau Gambar Produk
                  </label>
                  <div className="flex justify-center">
                    <img
                      src={URL.createObjectURL(imagesProduct)}
                      alt="Uploaded Product"
                      width={200}
                      height={200}
                    />
                  </div>
                </div>
              )}
            </form>
          )}
        </Modal.Body>
        <Modal.Footer>
          <div className="flex justify-between w-full">
            <button
              onClick={handleCancel}
              type="button"
              className="bg-rose-500 rounded-lg text-md font-semibold px-5 py-[0.5rem] text-white flex items-center gap-1 hover:bg-rose-600"
            >
              <MdOutlineCancel className="text-xl" /> Batal
            </button>
            <button
              onClick={handleAddProduct}
              type="button"
              className="bg-lime-500 rounded-lg text-md font-semibold px-5 py-[0.5rem] text-white flex items-center gap-1 hover:bg-lime-600"
            >
              <FaPlus className="text-xl" /> Tambahkan
            </button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddProduct;
