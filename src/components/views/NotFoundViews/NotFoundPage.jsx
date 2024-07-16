import NotFoundImages from "./../../../../public/pagenotfound.png";
import { useNavigate } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import Cookies from "js-cookie";
const NotFoundPage = () => {
  const navigate = useNavigate();
  const loginData = Cookies.get("_auth");

  return (
    <div className="mx-5 h-[90vh] lg:h-[90vh] flex items-center justify-center">
      <div>
        <div className="flex justify-center">
          <img
            src={NotFoundImages}
            alt="Page Not Found 404!"
            className="h-[24rem] w-[24rem] lg:h-[24rem] lg:w-[24rem]"
          />
        </div>

        <h1 className="tracking-wide text-center mt-3.5 text-lg md:text-3lg lg:text-2lg font-bold text-gray-800">
          Halaman tidak ditemukan !
        </h1>

        {loginData && (
          <div className="flex justify-center mt-5 mb-10 md:mt-10 mx-5 md:mb-0 lg:mt-5 lg:mb-0">
            <button
              onClick={() => navigate("/main-page")}
              className="flex items-center gap-2 font-semibold bg-fuchsia-600 text-sm text-white md:px-8 md:py-2 lg:text-base lg:px-6 lg:py-2 rounded-md px-6 py-2 hover:bg-fuchsia-700 transition ease-in-out duration-300"
            >
              <IoMdArrowRoundBack className="text-xl md:text-2xl lg:text-lg " />
              Kembali ke Halaman Utama
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NotFoundPage;
