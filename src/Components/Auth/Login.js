import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../Contexts/AuthContext";
import CircularProgress from "@material-ui/core/CircularProgress";
import GoogleButton from "react-google-button";
import "./Auth.css";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const { email, password } = formData;

  const { loginEmailAndPassword, signInWithGoogle } = useAuth();

  const history = useHistory();

  const [alert, setAlert] = useState({
    message: "",
    type: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      setAlert({ message: "", type: "" });
      await loginEmailAndPassword(email, password);
      history.push("/movies/top");
    } catch (err) {
      setAlert({ message: "Invalid email or password", type: "danger" });
      setLoading(false);
    }
  };

  const handleGoogleSignin = async () => {
    try {
      setAlert({ message: "", type: "" });
      await signInWithGoogle();
      history.push("/movies/top");
    } catch (err) {
      setAlert({ message: "Could not sign in", type: "danger" });
      console.log(err);
    }
  };

  return (
    <div className="Auth">
      <div className="container">
        <div className="header">
          <h2>Login</h2>
        </div>
        {alert.message && (
          <div className={`alert alert-${alert.type}`}>{alert.message}</div>
        )}
        <form onSubmit={handleSubmit}>
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
            <button className="btn" disabled={loading}>
              {loading ? (
                <CircularProgress color="primary" size="1rem" />
              ) : (
                "Login"
              )}
            </button>
            <span>
              <Link to="/signup">Signup</Link>
            </span>
          </div>
        </form>
        <div className="google-button">
          <GoogleButton onClick={handleGoogleSignin} />
        </div>
      </div>
    </div>
  );
};

export default Login;
