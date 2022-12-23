import { NavLink } from "react-router-dom";
import { useContext } from "react";
import themeContext from "./themeContext";
import { useSelector } from "react-redux";
import store from "../store";
const Header = () => {
  const { theme, settheme } = useContext(themeContext);
  const user = useSelector((store) => {
    store.user;
  });
  console.log(user, "user");
  return (
    <header
      className={`header ${theme == "light" ? "themelight" : "themedark"}`}
    >
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About Us</NavLink>
      </div>
      <div>
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
    </header>
  );
};
export default Header;
