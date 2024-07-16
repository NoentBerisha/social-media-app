import "./Login.css";

function Login() {
  return (
    <div className="container">
      <form>
      <h2>Login to your account</h2> 
        <div className="input_label">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" />
        </div>

        <div className="input_label">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />
        </div>

        <div className="remember_me">
          <label><input type="checkbox"/>Remember me</label>
          <a href="#">Forgot password </a>
        </div>

        <button type="submit">Login</button>

        <div className ="register_link">
            <p>Don't have an account? <a href ="#">Sign up</a> </p>
        </div>
     
      </form>
    </div>
  );
}

export default Login;
