import "./Auth.css";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

function ForgotPasswordView() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // should have some logic here which will be added later with the API's to handle the email confirmation.
    console.log("Password reset email sent to: ", email);
    toast.success("Password reset email sent successfully");
  };

  return (
    <div className="container">
      <h1 style={{
          display:"flex",
          alignItems:"center",
          justifyContent:"center",
          }}>Forgot Password</h1>
      <br></br>
      <br></br>
      <form onSubmit={handleSubmit}>
        <span className="input_label">
          <label htmlFor="email">Email</label>
          <input style={{
            borderRadius:"10px"
          }}
            type="email"
            id="email"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </span>
        <button type="submit">Send Reset Link</button>
        <p
          style={{
            margin: "20px 0",
            paddingTop: "10px",
          }}
          
        >
          Remember your password? <Link style={{
           color:"#ea9e24",
           textDecoration:"none",
          }}to="/">Sign in</Link>
        </p>
      </form>
    </div>
  );
}

export default ForgotPasswordView;
