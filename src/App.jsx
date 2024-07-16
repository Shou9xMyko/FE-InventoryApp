import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./components/views/HomepageViews/Homepage";
import Login from "./components/views/LoginViews/Login";
import Mainpage from "./components/views/Mainpage/Mainpage";
import DetailProduct from "./components/views/Mainpage/ProductViews/DetailProduct/DetailProduct";
import RequireAuth from "@auth-kit/react-router/RequireAuth";
import NotFoundPage from "./components/views/NotFoundViews/NotFoundPage";
import About from "./components/views/AboutViews/About";
import Contact from "./components/views/ContactViews/Contact";
import Location from "./components/views/LocationViews/Location";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/location" element={<Location />} />
      <Route
        path="/main-page"
        element={
          <RequireAuth fallbackPath={"/login"}>
            <Mainpage />
          </RequireAuth>
        }
      />
      <Route
        path="/main-page/dp/:id_product"
        element={
          <RequireAuth fallbackPath={"/login"}>
            <DetailProduct />
          </RequireAuth>
        }
      />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
