import { useState, useEffect } from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { IoStorefrontSharp } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";

const initialNavigation = [
  { name: "Home", to: "/", current: true },
  { name: "About", to: "/about", current: false },
  { name: "Contact", to: "/contact", current: false },
  { name: "Location", to: "/location", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const NavbarsUsers = () => {
  const [navigation, setNavigation] = useState(() => {
    const savedNavigation = localStorage.getItem("navigation");
    return savedNavigation ? JSON.parse(savedNavigation) : initialNavigation;
  });

  const navigate = useNavigate();

  const handleLinkClick = (name) => {
    const updatedNavigation = navigation.map((item) =>
      item.name === name
        ? { ...item, current: true }
        : { ...item, current: false }
    );
    setNavigation(updatedNavigation);
  };

  const handleLoginClick = () => {
    const updatedNavigation = navigation.map((item) => ({
      ...item,
      current: false,
    }));
    setNavigation(updatedNavigation);
  };

  useEffect(() => {
    localStorage.setItem("navigation", JSON.stringify(navigation));
  }, [navigation]);

  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-start sm:items-stretch sm:justify-between ps-4 md:ps-0">
                <div
                  className="flex flex-shrink-0 items-center font-bold text-white cursor-pointer hover:text-fuchsia-500 duration-300 ease-in-out"
                  onClick={() => navigate("/")}
                >
                  <IoStorefrontSharp className="me-2" /> Berkah Lestari
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.to}
                        className={classNames(
                          item.current
                            ? "text-white rounded-md bg-gray-700"
                            : "text-gray-300 ",
                          "text-gray-300 hover:bg-gray-700 rounded-md px-3 py-2 text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                        onClick={() => handleLinkClick(item.name)}
                      >
                        {item.name}
                      </Link>
                    ))}
                    <Link
                      to="/login"
                      className="text-white bg-fuchsia-600 px-5 rounded-md font-medium hover:bg-fuchsia-700 flex items-center"
                      onClick={handleLoginClick}
                    >
                      Login
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden flex justify-center">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as={Link}
                  to={item.to}
                  className={classNames(
                    item.current
                      ? "bg-gray-700 text-white text-center"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium text-center"
                  )}
                  aria-current={item.current ? "page" : undefined}
                  onClick={() => handleLinkClick(item.name)}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
              <Link
                to="/login"
                className="text-white flex items-center justify-center bg-fuchsia-600 px-5 py-1 md:py-0 rounded-md font-medium hover:bg-fuchsia-700"
                onClick={handleLoginClick}
              >
                Login
              </Link>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default NavbarsUsers;
