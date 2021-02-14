import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Auth.css";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const { email, password } = formData;

  return (
    <div className="Auth">
      <div className="container">
        <div className="header">
          <h2>Login</h2>
        </div>
        <form>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              name="email"
              value={email}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              name="password"
              value={password}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <button className="btn">Login</button>
            <span>
              <Link to="/signup">Signup</Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
