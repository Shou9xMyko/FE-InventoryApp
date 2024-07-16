import ProductViews from "./ProductViews/ProductViews";
import SearchProductViews from "./SearchProductViews/SearchProductViews";

const Mainpage = () => {
  return (
    <>
      {/* Search Product */}
      <SearchProductViews />
      {/* Product */}
      <ProductViews />
    </>
  );
};

export default Mainpage;
