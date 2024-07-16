import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchDataProduct } from "../../../../../Redux/Action/ProductAction";
import { formatExpiredProduct } from "../../../../../utils/functionUtils";
import { IoMdArrowRoundBack } from "react-icons/io";
import Loader from "../../../../layout/Loader/Loader";

const DetailProduct = () => {
  const { id_product } = useParams();
  const { data_product } = useSelector((state) => state.InventoryReducer);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const data = data_product?.filter((product) => {
    return product.id == id_product;
  });

  useEffect(() => {
    dispatch(fetchDataProduct());
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-start text-2xl font-bold mt-5 text-gray-900 hover:text-fuchsia-700 transition duration-300">
        Detail Product
      </h1>

      {data == undefined ? (
        <div className="flex items-center justify-center h-[70vh]">
          <Loader />
        </div>
      ) : (
        data?.map((item) => {
          return (
            <div
              key={item.id}
              className="grid grid-cols-1 lg:grid-cols-2 md:max-w-full mx-4 md:mx-24 my-8 border-2 rounded-md"
            >
              <div className="flex gap-3 border-r-0 md:border-r-2 relative overfow-x-auto bg-[tomato]">
                <table className="w-full max-w-full text-sm text-left rtl:text-right rounded-md">
                  <tbody className="">
                    <tr className=" border-b bg-white">
                      <th
                        scope="row"
                        className="px-6 py-2 font-semibold text-gray-900 "
                      >
                        ID Produk
                      </th>
                      <td className="px-0 py-2 ">:</td>
                      <td className="px-6 py-2">{item.id}</td>
                    </tr>
                    <tr className="bg-white border-b">
                      <th
                        scope="row"
                        className="px-6 py-2 font-semibold text-gray-900 "
                      >
                        Nama Produk
                      </th>
                      <td className="px-0 py-2">:</td>
                      <td className="px-6 py-2">{item.product_name}</td>
                    </tr>
                    <tr className="bg-white border-b">
                      <th
                        scope="row"
                        className="px-6 py-2 font-semibold text-gray-900 "
                      >
                        Harga Produk
                      </th>
                      <td className="px-0 py-2 bg-s[tomato]">:</td>
                      <td className="px-6 py-2">
                        {item.product_price.toLocaleString("id-ID")}
                      </td>
                    </tr>
                    <tr className="bg-white border-b ">
                      <th
                        scope="row"
                        className="px-6 py-2 font-semibold text-gray-900 "
                      >
                        Stok Produk
                      </th>
                      <td className="px-0 py-2 bg-s[tomato]">:</td>
                      <td className="px-6 py-2">{item.product_stock}</td>
                    </tr>
                    <tr className="bg-white border-b ">
                      <th
                        scope="row"
                        className="px-6 py-2 font-semibold text-gray-900 "
                      >
                        Kategori Produk
                      </th>
                      <td className="px-0 py-2 bg-s[tomato]">:</td>
                      <td className="px-6 py-2">{item.product_category}</td>
                    </tr>
                    <tr className="bg-white border-b ">
                      <th
                        scope="row"
                        className="px-6 py-2 font-semibold text-gray-900 "
                      >
                        Satuan Produk
                      </th>
                      <td className="px-0 py-2">:</td>
                      <td className="px-6 py-2">{item.product_unit}</td>
                    </tr>
                    <tr className="bg-white border-b ">
                      <th
                        scope="row"
                        className="px-6 py-2 font-semibold text-gray-900 "
                      >
                        Tanggal Kadaluarsa Produk
                      </th>
                      <td className="px-0 py-2 bg-s[tomato]">:</td>
                      <td className="px-6 py-2">
                        {formatExpiredProduct(item.product_expired)}
                      </td>
                    </tr>
                    <tr className="bg-white ">
                      <th
                        scope="row"
                        className="px-6 py-2 font-semibold text-gray-900 "
                      >
                        Deskripsi Produk
                      </th>
                      <td className="px-0 py-2 bg-s[tomato]">:</td>
                      <td className="px-6 py-2">{item.product_description}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="overflow-hidden col-start-1 row-start-1 md:col-start-1 md:row-start-2 lg:col-start-2 lg:row-start-1">
                <h1 className="text-center mt-2 underline underline-offset-4 font-semibold">
                  Gambar Produk
                </h1>
                <img
                  className="aspect-[1/1]"
                  src={item.product_img_url}
                  alt={item.product_name}
                />
              </div>
            </div>
          );
        })
      )}
      <button
        className="bg-fuchsia-600 px-9 font-semibold py-2 mb-5 text-white rounded-md flex items-center gap-1 hover:bg-fuchsia-700 transition duration-200"
        onClick={() => navigate("/main-page")}
      >
        <IoMdArrowRoundBack className="text-xl" /> Kembali Ke Main Page
      </button>
    </div>
  );
};

export default DetailProduct;
