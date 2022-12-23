import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../store/user";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const dispatch = useDispatch();
  const nevigate = useNavigate();
  const loginSubmit = (e) => {
    e.preventDefault();

    if (username == "" || password == "") {
      return;
    }
    dispatch(
      addUser({
        username: username,
        password: password,
      })
    );
    nevigate("/search");
  };
  return (
    <>
      <form className="loginform" onSubmit={loginSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => {
            setusername(e.target.value);
          }}
          placeholder="Username"
        />
        <input
          value={password}
          onChange={(e) => {
            setpassword(e.target.value);
          }}
          type="password"
          placeholder="Password"
        />
        <div>
          <button>Submit</button>
        </div>
      </form>
    </>
  );
};
export default Login;
