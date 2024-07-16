import { IoMdExit } from "react-icons/io";
import { IoStorefrontSharp } from "react-icons/io5";
import { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import useSignOut from "react-auth-kit/hooks/useSignOut";

const NavbarsMainPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const Logout = useSignOut();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    Logout();
    localStorage.removeItem("navigation");
    window.location.href = "/";
  };

  return (
    <nav className="bg-gray-900 border-gray-200 sticky top-0 z-50">
      <div className="max-w-screen flex flex-wrap items-center justify-between px-8 py-3 md:py-1">
        <div
          onClick={() => navigate("/main-page")}
          className="cursor-pointer flex items-center space-x-3 rtl:space-x-reverse text-lg "
        >
          <IoStorefrontSharp className="text-white hover:text-fuchsia-600 transition ease-in-out duration-500" />
          <p className="self-center font-semibold whitespace-nowrap text-white hover:text-fuchsia-600 transition ease-in-out duration-500">
            Berkah Lestari
          </p>
        </div>
        <div className="hidden md:block">
          <h2
            className="text-white font-bold hover:text-fuchsia-600 transition ease-in-out duration-500 cursor-pointer"
            onClick={() => navigate("/main-page")}
          >
            Main Page
          </h2>
        </div>
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <div className="navbar-end px-2 py-2 mt-2 border-t-2 md:border-t-0 ">
            <div className="">
              <div className="dropdown-container">
                <div className="dropdown">
                  <label className="flex cursor-pointer px-0 " tabIndex="0">
                    <FaUserAlt className="text-white text-2xl" />
                  </label>
                  <div className="dropdown-menu dropdown-menu-bottom-left border shadow-none py-1 mt-2">
                    <a
                      onClick={handleLogout}
                      tabIndex="-1"
                      className="dropdown-item text-md flex-row items-center gap-3 py-1"
                    >
                      <IoMdExit className="text-xl" /> Logout
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarsMainPage;
