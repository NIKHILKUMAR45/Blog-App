import "./login.css";
import { Link } from "react-router-dom"; 
import { Context } from "../../context/Context";
import axios from "axios";
import { useContext, useRef } from "react";

export default function Login() {
  
  const userRef = useRef();
  const passwordRef= useRef();
  const {user, dispatch, isFetching} = useContext(Context)
   console.log(isFetching)
  const handleSubmit = async(e) =>{
    e.preventDefault();
    dispatch({type:"LOGIN_START"})
    try{
    const res = await axios.post("/auth/login",{
      username: userRef.current.value,  
      password: passwordRef.current.value,
    });
    console.log(res.data)
     dispatch({ type:"LOGIN_SUCCESS",payload: res.data });
    } catch (err) {
      dispatch({type:"LOGIN_FAILURE" });

    }
  };

  console.log(user);
  return (
    <>
    <div className="login">
        <span className="loginTitle">Login</span>
        <form className="loginForm" onSubmit={handleSubmit}>
        <label className="email">Username</label>
        <input type="text"  className="loginInput"placeholder="Enter your Username..."
        ref={userRef}
        />
        <label className="password">Password</label>
        <input type="password" className="loginInput" placeholder="Enter password...."
        ref={passwordRef} 
        />

    <button className="loginButton" type="submit" disabled={isFetching}>Login</button>
    </form>
    <Link to="/register">
    <button className="loginRegisterButton">Register</button>
   </Link> </div>
   </>
  )
}
