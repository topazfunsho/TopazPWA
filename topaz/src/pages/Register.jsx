import { Link } from "react-router-dom";

function Register() {
  const users = [];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted");
  };

  return (
    <div className="contain-center white-bg">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        <input type="text" placeholder="username" />
        <input type="password" placeholder="password" />
        <button className="full-btn" type="submit">
          Register
        </button>
        <p>
          Already have an account?{" "}
          <span>
            <Link to="/login">
              <a href="#">Login</a>
            </Link>
          </span>
        </p>
      </form>
    </div>
  );
}

export default Register;
