import { FaWhatsapp } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import InstagramIcon from "/instagram.png";

const Contact = () => {
  return (
    <div className="my-0">
      <div className="border-2 my-10 mx-6 md:mx-20 xl:mx-24 rounded-md px-10 py-5 bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          <div className="">
            <p className="text-3xl text-center mb-10 font-medium">
              Hubungi Kami
            </p>
            <form className="max-w-full mx-auto">
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="floating_fullname"
                  id="floating_fullname"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-fuchsia-500 focus:outline-none focus:ring-0 focus:border-fuchsia-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_fullname"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-fuchsia-600 peer-focus:dark:text-fuchsia-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Nama Lengkap
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="email"
                  name="floating_email"
                  id="floating_email"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-fuchsia-500 focus:outline-none focus:ring-0 focus:border-fuchsia-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_email"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-fuchsia-600 peer-focus:dark:text-fuchsia-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Email anda
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <textarea
                  name="floating_pesan"
                  id="floating_pesan"
                  className="h-[8rem] block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-fuchsia-500 focus:outline-none focus:ring-0 focus:border-fuchsia-600 peer"
                  placeholder=" "
                  required
                ></textarea>
                <label
                  htmlFor="floating_pesan"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-fuchsia-600 peer-focus:dark:text-fuchsia-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Pesan
                </label>
              </div>

              <button
                type="submit"
                className="text-white bg-fuchsia-700 hover:bg-fuchsia-800 focus:ring-4 focus:outline-none focus:ring-fuchsia-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-fuchsia-600 dark:hover:bg-fuchsia-700 dark:focus:ring-fuchsia-800"
              >
                Kirim
              </button>
            </form>
          </div>
          <div>
            <p className="text-3xl text-center font-medium text-gray-900">
              Rincian Kontak
            </p>
            <div className="flex flex-col gap-5 mt-5 ">
              <div className="text-center">
                <p className="flex items-center justify-center gap-2 font-semibold text-gray-900">
                  <IoMdMail className="text-sky-500" /> Email
                </p>
                <p className="text-gray-900 hover:text-fuchsia-700 transition ease-in-out duration-200">
                  mikofernando2003@gmail.com
                </p>
              </div>
              <div className="text-center">
                <p className="flex items-center justify-center gap-2 font-semibold text-[#25d366]">
                  <FaWhatsapp className="text-[#25d366]" />
                  WhatsApp
                </p>
                <a
                  href="https://wa.me/+6285215702200?text=Halo Developer, saya menghubungi anda melalui halaman contact website inventory berkah lestari"
                  target="_blank"
                  className="text-gray-900 hover:text-sky-600 transition ease-in-out duration-200"
                >
                  (+62)-852-1570-2200
                </a>
              </div>
              <div className="text-center">
                <p className="flex items-center justify-center gap-2 font-semibold text-gray-900">
                  <img src={InstagramIcon} className="h-[15px]" alt="" />
                  Instagram
                </p>
                <a
                  href="https://www.instagram.com/mikofrndo_89"
                  target="_blank"
                  className="text-gray-900 hover:text-sky-600 transition ease-in-out duration-200"
                >
                  @mikofrndo_89
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
