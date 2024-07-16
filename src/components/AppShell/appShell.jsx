/* eslint-disable react/prop-types */
import Footers from "../layout/Footer/Footers";
import NavbarsUsers from "../layout/NavbarsUsers/NavbarsUsers";
import NavbarsMainPage from "../layout/NavbarsMainPage/NavbarsMainPage";
import Cookies from "js-cookie";
import { useLocation } from "react-router-dom";

const AppShell = (props) => {
  const { children } = props;

  const showNavbars = ["/main-page"];

  const { pathname } = useLocation();

  const checkLoginData = Cookies.get("_auth");

  return (
    <>
      {showNavbars.includes(pathname) ? (
        <NavbarsMainPage />
      ) : showNavbars && checkLoginData ? (
        <NavbarsMainPage />
      ) : (
        <NavbarsUsers />
      )}

      {children}
      <Footers />
    </>
  );
};

export default AppShell;
