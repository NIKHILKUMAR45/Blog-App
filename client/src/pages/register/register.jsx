import "./register.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

export default function Register() {

  const [password,setPassword]= useState("");
    const [username,setUsername]= useState("");
    const [email,setEmail]= useState("");

    const handleSubmit = async (e) => {
       e.preventDefault();
       console.log(username,email,password)
                try{
                     const res= await axios.post("/auth/register", {password,username,email})
                     res.data && (window.location.href = "/login")
                }catch(err){}
    }
    

   
  
  return (
    <>
    <div className="register">
        <span className="registerTitle">Register</span>
        <form className="registerForm">
            <label className="userName">UserName</label>
            <input type="text" className="registerInput" placeholder="Enter your username..." onChange={(e)=>setUsername(e.target.value)}></input>
            <label className="email">Email</label>
            <input type="text" className="registerInput" placeholder="Enter your email..." onChange={(e)=>setEmail(e.target.value)}></input>
            <label className="password">Password</label>
            <input type="password" className="registerInput" placeholder="Enter password..." onChange={(e)=>setPassword(e.target.value)}></input>
            <button className="registerButton" onClick={handleSubmit}>Register</button>
        </form>
        <Link to="/login">
        <button className="registerLoginButton" >Login</button>
  </Link>  </div></>
  );
}
