import "./Auth.css";

function SignUp() {
  return (
    <div className="container">
      <h1>Create an Account</h1>

      <form>
        <span className="input_label">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" />
        </span>

        <span className="input_label">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />
        </span>

        <span className="input_label">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />
        </span>

        <span className="input_label">
          <label htmlFor="password2">Confirm Password</label>
          <input type="password" id="password2" name="password2" />
        </span>

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
