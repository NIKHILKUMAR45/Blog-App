import "./register.css";
import { Link } from "react-router-dom";

export default function register() {
  return (
    <div className="register">
        <span className="registerTitle">Register</span>
        <form className="registerForm">
            <label className="userName">UserName</label>
            <input type="text" className="registerInput" placeholder="Enter your username..."></input>
            <label className="email">Email</label>
            <input type="text" className="registerInput" placeholder="Enter your email..."></input>
            <label className="password">Password</label>
            <input type="password" className="registerInput" placeholder="Enter password..."></input>
            <button className="registerButton">Register</button>
        </form>
        <Link to="/login">
        <button className="registerLoginButton">Login</button>
  </Link>  </div>
  );
}
