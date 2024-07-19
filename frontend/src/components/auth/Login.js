import "./Login.css";
import { useNavigate, Link } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const handleForgotPassword = () => {
    navigate('/ForgotPassword');
  };

  const handleSignUp = () => {
    navigate('/SignUp');
  };

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
          <label>
            <input type="checkbox" /> Remember me
          </label>
          <div className="forgot_password">
            <Link to='/ForgotPassword'>
            Forgot password
            </Link>
          </div>
        </div>

        <button type="submit">Login</button>

        <div className="register_link">
          <p>
            Don't have an account? <Link to="/SignUp">Sign up</Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
