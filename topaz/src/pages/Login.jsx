import React, { useState } from "react";
import { Link } from "react-router-dom";
function Login() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const user = {
    name: "Bayo",
    pass: "123456",
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (user.name == formData.username && user.pass == formData.password) {
      alert("Login successful");
      setFormData({
        username: "",
        email: "",
        password: "",
      });
      window.location = "/home";
    } else {
      alert("Incorrect Login Details");
    }
  };

  return (
    <div>
      <div className="contain-center white-bg">
        <form onSubmit={handleLogin}>
          <h1>Login</h1>
          <input
            type="text"
            name="username"
            value={formData.username}
            placeholder="username"
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            placeholder="password"
            onChange={handleChange}
          />
          <button className="full-btn" type="submit">
            Login
          </button>
          <p>
            Don't have an account?{" "}
            <span>
              <Link to="/register">
                <a href="#">Register</a>
              </Link>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
