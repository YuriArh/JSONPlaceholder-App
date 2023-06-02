import ReactDOM from "react-dom/client";
import App from "./pages/App.tsx";
import UserPage from "./pages/UserPage.tsx";
import MyPage from "./pages/MyPage.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
import store from "./store/index.ts";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "*",
    element: <App />,
  },
  {
    path: "/user",
    element: <UserPage />,
  },
  {
    path: "/my",
    element: <MyPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
