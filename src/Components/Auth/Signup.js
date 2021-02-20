import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "./../../Contexts/AuthContext";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password1: "",
  });

  const { signup } = useAuth();

  const [alert, setAlert] = useState({
    message: "",
    type: "",
  });

  const [loading, setLoading] = useState(false);

  const history = useHistory();

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const { name, email, password, password1 } = formData;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (password !== password1) {
      return setAlert({ message: "Passwords do no match", type: "danger" });
    }
    try {
      setAlert({ message: "", type: "" });
      await signup(email, password, name);
      setAlert({ message: "Account created", type: "success" });
      history.push("/movies/top");
    } catch (err) {
      setAlert({ message: "Could not create account", type: "danger" });
    }
    setLoading(false);
  };

  return (
    <div className="Auth">
      <div className="container">
        <div className="header">
          <h2>Signup</h2>
        </div>
        {alert.message && (
          <div className={`alert alert-${alert.type}`}>{alert.message}</div>
        )}
        <form onSubmit={handleSubmit}>
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
            <button className="btn" disabled={loading}>
              Signup
            </button>
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
