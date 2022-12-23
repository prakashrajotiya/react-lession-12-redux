import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import "./app.css";
import Profile from "./components/Profile";
import { lazy, Outlet, Suspense, useState } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import Error from "./components/Error";
import Loader from "./components/loader";
import themeContext from "./components/themeContext";
import store from "./store/index";
import Login from "./components/Login";

const AboutUs = lazy(() => import("./components/About"));
const Search = lazy(() => import("./components/Search"));
const MemberDetail = lazy(() => import("./components/memberDetail"));

const Main = () => {
  const [systemTheme, setsystemTheme] = useState("light");
  return (
    <Provider store={store}>
      <themeContext.Provider
        value={{ theme: systemTheme, settheme: setsystemTheme }}
      >
        <div>
          <Header />
          <div className="container-fluid px-0">
            <Outlet />
          </div>
        </div>
      </themeContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      { path: "", element: <Login /> },
      {
        path: "Search",
        element: (
          <Suspense fallback={<Loader />}>
            <Search />
          </Suspense>
        ),
      },
      {
        path: "member/:login",
        element: (
          <Suspense fallback={<Loader />}>
            <MemberDetail />
          </Suspense>
        ),
      },
      {
        path: "about",
        element: (
          <Suspense fallback={<Loader />}>
            <AboutUs />
          </Suspense>
        ),
        children: [
          {
            path: "",
            element: <Profile name={"Prakash Kumar"} />,
          },
        ],
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
