import vector_store from "/vector_store.jpg";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full">
      <div className="px-8 flex items-center">
        <div className="mt-10">
          <h1 className="font-bold text-3xl text-gray-800 mb-3">
            &quot;The only limit to our realization of tomorrow will be our
            doubts of today.&quot;
          </h1>
          <span className="font-semibold text-gray-800">
            By Franklin D. Roosevelt
          </span>
          <p className="text-gray-800 font-medium mt-12 text-md">
            Tekan tombol &quot;Login&quot; di bilah navigasi untuk masuk ke
            halaman utama dan akses manajemen produk, atau klik{" "}
            <span
              onClick={() => navigate("/login")}
              className="hover:underline cursor-pointer hover:text-gray-700 text-sky-500"
            >
              disini
            </span>
            .
          </p>
        </div>
      </div>
      <div className="mb-5">
        <img src={vector_store} alt="vector_store" className="w-full h-fit" />
      </div>
    </div>
  );
};

export default Homepage;
