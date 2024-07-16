/* eslint-disable react/prop-types */
import Footers from "../layout/Footer/Footers";
import NavbarsUsers from "../layout/NavbarsUsers/NavbarsUsers";
import NavbarsMainPage from "../layout/NavbarsMainPage/NavbarsMainPage";
import { useLocation } from "react-router-dom";
import useAuthHeader from "react-auth-kit/hooks/useAuthHeader";

const AppShell = (props) => {
  const { children } = props;

  const showNavbars = ["/main-page"];

  const { pathname } = useLocation();

  const token = useAuthHeader();

  return (
    <>
      {showNavbars.includes(pathname) ? (
        <NavbarsMainPage />
      ) : showNavbars && token ? (
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
