import "./Login.css";

function Login({ setCurrentView }) {
  const handleForgotPassword = () => {
    setCurrentView('forgotPassword');
  };

  const handleSignUp = () => {
    setCurrentView('signUp');
  };

  return (
    <div className="container">
      <form>
        <h2>Login to your account</h2>

        <div className="input_label">
          <label for="username">Username</label>
          <input type="text" id="username" name="username" />
        </div>

        <div className="input_label">
          <label for="password">Password</label>
          <input type="password" id="password" name="password" />
        </div>

        <div className="remember_me">
          <label>
            <input type="checkbox" /> Remember me
          </label>
          <div className="forgot_password" onClick={handleForgotPassword}>
            Forgot password
          </div>
        </div>

        <button type="submit">Login</button>

        <div className="register_link">
          <p>
            Don't have an account? <span onClick={handleSignUp} className="sign_up_link">Sign up</span>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
