import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { authRegisterAction } from "../action/auth";
import { getAllChecklistAction } from "../action/checklist";

const Register = () => {
  const dispatch = useDispatch();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [username, setusername] = useState("");

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
      <input
        type="email"
        placeholder="email"
        onChange={(e) => setemail(e.target.value)}
      />

      <button
        onClick={() =>
          dispatch(
            authRegisterAction({
              password: password,
              username: username,
              email: email,
            })
          )
        }
      >
        Register
      </button>
    </div>
  );
};

export default Register;
