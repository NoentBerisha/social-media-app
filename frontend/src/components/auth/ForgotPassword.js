import "./Auth.css";
import React, { useState } from "react";
import { toast } from "react-toastify";

function ForgotPasswordView() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // should have some logic here which will be added later with the API's to hanlde the email confirmation.
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
        <p>
          Remember your password? <a href="/signin">Sign in</a>
        </p>
      </form>
    </div>
  );
}

export default ForgotPasswordView;
