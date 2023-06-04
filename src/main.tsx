import ReactDOM from "react-dom/client";
import App from "./pages/App.tsx";
import UserPage from "./pages/UserPage.tsx";
import MyPage from "./pages/MyPage.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
import store from "./store/index.ts";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="my" element={<MyPage />}></Route>
        <Route path="user/:id" element={<UserPage />}></Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
