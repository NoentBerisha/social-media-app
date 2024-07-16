import "./Auth.css";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";

function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);

  const togglePasswordVisibility = (number) => {
    if (number === 1) {
      setIsPasswordVisible(!isPasswordVisible);
    } else if (number === 2) {
      setIsConfirmPasswordVisible(!isConfirmPasswordVisible);
    } else {
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
    } 
    else if (!(password.length >= 8 && password.match(/[a-z]/) && password.match(/[A-Z]/) && password.match(/[0-9]/) && password.match(/[^a-zA-Z\d]/))) {
      toast.error("Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, one digit, and one special character");
    }
    else {
      //define the sign up function

      console.log("username is: ", username);
      console.log("email is: ", email);
      console.log("password is: ", password);
      console.log("confirm password is: ", confirmPassword);
      toast.success("Account created successfully");
    }
  };

  return (
    <div className="container">
      <h1>Create an Account</h1>

      <form onSubmit={handleSubmit}>
        <span className="input_label">
          <label htmlFor="username">User Name</label>
          <input
            type="text"
            id="username"
            name="username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </span>

        <span className="input_label">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </span>

        <span className="input_label">
          <label htmlFor="password">Password</label>
          <div className="password" style={{ position: "relative" }}>
            <input
              type={isPasswordVisible ? "text" : "password"}
              id="password"
              name="password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <FontAwesomeIcon
              icon={isPasswordVisible ? faEyeSlash : faEye}
              onClick={() => togglePasswordVisibility(1)}
              className="icon-eye"
            />
          </div>
        </span>

        <span className="input_label">
          <label htmlFor="password2">Confirm Password</label>
          <div className="password" style={{ position: "relative" }}>
            <input
              type={isConfirmPasswordVisible ? "text" : "password"}
              id="password2"
              name="password2"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <FontAwesomeIcon
              icon={isConfirmPasswordVisible ? faEyeSlash : faEye}
              onClick={() => togglePasswordVisibility(2)}
              className="icon-eye"
            />
          </div>
        </span>

        <button type="submit">Sign Up</button>
        <p>
        Already have an Account? <a href="">Sign in</a>
      </p>
      </form>

      
    </div>
  );
}

export default SignUp;
