import React from "react";
import Footer from "../Footer";
import "./SignUp.css";

export default function SignUp() {
    return (
      <>
      <div className="sign-up">
      <span className="registerTitle">Sign Up</span>
      <form className="registerForm">
        <label>Username</label>
        <input className="registerInput" type="text" placeholder="Enter your username..." />
        <label>Email</label>
        <input className="registerInput" type="text" placeholder="Enter your email..." />
        <label>Password</label>
        <input className="registerInput" type="password" placeholder="Enter your password..." />
        <button className="registerButton">Register</button>
      </form>
        <button className="registerLoginButton">Login</button>
    </div>
    <Footer />
    </>
    )
}