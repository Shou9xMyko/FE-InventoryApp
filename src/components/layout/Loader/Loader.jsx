import { CirclesWithBar } from "react-loader-spinner";

const Loader = () => {
  return (
    <CirclesWithBar
      height="100"
      width="100"
      color="rgb(192 38 211)"
      outerCircleColor="rgb(192 38 211)"
      innerCircleColor="rgb(192 38 211)"
      barColor="rgb(192 38 211)"
      ariaLabel="circles-with-bar-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  );
};

export default Loader;
