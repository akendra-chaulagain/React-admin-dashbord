import React from "react";
import "./Login.css";

const Login = () => {





  return (
    <>
      <div className="login">
        <form className="loginform">
          {/* email */}
          <label>Email</label>
          <input type="email" />
          {/* password */}
          <label>Password</label>
          <input
            type="password"
          />
          <button >Log In</button>
        </form>
      </div>
    </>
  );
};

export default Login;
