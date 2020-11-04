import React from "react";
import "../styles/SignUp.css";

const SignUp = () => {
  return (
    <div className="signup-container">
      <form className="signup-form">
        <label>
          Name:
          <input className="form-input" type="text" value="" />
        </label>
        <label>
          Mail:
          <input className="form-input" type="text" value="" />
        </label>
        <label>
          Password:
          <input className="form-input" type="text" value="" />
        </label>
        <input className="signup-button" type="submit" value="Sign up" />
      </form>
    </div>
  );
};

export default SignUp;
