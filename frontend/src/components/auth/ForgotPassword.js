import "./Auth.css";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { Link } from 'react-router-dom';

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
      <h1>Forgot Password</h1>

      <form onSubmit={handleSubmit}>
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
        <button type="submit">Send Reset Link</button>
        <p style={{
          borderTop: '1px solid #ccc',
          margin: '20px 0',
          paddingTop: '10px',
        }}>
          Remember your password? <Link to="/">Sign in</Link>
        </p>
      </form>
    </div>
  );
}

export default ForgotPasswordView;
