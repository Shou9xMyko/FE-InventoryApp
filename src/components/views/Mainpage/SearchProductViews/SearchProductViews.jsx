/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { useDispatch } from "react-redux";
import { searchProduct } from "../../../../Redux/Action/ProductAction";

const SearchProductViews = () => {
  const [searchKeyword, setSearchKeyword] = useState("");

  const dispatch = useDispatch();

  const handleSearchProduct = (e) => {
    e.preventDefault();

    dispatch(searchProduct(searchKeyword));
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearchProduct(e);
    }
  };

  return (
    <div className="pt-14 mb-10 mx-4">
      <form onSubmit={handleSearchProduct} className="max-w-lg mx-auto">
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <IoMdSearch className="text-xl text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-fuchsia-500 focus:border-fuchsia-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-fuchsia-500 dark:focus:border-fuchsia-500"
            placeholder="Search Product"
            name="search"
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
            onKeyDown={handleKeyPress}
          />
          <button
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 bg-fuchsia-700 hover:bg-fuchsia-800 font-medium rounded-lg text-sm px-4 py-2 dark:bg-fuchsia-600 dark:hover:bg-fuchsia-700 dark:focus:ring-fuchsia-800"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchProductViews;
