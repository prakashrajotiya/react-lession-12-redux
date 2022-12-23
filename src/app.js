import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import "./app.css";
import Profile from "./components/Profile";
import { lazy, Outlet, Suspense, useContext, useState } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./components/Error";
import Loader from "./components/loader";
// import userContext from "./components/UserContext";
import themeContext from "./components/themeContext";

const AboutUs = lazy(() => import("./components/About"));
const Search = lazy(() => import("./components/Search"));
const MemberDetail = lazy(() => import("./components/memberDetail"));
const Main = () => {
  // const [emailID, setemailID] = useState("prakashrajotiya@gmail.com");
  const [systemTheme, setsystemTheme] = useState("light");
  // const { theme } = useContext(themeContext);
  return (
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
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      // { path: "", element: <Search /> },
      {
        path: "",
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
