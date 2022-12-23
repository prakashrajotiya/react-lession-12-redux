import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import themeContext from "./themeContext";
import { useSelector } from "react-redux";
import store from "../store";
import { useDispatch } from "react-redux";
import { logout } from "../store/user";
const Header = () => {
  const { theme, settheme } = useContext(themeContext);
  const { userDetail } = useSelector((store) => {
    return store.user;
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const Logout = () => {
    dispatch(logout());
    navigate("");
  };
  return (
    <header
      className={`header ${theme == "light" ? "themelight" : "themedark"}`}
    >
      {Object.keys(userDetail).length > 0 && (
        <div>
          {/* <NavLink to="/">Home</NavLink> */}
          {Object.keys(userDetail).length > 0 && (
            <NavLink to="/search">Search</NavLink>
          )}
          <NavLink to="/about">About Us</NavLink>
        </div>
      )}
      <div className="flex ml-auto">
        {Object.keys(userDetail).length > 0 && (
          <div className="header-userdetail">
            Welcome, {userDetail.username},
            <button onClick={Logout}>Logout</button>
          </div>
        )}

        <div className="">
          <label className="switch">
            <input
              type="checkbox"
              onChange={() => {
                settheme(theme == "light" ? "dark" : "light");
              }}
            />
            <span className="slider round"></span>
          </label>
          <span className="text-white">{theme}</span>
        </div>
      </div>
    </header>
  );
};
export default Header;
