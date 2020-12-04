import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authLoginAction } from "../action/auth";

const Login = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const [password, setpassword] = useState("");
  const [username, setusername] = useState("");
  if (token) {
    alert("login berhasil");
  }

  return (
    <div>
      <input
        type="text"
        placeholder="username"
        onChange={(e) => setusername(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        onChange={(e) => setpassword(e.target.value)}
      />
      <button
        onClick={() =>
          dispatch(
            authLoginAction({
              password: password,
              username: username,
            })
          )
        }
      >
        Login
      </button>
    </div>
  );
};

export default Login;
