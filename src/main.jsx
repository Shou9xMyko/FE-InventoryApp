import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AppShell from "./components/AppShell/appShell";
import { Provider } from "react-redux";
import store from "./Redux/Store/store.js";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "react-auth-kit/AuthProvider";
import { stores } from "./lib/react-auth-kit/storeAuth.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <AuthProvider store={stores}>
      <BrowserRouter>
        <AppShell>
          <App />
        </AppShell>
      </BrowserRouter>
    </AuthProvider>
  </Provider>
);
