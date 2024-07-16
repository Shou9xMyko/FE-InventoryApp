import { MdArrowOutward } from "react-icons/md";
import AddProduct from "./Add-Product/AddProduct";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchDataProduct } from "../../../../Redux/Action/ProductAction";
import Loader from "../../../layout/Loader/Loader";
import DeleteProduct from "./Delete-Product/DeleteProduct";
import { useNavigate } from "react-router-dom";
import { formatExpiredProduct } from "../../../../utils/functionUtils";
import UpdateProduct from "./Update-Product/UpdateProduct";

const ProductViews = () => {
  const { data_product } = useSelector((state) => state.InventoryReducer);

  const navigate = useNavigate();

  const { isLoading } = useSelector((state) => state.Loader);
  const dispatch = useDispatch();

  const handleDetailProduct = (id_product) => {
    navigate(`/main-page/dp/${id_product}`);
  };

  const handeLoadProduct = () => {
    dispatch(fetchDataProduct());
  };

  useEffect(() => {
    dispatch(fetchDataProduct());
  }, []);

  return (
    <div className="mb-10">
      <div className="px-7">
        <div>
          <div className="flex justify-between items-center">
            <h1 className="text-lg font-semibold m-0 p-0">
              Total :{" "}
              <span className="text-fuchsia-600">{data_product?.length}</span>
            </h1>

            <AddProduct />
          </div>
          <hr className="border-b-[1px] border-b-zinc-200 rounded-md mt-2" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5 overflow-y-auto h-[34rem] md:h-[60rem] lg:h-[30rem] py-5 w-full ">
          {isLoading ? (
            <div className="col-span-4 flex justify-center items-center">
              <Loader />
            </div>
          ) : data_product?.length == 0 && isLoading == false ? (
            <div className="col-span-4 flex justify-center items-center">
              <h2 className="text-xl text-gray-800 text-center">
                There are no products saved, please add them by clicking the{" "}
                <span className="text-fuchsia-600 font-bold">Add product</span>{" "}
                button
              </h2>
            </div>
          ) : typeof data_product == "string" ? (
            <div className="bg-[tomato]s col-span-4 flex flex-col items-center justify-center">
              <h2 className="font-medium">
                Products with the keyword &quot;
                <span className="font-bold">{data_product}</span>
                &quot; were not found, please check your keywords again.{" "}
                <span
                  className="text-fuchsia-600 font-semibold hover:underline hover:underline-offset-4 cursor-pointer"
                  onClick={handeLoadProduct}
                >
                  Load all products
                </span>
              </h2>
            </div>
          ) : (
            data_product?.map((item) => {
              return (
                <div key={item.id} className="flex flex-col items-center">
                  <div className="max-w-[20rem] lg:max-w-[26rem] bg-white w-full border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 shadow-lg shadow-fuchsia-400">
                    <div className="overflow-hidden rounded-t-lg">
                      <img
                        className="w-full h-[15rem] transition-transform duration-300 ease-in-out transform hover:scale-125"
                        src={item.product_img_url}
                        alt={item.product_name}
                      />
                    </div>
                    <div className="p-5">
                      <a href="#">
                        <h5 className="mb-2 text-2xl truncate font-bold tracking-tight text-gray-900 dark:text-white">
                          {item.product_name}
                        </h5>
                      </a>
                      <div className="grid grid-cols-2 mb-5">
                        <div className="flex flex-col gap-1.5">
                          <p className="font-normal text-sm text-gray-700 dark:text-gray-400">
                            Harga : {item.product_price.toLocaleString("id-ID")}
                          </p>
                          <p className="font-normal text-sm text-gray-700 dark:text-gray-400">
                            Stok : {item.product_stock.toLocaleString("id-ID")}
                          </p>
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <p className="font-normal text-sm text-center text-gray-700 dark:text-gray-400">
                            Exp : {formatExpiredProduct(item.product_expired)}
                          </p>
                          <p className="font-normal text-sm text-center text-gray-700 dark:text-gray-400">
                            Satuan : {item.product_unit}
                          </p>
                        </div>
                      </div>

                      <button
                        onClick={() => handleDetailProduct(item.id)}
                        className="inline-flex items-center px-3 py-2 gap-2 text-sm font-medium text-center text-white bg-fuchsia-700 rounded-lg hover:bg-fuchsia-800 focus:ring-4 focus:outline-none focus:ring-fuchsia-300 dark:bg-fuchsia-600 dark:hover:bg-fuchsia-700 dark:focus:ring-fuchsia-800"
                      >
                        Lihat Detail <MdArrowOutward className="text-xl" />
                      </button>
                    </div>
                  </div>
                  <div className="flex gap-10 mt-5">
                    <UpdateProduct data={item} />

                    <DeleteProduct
                      id_product={item.id}
                      product_name={item.product_name}
                      img_url={item.product_img_url}
                    />
                  </div>
                </div>
              );
            })
          )}
        </div>
        <hr className="border-b-[1px] border-b-zinc-200 rounded-md" />
      </div>
    </div>
  );
};

export default ProductViews;
