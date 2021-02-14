import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password1: "",
  });

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const { name, email, password, password1 } = formData;

  return (
    <div className="Auth">
      <div className="container">
        <div className="header">
          <h2>Signup</h2>
        </div>
        <form>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              name="name"
              value={name}
              onChange={onChange}
            />
          </div>
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
            <input
              type="password"
              className="form-control"
              placeholder="Confirm Password"
              name="password1"
              value={password1}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <button className="btn">Signup</button>
            <span>
              <Link to="/login">Login</Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
