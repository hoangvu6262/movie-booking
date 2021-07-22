//hook đươc dùng để setState trong function component

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postLogin } from "../../store/actions/user.action";
import { useHistory } from "react-router-dom";

export default function Login() {
  const result = useState(0);
  console.log(result); //[state, setState]

  const dispatch = useDispatch();
  const history = useHistory();

  // tạo ra state để lưu info user
  const [user, setUser] = useState({
    taiKhoan: "",
    matKhau: "",
  });

  const handleChange = (event) => {
    const { value, name } = event.target;
    console.log({ value, name });
    //setState
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(postLogin(user.taiKhoan, user.matKhau, history));
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="taiKhoan">tài khoản: </label>
          <input
            type="text"
            className="form-control"
            id="taiKhoan"
            aria-describedby="emailHelp"
            name="taiKhoan"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="matKhau">mật khẩu: </label>
          <input
            type="password"
            className="form-control"
            id="matKhau"
            name="matKhau"
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
}
