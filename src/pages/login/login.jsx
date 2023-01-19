import "./login.css";
import { Link } from "react-router-dom"; 

export default function login() {
  return (
    <div className="login">
        <span className="loginTitle">Login</span>
        <form className="loginForm">
        <label className="email">Email</label>
        <input type="text"  className="loginInput"placeholder="Enter your email..."/>
        <label className="password">Password</label>
        <input type="password" className="loginInput" placeholder="Enter password...."/>

    <button className="loginButton">Login</button>
    </form>
    <Link to="/register">
    <buttom className="loginRegisterButton">Register</buttom>
   </Link> </div>
  )
}
